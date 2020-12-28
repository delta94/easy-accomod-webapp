import { Box, Button, Flex, useToast } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'utils/axios'
import { useParams } from 'react-router-dom'

type Params = {
  room_id: string
}
const Actions = () => {
  const params: Params = useParams()

  const handleAccept = (id: any) => {
    axios
      .put(`rooms/${params?.room_id}/approve`)
      .then((res) => {
        console.log(res)
        debugger
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handleReject = (id: any) => {
    axios
      .put(`rooms/${params?.room_id}/reject`)
      .then((res) => {
        console.log(res)
        debugger
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Box padding='1.5rem 0'>
      <Flex flexDirection='row' justifyContent='flex-end'>
        <Button
          onClick={handleAccept}
          outline='0'
          fontSize='1.25rem'
          colorScheme='green'
          mr='10px'
          fontWeight='500'>
          Đồng ý
        </Button>
        <Button
          onClick={handleReject}
          outline='0'
          fontSize='1.25rem'
          colorScheme='red'
          fontWeight='500'>
          Từ Chối
        </Button>
      </Flex>
    </Box>
  )
}

export default Actions
