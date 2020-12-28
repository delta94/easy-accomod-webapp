import { Box, Button, Flex, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'utils/axios'
import { useParams } from 'react-router-dom'

type Params = {
  room_id: string
}
const Actions = () => {
  const toast = useToast()
  const params: Params = useParams()
  const [isRent, setIsRent] = useState(false)
  const handleAccept = (id: any) => {
    axios
      .put(`owner/rooms/${params?.room_id}/rent`)
      .then((res) => {
        setIsRent(true)
        toast({
          title: 'Thành công',
          description: 'Bạn đã cho thuê thành công',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        })
      })
      .catch((err) => {
        console.log(err)
        toast({
          title: 'Có sự cố xảy ra',
          description: 'Bạn không đủ quyền để truy cập trang này',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top',
        })
      })
  }

  return (
    <Box padding='1.5rem 0'>
      <Flex flexDirection='row' justifyContent='flex-end'>
        {isRent ? (
          <Button
            outline='0'
            fontSize='1.25rem'
            colorScheme='red'
            mr='10px'
            fontWeight='500'>
            Đã Cho Thuê
          </Button>
        ) : (
          <Button
            outline='0'
            onClick={handleAccept}
            fontSize='1.25rem'
            colorScheme='green'
            mr='10px'
            fontWeight='500'>
            Cho Thuê
          </Button>
        )}
      </Flex>
    </Box>
  )
}

export default Actions
