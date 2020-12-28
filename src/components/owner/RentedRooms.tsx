/* eslint-disable react/display-name */
import { Table } from 'antd'
import { Button, useToast } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'utils/axios'

import 'antd/dist/antd.css'

type Params = {
  room_id: string
}
function RentedRooms() {
  const toast = useToast()
  const params: Params = useParams()
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Address',
      dataIndex: 'detailAddress',
      key: 'detailAddress',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Room Type',
      dataIndex: 'roomType',
      key: 'roomType',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'roomPrice',
      key: 'roomPrice',
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Action',
      dataIndex: '_id',
      key: '_id',
      render: (id: string) => (
        <Button colorScheme='orange' mr='10px'>
          <Link to={`/rooms/${id}/preview`}>Xem</Link>
        </Button>
      ),
    },
    {
      title: 'Remake',
      dataIndex: '_id',
      key: '_id',
      render: (id: string) => (
        <Button colorScheme='orange' mr='10px' onClick={() => handleRemake(id)}>
          Remake
        </Button>
      ),
    },
  ]
  const [rentRoom, setRentRoom] = useState<any>([])
  useEffect(() => {
    axios
      .get(`/owner/rooms/rent`)
      .then((res) => {
        setRentRoom(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const handleRemake = (id: any) => {
    axios
      .put(`/owner/rooms/${id}/return`)
      .then((res) => {
        console.log(res)
        setRentRoom(rentRoom.filter((item: any) => item._id !== id))
        toast({
          title: 'Thành công',
          description: 'Bạn đã remake thành công',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        })
        debugger
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
  return <Table columns={columns} dataSource={rentRoom} />
}

export default RentedRooms
