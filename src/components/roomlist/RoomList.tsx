import React, { useState } from 'react'
import Plane from 'assets/services/plane.png'
import { Container, Grid, useToast, Box, Text } from '@chakra-ui/react'
import RoomItem from './RoomItem'

function RoomList() {
  const Acc = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ]
  const [recentAcc, setRecentAcc] = useState(Acc)
  return (
    <Box maxW='calc(1100px + 5.6rem)' m='40px auto'>
      <Text fontSize='30px' fontWeight='semibold'>
        Hà Nội
      </Text>
      <Grid templateColumns='repeat(5, 1fr)' rowGap={5} columnGap={3}>
        {recentAcc.map((item) => {
          return (
            <RoomItem
              title='Đưa đón sân bay'
              description='Xe sang chỉ từ 199.000đ'
              imageUrl={Plane}
              comingSoon
              reviewCount='4'
              rating='4'
              price='400$'
            />
          )
        })}
      </Grid>
      )
    </Box>
  )
}

export default RoomList
