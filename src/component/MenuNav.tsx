import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsList} from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const MenuNav = () => {
  return (
   <Box display={['block', 'block', 'block', 'none']}>
     <Menu lazyBehavior='unmount'>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<BsList />}
      variant='outline'
    />
    <MenuList >
      <MenuItem >
      <Flex fontFamily={'serif'} fontWeight={'bold'} fontSize={'1.1rem'}>
                <NavLink to={'/'} style={({isActive}) => isActive? {color:'yellowgreen'} : {color:'black'}}>
                    Home
                </NavLink>
            </Flex>
      </MenuItem>
      <MenuItem >
      <Flex fontFamily={'serif'} fontWeight={'bold'} fontSize={'1.1rem'}>
                <NavLink to={'/ourmeal'} style={({isActive}) => isActive? {color:'yellowgreen'} : {color:'black'}}>
                    Our Meals
                </NavLink>
            </Flex>
      </MenuItem>
      <MenuItem >
      <Flex fontFamily={'serif'} fontWeight={'bold'} fontSize={'1.1rem'}>
                <NavLink to={'/features'} style={({isActive}) => isActive? {color:'yellowgreen'} : {color:'black'}}>
                    Feature
                </NavLink>
            </Flex>
      </MenuItem>
      <MenuItem >
      <Flex fontFamily={'serif'} fontWeight={'bold'} fontSize={'1.1rem'}>
                <NavLink to={'/about'} style={({isActive}) => isActive? {color:'yellowgreen'} : {color:'black'}}>
                    About us
                </NavLink>
            </Flex>
      </MenuItem>
      <MenuItem >
      <Flex fontFamily={'serif'} fontWeight={'bold'} fontSize={'1.1rem'}>
                <NavLink to={'/testimonials'} style={({isActive}) => isActive? {color:'yellowgreen'} : {color:'black'}}>
                    Testimonials
                </NavLink>
            </Flex>
      </MenuItem>
    </MenuList>
  </Menu>
   </Box>
  )
}

export default MenuNav
