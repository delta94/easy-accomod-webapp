/* eslint-disable prettier/prettier */
import Logo from 'assets/logo2.png';
import { Box, Container, Image, Stack, Text, Link } from '@chakra-ui/react';
// import { useRouter } from 'next/router';
// import {useSession} from 'next-auth/client'
// import format from 'date-fns/format'
// import NextLink from 'next/link'
import { Link as ReactLink, useLocation } from 'react-router-dom'

const Header = () => {
  // const activeLink = useRouter().pathname
  // const [session] = useSession()
  let location = useLocation();
  const ActiveBar = {
    editAccount: '/account',
    wishList: '/bookmarks'
  }

  return (
    <Box bg='#fff'>
      <Container maxW='100%' px={40}>
        {/* <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          h='80px'
          py={12}
        >
          <Box flex='1'>
            <Link as={ReactLink} to='/'>
              <Link to='/'>
                <Image src={Logo} width='60px' height='60px' />
              </Link>
            </Link>

          </Box>
          <Stack flex='1' direction='row-reverse' spacing={6}>
            <Box>
              <Text fontSize='sm' fontWeight='bold' color='#999' textTransform='uppercase'>Tài khoản của tôi</Text>
              <Text fontSize='md' fontWeight='bolder' color='#333'>{session?.user?.name}</Text>
            </Box>
            <Box>
              <Text fontSize='sm' fontWeight='bold' color='#999' textTransform='uppercase'>Hôm nay</Text>
              <Text fontSize='md' fontWeight='bolder' color='#333'>{format(Date.now(), 'dd-MM-yyyy')}</Text>
            </Box>
          </Stack>
        </Box> */}
      </Container>
      <Box>
        <Container maxW='100%' px={40}>
          <Stack direction='row' color='#a3acb9' fontWeight='medium' spacing={7}>
            <Link as={ReactLink}
              to='/account'
            >
              <Text sx={{
                borderBottom: ActiveBar.editAccount === location.pathname ? '4px solid #F65E39' : '',
                color: ActiveBar.editAccount === location.pathname ? '#222' : '',
                py: '3',
                fontWeight: 'medium',
                ':hover': {
                  color: '#222',
                  cursor: 'pointer',
                },
              }}>Cài đặt tài khoản</Text>
            </Link>
            <Link as={ReactLink}
              to='/bookmarks'
            >
              <Text sx={{
                borderBottom: location.pathname === ActiveBar.wishList ? '4px solid #F65E39' : '',
                color: location.pathname === ActiveBar.wishList ? '#222' : '',
                py: '3',
                fontWeight: 'medium',
                ':hover': {
                  color: '#222',
                  cursor: 'pointer',
                },
              }}>Yêu thích</Text>
            </Link>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container />
      </Box>
    </Box>
  )
};

export default Header;
