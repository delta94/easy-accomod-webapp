import React, { useEffect, useState } from 'react'
import RoomList from 'components/roomlist/RoomList'
import Layout from 'layouts/Layout'
import axios from 'utils/axios'
import { useParams } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

type Params = {
  city: string
}

const City = () => {
  const [roomList, setRoomList] = useState([])
  const params: Params = useParams()
  useEffect(() => {
    axios
      .get(`/rooms/city/${params?.city}`)
      .then((res) => {
        setRoomList(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <Layout>
      <Text fontSize='30px' fontWeight='semibold' mx={22} mt={5}>
        Hà Nội
      </Text>
      <RoomList roomList={roomList} />
    </Layout>
  )
}

export default City
