/* eslint-disable no-plusplus */
// /* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react'
import { Table, Badge, Menu, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import axios from 'utils/axios'

// function OwnersList() {
//   const menu = (
//     <Menu>
//       <Menu.Item>Action 1</Menu.Item>
//       <Menu.Item>Action 2</Menu.Item>
//     </Menu>
//   )
//   const expandedRowRender = () => {
//     const columns = [
//       { title: 'Date', dataIndex: 'date', key: 'date' },
//       { title: 'Name', dataIndex: 'name', key: 'name' },
//     ]

//     const data = []
//     for (let i = 0; i < 3; i++) {
//       data.push({
//         key: i,
//         date: '2014-12-24 23:12:00',
//         name: 'This is production name',
//         upgradeNum: 'Upgraded: 56',
//       })
//     }
//     return <Table columns={columns} dataSource={data} pagination={false} />
//   }

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       render: (text: string) => <a>{text}</a>,
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//       render: (text: string) => <a>{text}</a>,
//     },
//     {
//       title: 'CMND',
//       dataIndex: 'identity',
//       key: 'identity',
//       render: (text: string) => <a>{text}</a>,
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//     {
//       title: 'Phone',
//       dataIndex: 'phone',
//       key: 'phone',
//     },
//   ]
//   const [ownerList, setOwnerList] = useState<any>([])
//   useEffect(() => {
//     axios
//       .get(`/owners/approved`)
//       .then((res) => {
//         const { data } = res.data
//         const temp: any = []
//         data.forEach((item: any) => {
//           temp.push({ ...item.owner, _id: item._id })
//         })
//         setOwnerList(temp)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [])

//   const data = []
//   for (let i = 0; i < 3; ++i) {
//     data.push({
//       key: i,
//       name: 'Screem',
//       platform: 'iOS',
//       version: '10.3.4.5654',
//       upgradeNum: 500,
//       creator: 'Jack',
//       createdAt: '2014-12-24 23:12:00',
//     })
//   }

//   return (
//     <Table
//       columns={columns}
//       expandable={{
//         expandedRowRender: (record) => (
//           <p style={{ margin: 0 }}>{record.description}</p>
//         ),
//         rowExpandable: (record) => record.name !== 'Not Expandable',
//       }}
//       dataSource={ownerList}
//     />
//   )
// }

// export default OwnersList

function OwnerList() {
  const expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
    ]

    const data = []
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      })
    }
    return <Table columns={columns} dataSource={data} pagination={false} />
  }

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'CMND', dataIndex: 'identity', key: 'identity' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
  ]

  const [ownerList, setOwnerList] = useState<any>([])
  useEffect(() => {
    axios
      .get(`/owners/approved`)
      .then((res) => {
        const { data } = res.data
        const temp: any = []
        data.forEach((item: any, index: number) => {
          temp.push({ ...item.owner, _id: item._id, key: index })
        })
        setOwnerList(temp)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Table
      className='components-table-demo-nested'
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={ownerList}
    />
  )
}
export default OwnerList
