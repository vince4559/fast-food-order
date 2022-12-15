import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import {Link as ReactRouterLink } from "react-router-dom"

export const ErrorPage = () => {
  return(
    <Box p={5} bg={'gray'} h={'100vh'}>
      <Stack w={'70%'}  border={'solid 1px black'} p={4} rounded='2xl'>
      <Heading my={5}>Page Not Found</Heading>
     <Text color={'white'} mb={4}>
      Looks like you've followed a broken link or entered a URl that doesn't exist on this site.
      </Text>
      <Link p={3} color={'blue'} as={ReactRouterLink} to="/">Back to our site</Link>

      </Stack>
    </Box>
  )
};
