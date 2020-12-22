import React from 'react'
import { Box, Flex, Spacer, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box height='80px' w='100%'>
      <Flex d='flex' w='75%' height='100%' m='0 auto' backgroundColor='blue'>
        <Box />
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
  )
}
