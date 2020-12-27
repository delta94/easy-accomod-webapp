import React, { useEffect, useState } from 'react'
import axios from 'utils/axios'
import { useParams } from 'react-router-dom'
import { Grid, Box, Text } from '@chakra-ui/react'
import RoomItem from './RoomItem'

type Params = {
  city: string
}

function RoomList() {
  const [recentAcc, setRecentAcc] = useState([])
  const params: Params = useParams()
  useEffect(() => {
    axios
      .get(`/rooms/city/${params?.city}`)
      .then((res) => {
        setRecentAcc(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <Box maxW='calc(1100px + 5.6rem)' m='40px auto'>
      <Text fontSize='30px' fontWeight='semibold'>
        Hà Nội
      </Text>
      <Grid templateColumns='repeat(5, 1fr)' rowGap={5} columnGap={3}>
        {recentAcc.map((item: any) => {
          return (
            <RoomItem
              placeId={item._id}
              name={item.owner.name}
              placeType={item.roomType}
              price={item.roomPrice}
              isLoading={false}
              image={item.images[0]}
            />
          )
        })}
      </Grid>
    </Box>
  )
}

export default RoomList
