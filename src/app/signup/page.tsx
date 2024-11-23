import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@kuma-ui/core';
import { Container } from '@/atoms/container';
import { Heading } from '@/atoms/heading';
import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Login() {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="53rem"
    >
      <Box
        maxWidth="70%"
        minHeight="50rem"
        width={['400px', '500px', '550px', '723px', '933px']}
        height={['auto', '50rem']}
        borderWidth={2}
        borderRadius="0.4rem"
        paddingX={['3rem', '7rem', '10rem', '15rem']}
        paddingY="1rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          width="100%"
          maxHeight="50rem"
          height="100%"
        >
          <Heading>Signup</Heading>
          <Box display="grid" gap="2rem" width="100%" height="100%">
            <Input id="email" placeholder="Email" type="email" />
            <Input id="password" placeholder="Password" type="password" />
            <Input
              id="password_check"
              placeholder="Confirm Password"
              type="password"
            />
          </Box>
          <Button className="w-60 h-30 text-xl rounded-full mt-10 py-3 text-foreground hover:bg-primary/70 active:bg-primary/50">
            Register
          </Button>
          <Box
            marginY="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              position="absolute"
              width="auto"
              textAlign="center"
              fontSize="1.327rem"
              backgroundColor="hsl(var(--background))"
            >
              or
            </Box>
            <Box
              width={['40vh', '50vh']}
              height="1px"
              backgroundColor="hsl(var(--secondary))"
              content=""
            />
          </Box>
          <Button className="grid static h-[5rem] w-[5rem] rounded-full border border-secondary bg-transparent hover:bg-primary/20 active:bg-primary/40">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-foreground/50 h-[3rem] w-[3rem]"
            />
          </Button>
          <Box height="auto" paddingTop="10px">
            <span className="text-foreground">Already have an account? </span>
            <a href="/login" className="text-primary font-bold">
              Sign-in
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
