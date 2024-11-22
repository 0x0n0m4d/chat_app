'use client';

import { useState } from 'react';
import { Box, InputProps, Input as KumaInput } from '@kuma-ui/core';

interface Props extends InputProps {
  id: string;
  placeholder: string;
  type: string;
}

export const Input = ({ id, placeholder, type, ...inputProps }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(!isFocused);
  };
  const hasPlaceholder: boolean = placeholder !== '';

  return (
    <Box display="grid" gap="2px" width="100%" height="100%">
      {hasPlaceholder ? (
        <label className="block mb-2 text-sm font-medium text-foreground">
          {placeholder}
        </label>
      ) : (
        <></>
      )}
      <KumaInput
        id={id}
        type={type}
        display="block"
        width="100%"
        backgroundColor="hsl(var(--secondary))"
        color="hsl(var(--foreground))"
        borderWidth="1px"
        borderColor={isFocused ? 'hsl(var(--primary))' : 'gray'}
        borderRadius="var(--radius)"
        outline={isFocused ? 'hsl(var(--primary)) solid 1px' : '0px'}
        paddingY="5px"
        paddingX="4px"
        onFocus={handleFocus}
        onBlur={handleFocus}
        required
        {...inputProps}
      />
    </Box>
  );
};
