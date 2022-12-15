import { Badge, Button, HStack, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import { BsFillCartCheckFill } from "react-icons/bs";
import { DataContext } from '../context/Context';
import { Cartpops } from '../data';
import CurrencyFormat from '../utility/CurrencyFormat';
import { BsX } from "react-icons/bs";
import { ActionType } from '../context/Reducer';
import { NavLink } from 'react-router-dom';



const CartMenu = () => {
    const {state:{cart}, dispatch} = DataContext()
  return (
    <Menu lazyBehavior='unmount'>
  <MenuButton
    as={Button}
    bgColor={'blackAlpha.300'}
    px={4}
    py={2}
    transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px'
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
    _focus={{ boxShadow: 'outline' }}
    color={'red.100'}
  >
    <HStack p={1}>    
    <BsFillCartCheckFill fontSize={'1.3rem'} /> 
    <Text >cart</Text>
    <Badge colorScheme={'none'}>{cart.length}</Badge>
    </HStack>
  </MenuButton>
  <MenuList>
    <MenuItem>
    {
        cart.length>0? 
        (<Stack>
            {cart.map((prod:Cartpops) => (
                <HStack key={prod.id}>
                    <Image alt='cart_img' src={prod.image} w={'30px'} loading={'lazy'}/>
                    <Text>{prod.name}</Text>
                    <Text display={['none', 'none', 'block', 'block']}>{CurrencyFormat(prod.price)}</Text>
                    <BsX fontSize={'1.3rem'} color={'red'}
                    onClick={() => dispatch({type:ActionType.REMOVE_FROM_CART, payload:prod})}
                    />
                </HStack>
            ))}
        </Stack>):
        (<Text>Cart is empty</Text>)
    }
    </MenuItem>
    <MenuDivider />
    <MenuItem fontFamily={'serif'} fontSize={'1.1rem'} fontWeight={'bold'}>
    <NavLink  to={'/cart'} style={({isActive}) => isActive? {color:'white'} : {color:'black'}}>
               Proceed to  Cart
            </NavLink>
    </MenuItem>
  </MenuList>
</Menu>
  )
}

export default CartMenu
