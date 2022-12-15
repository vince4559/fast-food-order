import { Box,  Divider, FormControl, HStack, Image, List, ListItem, Stack, Text,  } from '@chakra-ui/react'
import Header from '../component/Header'
import Pricing from '../component/Pricing'
import { DataContext } from '../context/Context'
import { ActionType } from '../context/Reducer'
import { Cartpops } from '../data'
import CurrencyFormat from '../utility/CurrencyFormat'
import { BsX } from "react-icons/bs";

const Cart = () => {
  const {state:{cart}, dispatch} = DataContext();
  return (
  <Box w={'100vw'} >
    <Header />
    <Stack p={5} >
      {cart.length > 0 ? cart.map((prod:Cartpops) => (
         <List key={prod.id} p={5}>
          <ListItem>
          <Image alt='prod_img' src={prod.image} w='100px' rounded={'2xl'} />
          <Text>{prod.name}</Text>
         <HStack>
         <Text color={'red'}>{CurrencyFormat(prod.price)}</Text> 
         <Box>
            Qty: <FormControl as={'select'} value={prod.qty}   
            w={'50px'} colorScheme={'green'}
            cursor={'pointer'}
            onChange={(e) => dispatch({
              type: ActionType.CHANGE_CART_QTY,
              payload:{
                id:prod.id,
                qty:(e.target as HTMLInputElement).value                
              }
            })}
            >
            {[...Array(5).keys()].map(x => (
              <option key={x+1}>{x+1}</option>
            ))}
          </FormControl>
          </Box>
          <BsX fontSize={'1.3rem'} color={'red'}
                    onClick={() => dispatch({type:ActionType.REMOVE_FROM_CART, payload:prod})}
                    />
         </HStack>
          <Divider border={'1px'} borderColor={'gray'} />
          </ListItem>
         </List>
       
      )):
      
      <Text fontSize={'2xl'}  color={'black'} mb={'3rem'}>Cart is empty </Text>
      
      }
      
     <Pricing />
    </Stack>
  </Box>
  )
}

export default Cart
