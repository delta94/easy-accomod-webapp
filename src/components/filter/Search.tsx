import React from 'react'
import { Box, Input, Image, Select } from '@chakra-ui/react'
import SearchIcon from 'assets/svg/search.svg'

function Search() {
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
              _focus={{ outline: 'none' }}>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Search
