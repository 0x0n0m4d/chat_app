import React from 'react';
import { Box } from '@kuma-ui/core';
import Button from './ui/button';

export const Header = () => {
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth={2}
      width="100%"
      height="7rem"
      padding={20}
    >
      <Box>
        <h3 className="text-xl font-bold">Chat</h3>
        <Box display="flex" alignItems="center" gap={4}>
          <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
          <h3>2 onlines</h3>
        </Box>
      </Box>
      <Button>Logout</Button>
    </Box>
  );
};
