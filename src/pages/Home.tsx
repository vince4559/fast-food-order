import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Header from "../component/Header"
import hero from '../images/hero.jpg'


const Home = () => {
  return (
   <Box>
    <Header />
    <Box w={'100vw'} h={'100vh'} bg={'blackAlpha.700'} p={3} bgImage={hero} bgBlendMode='color-burn' 
   bgPos={'center'} bgRepeat={'no-repeat'} bgSize='cover'  >

      <Stack w={['70%','80%', '50%', '40%']} position={'absolute'} 
      top={['10rem', '12rem','10rem','10rem']} ml={['2rem','2rem','3rem','3rem']} spacing={10}>
      <Heading  
      textAlign={'center'}  size={'2xl'} lineHeight={1.3} 
      color={'green.100'} textShadow={'inner'}>
        Goodbye junk food. <br/> Hello super 
        <Text textDecoration={'underline'} fontFamily='cursive' >healthy meals</Text>
      </Heading>
      <Button size={'lg'} w='fit-content' colorScheme={'red'} 
      left={['4rem', '5rem', '7rem','10rem']} >
        <Link to={'/ourmeal'}>I’m hungry </Link>
      </Button>
      </Stack>
      <HStack bg={'black'} w={'fit-content'} p={3} 
      position={'absolute'} borderRadius={'2xl'}
      bottom={'4rem'} right={'3rem'}>
        <Stack color={'white'} spacing={0}>
          <Heading ml={'1.8rem'} size={'md'}>500+</Heading>
          <Text>food partners</Text>
        </Stack>
        <Stack color={'yellow'} spacing={0}>
          <Heading ml={'1.8rem'} size={'md'}>1k+</Heading>
          <Text>food delivered</Text>
        </Stack>
        <Stack color={'red'} spacing={0}>
          <Heading  size={'md'}>12k+</Heading>
          <Text>Clients</Text>
        </Stack>
      </HStack>
   </Box>
   </Box>
  )
}

export default Home
