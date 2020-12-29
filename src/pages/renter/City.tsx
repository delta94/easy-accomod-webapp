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
  const cities = {
    hanoi: 'Hà Nội',
    hcm: 'Hồ Chí Minh',
    nhatrang: 'Nha Trang',
    dalat: 'Đà Lạt',
    danang: 'Đà Nắng',
    vungtau: 'Vũng Tàu',
    hoian: 'Hội An',
    quangninh: 'Quảng Ninh',
  } as any
  useEffect(() => {
    axios
      .get(`/rooms/city/${params?.city}`)
      .then((res) => {
        setRoomList(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [params?.city])
  return (
    <Layout>
      <Text fontSize='30px' fontWeight='semibold' mx={22} mt={5}>
        {cities[params?.city]}
      </Text>
      <RoomList roomList={roomList} />
    </Layout>
  )
}

export default City
