/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Box, Heading, Wrap, WrapItem, Text, chakra, Image } from '@chakra-ui/react'
import {ElementType} from 'react'
import { Element } from 'react-scroll'
import WashingIcon from 'assets/svg/washingmachine.svg'
import Balcony from 'assets/svg/balcony.svg'
import Fridge from 'assets/svg/fridge.svg'
import Sofa from 'assets/svg/sofa.svg'
import MicrowaveIcon from 'assets/svg/microwave.svg'

const Amenities = ({ listAmenties}: any) => {
  const NavLabel = chakra(Element)

  const MicroIcon = chakra(MicrowaveIcon as ElementType<any>)
  const WashingIconCustom = chakra(WashingIcon as ElementType<any>)
  const SofaIconCustom = chakra(Sofa as ElementType<any>)
  const FridgeIconCustom = chakra(Fridge as ElementType<any>)
  const BalconyIconCustom = chakra(Balcony as ElementType<any>)

  const amenties: any = {
    'Fridge/ Freezer': 'Tủ lạnh',
    Sofa: 'Sofa',
    'Washing machine': 'Máy giặt',
    Balcony: 'Ban công',
    Microwave: 'Lò vi sóng',
  }

  const amentyIcons: any = {
    'Fridge/ Freezer':
    // <FridgeIconCustom width='24px' height='24px'/>
    <Image src={Balcony} width='24px' height='24px'/>,
    Sofa: <Image src={WashingIcon} width='24px' height='24px'/>,
    'Washing machine': <Image src={Fridge} width='24px' height='24px'/>,
    Balcony: <Image src={Sofa} width='24px' height='24px'/>,
    Microwave: <Image src={MicrowaveIcon} width='24px' height='24px'/>,

  }

  return (
    <NavLabel className='place-details-amenities' name='amenities' mt={20}>
      <Box className='title'>
        <Heading as='h3' fontSize='3xl' fontWeight='bolder' lineHeight='shorter'>
          Tiện nghi chỗ ở
        </Heading>
        <Text mt={5}>Giới thiệu về các tiện nghi và dịch vụ tại nơi lưu trú</Text>
      </Box>
      <Box className='facilities'>
        <Heading mt={6} fontSize='xl'>
          Tiện ích
        </Heading>
        <Wrap align='center' color='#555' width='100%'>
          {listAmenties?.length
            && listAmenties?.map((a: string) => (
              <WrapItem alignItems='center' lineHeight='taller' mt={3} width='31.333%' key={a}>
                {amentyIcons[a]}
                <span style={{ marginLeft: '.875rem' }}>{amenties[`${a}`]}</span>
              </WrapItem>
            ))}
        </Wrap>
      </Box>
    </NavLabel>
  )
}

export default Amenities
