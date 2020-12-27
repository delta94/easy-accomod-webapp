/* eslint-disable react/display-name */
import { Table, Tag, Space } from 'antd'
import { Button, ButtonGroup, Box } from '@chakra-ui/react'
import React from 'react'
// import 'antd/dist/antd.css'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'CMND',
    dataIndex: 'cmnd',
    key: 'cmnd',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Action',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => (
      <Box>
        <Button colorScheme='green' mr='10px'>
          Chấp nhận
        </Button>
        <Button colorScheme='red'>Chấp nhận</Button>
      </Box>
    ),
  },
]

const data = [
  {
    key: '1',
    name: 'Joe Black',
    email: 32,
    address: 'Sidney No. 1 Lake Park',
    cmnd: '123458',
    phone: '12345678',
  },
  {
    key: '2',
    name: 'Joe Black',
    email: 32,
    address: 'Sidney No. 1 Lake Park',
    cmnd: '123458',
    phone: '12345678',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 32,
    address: 'Sidney No. 1 Lake Park',
    cmnd: '123458',
    phone: '12345678',
  },
]

function PendingOwner() {
  return <Table columns={columns} dataSource={data} />
}

export default PendingOwner
