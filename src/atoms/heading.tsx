import { Box, BoxProps, Heading } from '@kuma-ui/core';

interface Props extends BoxProps {}

export const HeadingAtom = ({ children, ...boxProps }: Props) => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginY="20px"
      {...boxProps}
    >
      <Heading as="h1" fontSize="2rem">
        {children}
      </Heading>
    </Box>
  );
};
