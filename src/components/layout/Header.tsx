import React from 'react'
import Search from 'components/filter/Search'
import {
  Box,
  Flex,
  Spacer,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from '@chakra-ui/react'
import Logo from 'assets/logo2.png'

import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <div>
      <Box
        display={{
          md: 'block',
          lg: 'none',
          xl: 'none',
        }}
        mt={2}
        pb={2}
        borderBottom='1px solid #E2E8F0'
        alignItems='center'>
        <Flex
          d='flex'
          paddingRight='2.5rem'
          paddingLeft='2.5rem'
          alignItems='center'>
          <Box />
          <Spacer />
          <Button onClick={onOpen}>
            <HamburgerIcon />
          </Button>
        </Flex>
      </Box>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
            <DrawerBody>
              <Button variant='ghost'>
                <Link to='/login'>Đăng nhập</Link>
              </Button>
              <Button variant='ghost'>
                <Link to='/signup'>Đăng ký</Link>
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Box
        height='80px'
        w='100%'
        display={{ sm: 'none', md: 'none', lg: 'block' }}
        borderBottom='1px solid rgb(226 232 240)'>
        <Flex
          d='flex'
          w='75%'
          height='100%'
          m='0 auto'
          backgroundColor='blue'
          alignItems='center'>
          <Image src={Logo} width='60px' height='60px' />
          <Search />
          <Spacer />
          <Flex d='flex' alignItems='center'>
            <Button variant='ghost'>
              <Link to='/login'>Đăng nhập</Link>
            </Button>
            <Button variant='ghost'>
              <Link to='/signup'>Đăng ký</Link>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </div>
  )
}
