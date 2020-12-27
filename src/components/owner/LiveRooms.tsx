/* eslint-disable react/display-name */
import { Table, Tag, Space } from 'antd'
import { Button, ButtonGroup, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import 'antd/dist/antd.css'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
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
    dataIndex: 'price',
    key: 'pricec',
  },
  {
    title: 'Area',
    dataIndex: 'area',
    key: 'area',
  },
  {
    title: 'Action',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => (
      <Button colorScheme='orange' mr='10px'>
        <Link to='/rooms/:room_id/preview'>Xem</Link>
      </Button>
    ),
  },
]

const data = [
  {
    key: '1',
    name: 'Joe Black',
    roomType: 32,
    address: 'Sidney No. 1 Lake Park',
    price: '123458',
    area: '12345678',
  },
  {
    key: '1',
    name: 'Joe Black',
    roomType: 32,
    address: 'Sidney No. 1 Lake Park',
    price: '123458',
    area: '12345678',
  },
  {
    key: '1',
    name: 'Joe Black',
    roomType: 32,
    address: 'Sidney No. 1 Lake Park',
    price: '123458',
    area: '12345678',
  },
]

function LiveRooms() {
  return <Table columns={columns} dataSource={data} />
}

export default LiveRooms
