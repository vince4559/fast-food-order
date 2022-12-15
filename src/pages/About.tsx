import { Box, Button, Grid, GridItem, Heading, HStack, Image, Link, Stack, Text, VStack } from '@chakra-ui/react'
import { AiFillEnvironment,AiOutlineUsergroupAdd,AiOutlineSmile } from "react-icons/ai";
import bck from "../images/bck.jpg"
import lisbon from "../images/lisbon.jpg"
import san from "../images/san-francisco.jpg"
import berlin from "../images/berlin.jpg"
import lon from "../images/london.jpg"

const About = () => {
  return (
   <Box p={5}>
    <Grid templateColumns='repeat(2, 1fr)'>
        <GridItem colSpan={[2,2,1,1]}>
            <Stack p={5} >
                <Heading size={'lg'} color={'teal'}>About us__</Heading>
                <Text p={3} fontFamily={'serif'} fontSize={'1.2rem'}>
                    At omini food we make healthy meals for everyone who want to enjoy fresh organic food without the hassle of cooking. why go thorugh the stress of cooking when we can make it easy for you at affordable and luxurious style.you deserve to eat healthy weather you at a go or at home. we got you cover.
                </Text>
                <Button w={'fit-content'} colorScheme={'orange'} >Read More</Button>
                
            </Stack>
        </GridItem>
        <GridItem colSpan={[2,2,1,1]}>
            <VStack p={5}>
                <Image alt='bg' src={bck} rounded={'2xl'} objectFit='cover' />
            </VStack>
        </GridItem>
    </Grid>
    <Stack p={5} mt={'3rem'} my={2}>
        <Heading size={'lg'} color='teal.600' textAlign={'center'}>
        We're currently in these cities
        </Heading>
        <Grid templateColumns='repeat(4, 1fr)' p={5} gap={5} >
            <GridItem colSpan={[4,2,1,1]}>
                <VStack spacing={1}  >
                    <HStack>
                        <AiFillEnvironment />
                    <Heading size={'md'}>Lisbon</Heading>
                    </HStack>
                    <Image alt='bg' src={lisbon} rounded={'2xl'} objectFit='cover' w={'150px'} />
                    <HStack>
                    <AiOutlineUsergroupAdd  color='green'/>
                    <Text> 1600+ happy eaters</Text>
                    </HStack>
                   <HStack>
                    <AiOutlineSmile color='green' />
                   <Text>60+ top chefs</Text>
                   </HStack>
                    <Link href='##' color={'blue'}>@omnifood_lx</Link>
                </VStack>
            </GridItem>
            <GridItem colSpan={[4,2,1,1]}>
            <VStack spacing={1}  >
                    <HStack>
                        <AiFillEnvironment />
                    <Heading size={'md'}>San Francisco</Heading>
                    </HStack>
                    <Image alt='bg' src={san} rounded={'2xl'} objectFit='cover' 
                    w={'150px'} />
                    <HStack>
                    <AiOutlineUsergroupAdd  color='green'/>
                    <Text> 3700+ happy eaters</Text>
                    </HStack>
                   <HStack>
                    <AiOutlineSmile color='green' />
                   <Text>160+ top chefs</Text>
                   </HStack>
                    <Link href='##' color={'blue'}>@omnifood_sf</Link>
                </VStack>
            </GridItem>
            <GridItem colSpan={[4,2,1,1]}>
            <VStack spacing={1}  >
                    <HStack>
                        <AiFillEnvironment />
                    <Heading size={'md'}>Berlin</Heading>
                    </HStack>
                    <Image alt='bg' src={berlin} rounded={'2xl'} objectFit='cover' 
                    w={'150px'} />
                    <HStack>
                    <AiOutlineUsergroupAdd  color='green'/>
                    <Text>2300+ happy eaters</Text>
                    </HStack>
                   <HStack>
                    <AiOutlineSmile color='green' />
                   <Text>110+ top chefs</Text>
                   </HStack>
                    <Link href='##' color={'blue'}>@omnifood_berlin</Link>
                </VStack>
            </GridItem>
            <GridItem colSpan={[4,2,1,1]}>
            <VStack spacing={1}  >
                    <HStack>
                        <AiFillEnvironment />
                    <Heading size={'md'}>London</Heading>
                    </HStack>
                    <Image alt='bg' src={lon} rounded={'2xl'} objectFit='cover' 
                    w={'150px'} />
                    <HStack>
                    <AiOutlineUsergroupAdd  color='green'/>
                    <Text>1200+ happy eaters</Text>
                    </HStack>
                   <HStack>
                    <AiOutlineSmile color='green' />
                   <Text>50+ top chefs</Text>
                   </HStack>
                    <Link href='##' color={'blue'}>@omnifood_london</Link>
                </VStack>
            </GridItem>
        </Grid>
    </Stack>
   </Box>
  )
}

export default About
