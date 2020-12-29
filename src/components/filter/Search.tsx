import React from 'react'
import { Box, Input, Image, Select } from '@chakra-ui/react'
import SearchIcon from 'assets/svg/search.svg'
import { useHistory } from 'react-router-dom'

function Search() {
  const history = useHistory()
  const onChange = (value: string) => {
    history.push(`/cities/${value}`)
  }
  return (
    <Box pl={9} d='flex' h='100%' alignItems='center' mt='15px'>
      <Box boxShadow='1px 1px 4px rgba(0,0,0,.2)' w='300px' borderRadius='6px'>
        <Box
          d='flex'
          alignItems='center'
          py={2}
          px={4}
          h='35px'
          boxSizing='content-box'>
          <Box>
            <Image src={SearchIcon} />
          </Box>
          <Box ml={2} w='100%'>
            <Select
              height='100%'
              width='100%'
              color='black'
              background='transparent'
              border='none'
              px={2}
              placeholder='Tìm kiếm'
              _placeholder={{ color: 'gray' }}
              _focus={{ outline: 'none' }}
              onChange={(event) => onChange(event.target.value)}>
              <option value='hanoi'>Hà Nội</option>
              <option value='hcm'>Hồ Chí Minh</option>
              <option value='danang'>Đà Nẵng</option>
              <option value='dalat'>Đà Lạt</option>
              <option value='vungtau'>Vũng Tàu</option>
              <option value='nhatrang'>Nha Trang</option>
              <option value='hoian'>Hội An</option>
              <option value='quangninh'>Quảng Ninh</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Search
