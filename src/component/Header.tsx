import { Flex, HStack, Image } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom' 
import CartMenu from './CartMenu'
import logo from '../images/logo-white.png'
import MenuNav from './MenuNav'

const Header = () => {
  return (
    <HStack  bg={'green.500'} pt={2} p={2} w={'100vw'} pr={'2.2rem'} position={'sticky'} top={0} zIndex={1} >

        <Flex justify={'flex-start'}  >
            <Link to={'/'}>
            <Image alt='logo' src={logo} w={'5rem'} cursor={'pointer'} />
            </Link>
         </Flex>

          <Flex display={['none', 'none', 'none', 'flex']} w={"100%"} 
           fontFamily={'serif'} fontWeight={'bold'} fontSize={'1.1rem'}justify='flex-end' gap={5} > 
          <Flex>
                <NavLink to={'/'} style={({isActive}) => isActive? {color:'white'} : {color:'black'}}>
                    Home
                </NavLink>
            </Flex>
            <Flex>
            <NavLink to={'/ourmeal'} style={({isActive}) => isActive? {color:'white'} : {color:'black'}}>
                    Our Meals
                </NavLink>
            </Flex>
            <Flex>
            <NavLink to={'/features'} style={({isActive}) => isActive? {color:'white'} : {color:'black'}}>
                    Features
            </NavLink>  
            </Flex>            
            <Flex>
            <NavLink to={'/about'} style={({isActive}) => isActive? {color:'white'} : {color:'black'}}>
                    About us
            </NavLink> 
            </Flex>
            <Flex>
            <NavLink to={'/testimonials'} style={({isActive}) => isActive? {color:'white'} : {color:'black'}}>
                    Testimonials
            </NavLink> 
            </Flex>
          </Flex>

             <Flex justify='flex-end'  w={'100%'} gap={'4rem'}>
            <CartMenu />
            <MenuNav />
            </Flex>            
    </HStack>
  )
}

export default Header
