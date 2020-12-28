import { Box, Button, Flex, useToast } from '@chakra-ui/react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import axios from 'utils/axios'
import { useState, useEffect } from 'react'

const ShareAndLikeBtn = ({
  roomId,
  isBookmarked,
}: {
  roomId: any
  isBookmarked: boolean
}) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked)

  const handleSubmit = () => {
    if (!bookmarked) {
      axios.post('/bookmarks/create', { roomId }).then((res) => {
        console.log(res)
      })
    } else {
      axios.put('/bookmarks/delete', { roomId }).then((res) => {
        console.log(res)
      })
    }
    setBookmarked(!bookmarked)
  }
  return (
    <Box padding='1.5rem 0'>
      <Flex flexDirection='row' justifyContent='flex-end'>
        <Button
          onClick={handleSubmit}
          outline='0'
          fontSize='1.25rem'
          variant='none'
          fontWeight='500'
          rightIcon={
            bookmarked ? (
              <FaHeart style={{ color: 'red' }} fontSize='18px' />
            ) : (
              <FaRegHeart fontSize='18px' />
            )
          }
          backgroundColor='#fff'>
          Lưu lại
        </Button>
      </Flex>
    </Box>
  )
}

export default ShareAndLikeBtn
