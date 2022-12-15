import { Button,  Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { DataContext } from '../context/Context'
import { ActionType } from '../context/Reducer'
import { productsProp } from '../data'
import CurrencyFormat from '../utility/CurrencyFormat'

interface SinglePros {
    prod: productsProp
}

const SingleProducts:React.FC<SinglePros> = ({prod}) => {
    const {state:{cart}, dispatch} = DataContext()
  console.log(prod.image)
  return (
   <VStack w={['100vw', '100vw','fit-content', 'fit-content']} >
    <Stack  p={4}  border={'solid 1px gray'} borderRadius={'md'} 
    shadow={'base'} h={'fit-content'} spacing={1} bg={'whiteAlpha.300'}>
    <Image alt='product image' src={prod.image} 
    w={'200px'} objectFit={'contain'}  />
    <Text w={'200px'} wordBreak={'break-word'} textAlign='center' fontFamily={'serif'}>
        {prod.name}
    </Text>
    <Text color={'red'}>{CurrencyFormat(prod.price)}</Text>
    {
        cart.some((p:any) => p.id === prod.id)? 
        (<Button colorScheme={'red'}
        onClick={() => dispatch({type:ActionType.REMOVE_FROM_CART, payload:prod})}>
        Remove from cart
    </Button>) : 
    (<Button disabled={!prod.inStock} color={'green'}
    onClick={() => dispatch({type:ActionType.ADD_TO_CART, payload:prod})}>
    {prod.inStock? ('add to cart'): ('out of stock')}
    </Button >)
    }        
   </Stack>
   </VStack>
  )
}

export default SingleProducts
