/* eslint-disable react/display-name */
import { Table } from 'antd'
import { Button, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'utils/axios'
import { useParams } from 'react-router-dom'

type OwnerPending = [
  owner: {
    id: string
    email: string
    name: string
    indentity: string
    address: string
    phone: string
  }
]
type Params = {
  owner_id: string
}
function PendingOwner() {
  const params: Params = useParams()
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
      dataIndex: '_id',
      key: '_id',
      render: (id: string) => (
        <Box>
          <Button
            colorScheme='green'
            mr='10px'
            onClick={() => handleAccept(id)}>
            Chấp nhận
          </Button>
          <Button colorScheme='red'>Từ Chối</Button>
        </Box>
      ),
    },
  ]
  const [pendingList, setPendingList] = useState<any>([])
  useEffect(() => {
    axios
      .get(`/owners/pending`)
      .then((res) => {
        const { data } = res.data
        const temp: any = []
        data.forEach((item: any) => {
          temp.push({ ...item.owner, _id: item._id })
        })
        setPendingList(temp)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const handleAccept = (id: any) => {
    setPendingList(pendingList.filter((item: any) => item._id !== id))
    console.log(pendingList)
    axios
      .put(`owners/${id}/approve`)
      .then((res) => {
        console.log(res)
        debugger
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return <Table columns={columns} dataSource={pendingList} />
}

export default PendingOwner
