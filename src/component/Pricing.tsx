import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import { useEffect, useState,  } from 'react'
import { DataContext } from '../context/Context'
import CurrencyFormat from '../utility/CurrencyFormat';


const Pricing = () => {
    const {state:{cart}} = DataContext();
    const [total, settotal] = useState<number>(0);

    useEffect(() => {
        settotal(cart.reduce((acc: number, curr:any) => acc + Number(curr.price) * curr.qty, 0))
    },[cart])
  return (
   <VStack color={'green'} >
    <HStack>
        <Text fontWeight={'bold'}>Subtotal: {cart.length} item(s)</Text>
        <Text fontWeight={'bold'}>Total: <span style={{color:'red'}}>{CurrencyFormat(total)}</span></Text>
    </HStack>
    <Button colorScheme={'teal'}>Proceed to Checkout</Button>
   </VStack>
  )
}

export default Pricing
