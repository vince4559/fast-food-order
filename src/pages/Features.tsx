import { Box, Grid, GridItem, Heading, Stack, Text, Image, VStack } from '@chakra-ui/react'
import mins from "../images/20mins.png"
import organic from "../images/organic.png"
import days from "../images/days.png"
import bck from "../images/bck.jpg"
import order from "../images/order.png"

const Features = () => {
  return (
    <Box w={'100vw'}  p={5} bg={'teal.50'} bgImg={bck} bgColor={'blackAlpha.700'} 
    bgPos={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} bgBlendMode={'color-dodge'} >
        <Heading textAlign={'center'} color={'turquoise'}>
            Get <span style={{color:'greenyellow'}}>Food</span> Fast — Not 
            <span style={{color:'greenyellow'}}> Fast</span> Food.
        </Heading>
        <Text my={'2rem'} p={4} fontFamily={'sans-serif'} color={'white'}
        fontSize={'1.2rem'} textAlign={'center'} >
        Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
        </Text>

        <Grid gridTemplateColumns='repeat(4, 1fr)' gap={3}  p={4} textColor={'black'} fontFamily={'sans-serif'} fontSize={'1.1rem'} >
            <GridItem colSpan={[4,2,2,1]}>
                <Stack bg={'white'} p={3} borderRadius={'2xl'} spacing={4} opacity={.7}> 
                <VStack>
                <Image alt="365days" src={days} w={'100px'} />
                </VStack>
                <Heading size={'md'} textAlign={'center'} color={'darkgreen'} fontFamily={'cursive'}>
                    Up to 365 days/year
                </Heading>
                <Text p={3}>
                Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                </Text>
                </Stack>
            </GridItem>

            <GridItem colSpan={[4,2,2,1]}>
            <Stack bg={'white'} p={2} borderRadius={'2xl'} spacing={5} opacity={.7}>
            <VStack>
                <Image alt="20mins" src={mins} w={'80px'} />
                </VStack>
                <Heading size={'md'} textAlign={'center'} 
                color={'darkgreen'} fontFamily={'cursive'}>
                    Ready in 20 minutes
                </Heading>
                <Text p={1}>
                You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
                </Text>
                </Stack>
            </GridItem>

            <GridItem colSpan={[4,2,2,1]}>
            <Stack bg={'white'} p={3} borderRadius={'2xl'} spacing={4} opacity={.7}>
            <VStack>
                <Image alt="organic" src={organic} w={'80px'} />
                </VStack>
                <Heading size={'md'} textAlign={'center'} 
                color={'darkgreen'} fontFamily={'cursive'}>
                    100% organic
                </Heading>
                <Text p={2}>
                All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
                </Text>
                </Stack>
            </GridItem>

            <GridItem colSpan={[4,2,2,1]}>
            <Stack bg={'white'} p={3} borderRadius={'2xl'} spacing={4} opacity={.7}>
            <VStack>
                <Image alt="order" src={order} w={'90px'} />
                </VStack>
                <Heading size={'md'} textAlign={'center'} 
                color={'darkgreen'} fontFamily={'cursive'}>
                    Order anything
                </Heading>
                <Text p={2}>
                We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
                </Text>
                </Stack>
            </GridItem>
        </Grid>
    </Box>
  )
}

export default Features
