import { Box, BoxProps } from '@kuma-ui/core';

interface Props extends BoxProps {}

export const Container = ({ children, ...boxProps }: Props) => {
  return (
    <Box
      maxWidth="100%"
      maxHeight="100%"
      width={['auto', 'auto', '723px', '933px', '1127px']}
      height="100vh"
      marginLeft={['0em', '1em', 'auto']}
      marginRight={['0em', '1em', 'auto']}
      marginTop={['1em', '2em', '2.375em']}
      marginBottom={['1em', '1.5em', '1.753em']}
      borderWidth={2}
      borderRadius="0.375rem"
      {...boxProps}
    >
      {children}
    </Box>
  );
};
