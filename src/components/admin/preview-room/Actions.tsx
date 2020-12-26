import { Box, Button, Flex, useToast } from '@chakra-ui/react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
// import addBookmarkPlace from '@hooks/addBookmarkPlace'
// import axios from '@utils/axios'
import { useState, useEffect } from 'react'

const Actions = () => {
  const [bookmarked, setBookmarked] = useState(true)

  // useEffect(() => {
  //   if (id) {
  //     axios
  //       .post('/v1/bookmark/check', { place_id: id })
  //       .then(({ data }) => {
  //         if (data) {
  //           setBookmarked(data.data)
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }
  // }, [bookmarked, id])

  // const toast = useToast()
  // const handleSubmit = () => {
  //   if (!bookmarked) {
  //     axios
  //       .post('/v1/bookmark/new', { place_id: id })
  //       .then(({ data }) => {
  //         if (data) {
  //           toast({
  //             title: 'Thành công',
  //             description: 'Đã thêm địa điểm vào danh sách yêu thích',
  //             status: 'success',
  //             duration: 3000,
  //             isClosable: true,
  //             position: 'top',
  //           })
  //           setBookmarked(true)
  //         }
  //       })
  //       .catch((err) => {
  //         toast({
  //           title: 'Đã có lỗi xảy ra',
  //           description: 'Some thing went wrong',
  //           status: 'error',
  //           duration: 3000,
  //           isClosable: true,
  //           position: 'top',
  //         })
  //       })
  //   } else {
  //     axios
  //       .delete('/v1/bookmark/remove', { data: { place_id: id } })
  //       .then(({ data }) => {
  //         if (data) {
  //           toast({
  //             title: 'Thành công',
  //             description: 'Đã bỏ địa điểm khỏi danh sách yêu thích',
  //             status: 'success',
  //             duration: 3000,
  //             isClosable: true,
  //             position: 'top',
  //           })
  //           setBookmarked(false)
  //         }
  //       })
  //       .catch((err) => {
  //         toast({
  //           title: 'Đã có lỗi xảy ra',
  //           description: '',
  //           status: 'error',
  //           duration: 3000,
  //           isClosable: true,
  //           position: 'top',
  //         })
  //       })
  //   }
  // }
  const handleSubmit = () => {
    setBookmarked(!bookmarked)
  }
  return (
    <Box padding='1.5rem 0'>
      <Flex flexDirection='row' justifyContent='flex-end'>
        <Button
          onClick={handleSubmit}
          outline='0'
          fontSize='1.25rem'
          colorScheme='green'
          mr='10px'
          fontWeight='500'>
          Đồng ý
        </Button>
        <Button
          onClick={handleSubmit}
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
