import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import SingleProducts from '../component/SingleProducts'
import { DataContext } from '../context/Context'
import { productsProp } from '../data'

const ourmeal = () => {
  const {state:{products}} = DataContext()
  return (
   <Stack spacing={0} w={'100vw'} mb={'1.5rem'}>
    <Heading p={3} textAlign={'center'} size={'lg'} color={'teal'}>
      Our Daily Dishes
      </Heading>
      <Text textAlign={'center'} fontSize={'1.1rem'} color={'tomato'}>
        Check out our daily meal that suits your day
      </Text>
     <Flex w={'100vw'}  wrap={'wrap'} gap={2} p={3}>
      {
        products.map((prod:productsProp) => {
          return <SingleProducts key={prod.id} prod={prod} />
        })
      }
    </Flex>
   </Stack>
  )
}

export default ourmeal
