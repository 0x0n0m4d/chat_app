import { Box, BoxProps, Heading as KumaHeading } from '@kuma-ui/core';

interface Props extends BoxProps {}

export const Heading = ({ children, ...boxProps }: Props) => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginY="20px"
      {...boxProps}
    >
      <KumaHeading as="h1" fontSize="3rem">
        {children}
      </KumaHeading>
    </Box>
  );
};
