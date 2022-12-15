import { Box, Button,  Grid, GridItem, Heading, HStack, Image, Input,  Text, VStack } from '@chakra-ui/react'
import cust1 from "../images/customer-1.jpg"
import cust2 from "../images/customer-2.jpg"
import cust3 from "../images/customer-3.jpg"


const Testimonial = () => {
  return (
   <Box p={5} w={'100vw'}>
    <Heading size={'lg'}  color={'green'} p={4} mb={'1rem'}>
        Testimonials__
    </Heading>
    <Heading size={'md'} textAlign={'center'} color={'green'}>
        Our customers can't live without us
    </Heading>
    <Grid templateColumns='repeat(3, 1fr)' my={'3rem'} gap={5}>
        <GridItem colSpan={[3,3,1,1]}>
        <VStack>
        <Image alt='cust-test'  src={cust1} w={'100px'} rounded={'full'}/>
        <Heading size={'sm'}>(Alberto Duncan)</Heading>
            <Text px={4}>
            Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals! 
            </Text>
          
        </VStack>
        </GridItem>
        <GridItem colSpan={[3,3,1,1]}>
        <VStack>
        <Image alt='cust-test'  src={cust2} w={'100px'} rounded={'full'}/>
        <Heading size={'sm'}>(Joana Silva)</Heading>
            <Text px={4}>
            Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
            </Text>
           
        </VStack>
        </GridItem>
        <GridItem colSpan={[3,3,1,1]}>
        <VStack>
        <Image alt='cust-test'  src={cust3} w={'100px'} rounded={'full'}/>
        <Heading size={'sm'}>(Milton Chapman)</Heading>
            <Text px={4}>
            I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!            </Text>
           
        </VStack>
        </GridItem>
    </Grid>
        <VStack spacing={6} my={4} p={4}>
            <Heading size={'md'}>Subscribe to our newsletter</Heading>
        <HStack w={['100%','100%','50%','50%']}>
        <Input type={'email'}  placeholder={'enter your email'} />
        <Button colorScheme={'red'} >Subsribe</Button>
        </HStack>   
    </VStack>    
   </Box>
  )
}

export default Testimonial
