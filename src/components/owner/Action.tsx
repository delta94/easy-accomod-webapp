import { Box, Button, Flex, useToast } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'utils/axios'
import { useParams } from 'react-router-dom'

type Params = {
  room_id: string
}
const Actions = () => {
  const params: Params = useParams()
  const [isRent, setIsRent] = useState(false)
  const handleAccept = (id: any) => {
    axios.put(`owner/rooms/${params?.room_id}/rent`).catch((err) => {
      console.log(err)
    })
    setIsRent(true)
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
