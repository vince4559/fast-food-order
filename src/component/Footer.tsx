import { Box, Grid, GridItem, Image, Text, VStack, Heading, Link } from '@chakra-ui/react'
import logo from '../images/logo-white.png'
import { AiOutlineFacebook, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <Box p={3} bg={'blackAlpha.700'} w={'100vw'}>
    <Grid templateColumns='repeat(3, 1fr)'>
        <GridItem colSpan={[3,3,1,1]}>
          <VStack>
            <Image alt='foot-img' src={logo} w={'50px'} />
            <Text color={'white'}>Goodbye junk food. Hello super healthy meals.</Text>
          </VStack>
        </GridItem>
        <GridItem colSpan={[3,3,1,1]}>
          <VStack color={'blue.100'} >
            <Heading color={'white'} size={'md'}>About</Heading>
            <Link href='##'>Our Customers</Link>
            <Link href='##'>Features</Link>
            <Link href='##'>Impact</Link>
          </VStack>
        </GridItem>
        <GridItem colSpan={[3,3,1,1]}>
          <VStack>
          <Heading color={'white'} size={'md'}>Socials</Heading>
            <AiFillInstagram color='white' fontSize={'1.5rem'} />
            <AiOutlineFacebook color='white' fontSize={'1.5rem'} />
            <AiOutlineTwitter color='white' fontSize={'1.5rem'} />
          </VStack>
        </GridItem>
    </Grid>
    </Box>
  )
}

export default Footer
