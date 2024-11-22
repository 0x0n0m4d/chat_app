import { Box, InputProps, Input as KumaInput } from '@kuma-ui/core';

interface Props extends InputProps {
  id: string;
  placeholder: string;
  type: string;
}

export const Input = ({ id, placeholder, type, ...inputProps }: Props) => {
  const hasPlaceholder: boolean = placeholder !== '';
  return (
    <Box>
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
        className="bg-secondary border border-gray-800 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
        required
        {...inputProps}
      />
    </Box>
  );
};
