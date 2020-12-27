import { Container, Box, Flex, chakra, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { useQuery } from 'react-query'
import img1 from 'assets/places/1.jpg'
import img2 from 'assets/places/2.jpg'
import img3 from 'assets/places/3.jpg'
import img4 from 'assets/places/4.jpg'
import img5 from 'assets/places/5.png'
// import BookingForm from './BookingForm'
import ImageSlider from 'components/place/place-details/ImageSlider'
import Location from 'components/place/place-details/Location'
import PlaceIntro from 'components/place/place-details/PlaceIntro'
import PlaceRoute from 'components/place/place-details/PlaceRoute'
import PolicyAndRule from 'components/place/place-details/PolicyAndRule'
import Amenities from 'components/place/place-details/Amenities'
import Actions from './Actions'

type PriceType = {
  normal_day_price: number
  weekend_price: number
}

type RuleType = {
  special_rules: string
  smoking: string
  pet: string
  cooking: string
  party: string
}

type OverviewType = {
  image: string
}

type PolicyType = {
  max_num_of_people: number
  cancel_policy: string
}

type RoomType = {
  square: number
  num_of_bedroom: number
  num_of_bed: number
  num_of_bathroom: number
  num_of_kitchen: number
}

type PlaceType = {
  overviews_attributes: OverviewType[]
  name: string
  id: number
  address: string
  place_type: string
  schedule_price_attributes: PriceType
  details: string
  rule_attributes: RuleType
  place_facilities_attributes: string[]
  policy_attributes: PolicyType
  room_attributes: RoomType
}

const PlaceDetailsComponent = () => {
  const toast = useToast()

  const Nav = chakra('nav')
  // const NavItem = chakra(Link)
  const NavItem = chakra(Link)

  const [showStickyNavBar, setShowStickyNavBar] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset
    if (position >= 650) {
      setShowStickyNavBar(true)
    } else {
      setShowStickyNavBar(false)
    }
  }

  // const {
  //   isLoading,
  //   isError,
  //   data: { data: placeData } = {} as any,
  // }: {
  //   isError: boolean
  //   isLoading: boolean
  //   data: { data: PlaceType }
  // } = useQuery(
  //   ['placeDetails', placeId],
  //   async () => {
  //     const { data } = await axios({
  //       url: `/v1/place/${placeId}`,
  //       method: 'GET',
  //     })

  //     return data
  //   },
  //   { enabled: placeId, retry: false }
  // )

  // if (isError) {
  //   toast({
  //     title: 'Đã có lỗi xảy ra',
  //     description:
  //       'Lỗi khi tải dữ liệu, vui lòng kiểm tra lại đường truyền mạng!',
  //     status: 'error',
  //     duration: 3000,
  //     isClosable: true,
  //     position: 'top',
  //   })
  // }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLabels = [
    { label: 'Tổng quan', to: 'overview' },
    { label: 'Tiện nghi', to: 'amenities' },
    // { label: 'Giá phòng', to: 'room rate' },
    { label: 'Đánh giá', to: 'reviews' },
    { label: 'Nội quy', to: 'policies' },
    { label: 'Vị trí', to: 'location' },
  ]

  return (
    <Box>
      <Nav
        padding='1.5rem 0'
        display={showStickyNavBar ? 'flex' : 'none'}
        position='sticky'
        backgroundColor='white'
        zIndex={10}
        top={0}
        left={0}
        borderTop='1px solid rgb(230, 230, 230)'
        borderBottom='1px solid rgb(230, 230, 230)'
        boxShadow='0 3px 5px 0 rgba(0,0,0,.07), 0 1px 0 0 rgba(0,0,0,.05)'
        fontSize='lg'
        transition='transform .2s'>
        <Container
          maxW='calc(1100px + 5.6rem)'
          centerContent
          flexDirection='row'
          display='flex'
          justifyContent='space-between'>
          <Box>
            {navLabels.map(({ label, to }) => (
              <NavItem
                key={to}
                activeClass='nav-item-sticky-active'
                sx={{
                  marginRight: '18px',
                  padding: '1.8125rem',
                  cursor: 'pointer',
                  transform: 'translateY(0)',
                  transition: 'all .2s',
                  ':hover': {
                    cursor: 'pointer',
                    color: '#f65e39',
                  },
                }}
                to={to}
                spy
                smooth
                duration={200}
                offset={-182}>
                {label}
              </NavItem>
            ))}
          </Box>
          <Box paddingRight='1.7rem'>
            <Box padding='1.5rem 0' />
          </Box>
        </Container>
      </Nav>
      <ImageSlider
        // slide={placeData?.overviews_attributes}
        slide={[img1, img2, img3, img4, img5]}
      />
      <Box>
        <Container
          padding='0 2.8rem'
          centerContent
          maxW='calc(1100px + 5.6rem)'>
          <Box width='100%'>
            <Flex width='100%' flexDirection='row'>
              <Box flex='2'>
                <Box paddingRight='50px'>
                  <PlaceRoute />
                  <PlaceIntro
                    // name={placeData?.name}
                    // address={placeData?.address}
                    // roomData={placeData?.room_attributes}
                    // details={placeData?.details}
                    // placeType={placeData?.place_type}
                    // maxNumOfPeople={
                    //   placeData?.policy_attributes?.max_num_of_people
                    // }
                    name='ADODDA - Vinhome Greenbay'
                    address='Nam Từ Liêm, Hà Nội, Vietnam '
                    roomData='Căn hộ chung cư · 28'
                    details='ADODDA là căn homestay có đầy đủ tiện ích dành cho khách du lịch hoặc đi công tác tại Vinhome Greenbay Mễ Trì, Nam Từ Liêm, Hà Nội (gần hầm chui Đại lộ Thăng Long, nút giao Big C).

        Đây là căn hộ đầu tay tôi trang trí và chuẩn bị từng góc nhỏ để đón khách, cố gắng tạo sự thân thiện và tiện lợi đến tất cả khách hàng.

        Từ ADODDA bạn có thể dễ dàng di chuyển đến Trung tâm hành chính của Hà Nội, khu phố cổ, đường lên sân bay Nội Bài, các địa điểm du lịch.

        Việc đón taxi cũng khá thuận tiện, gần Kengnam,...

        Bên cạnh đó, tôi cũng là một người bản địa vô cùng thân thiện và thoải mái. Chính vì vậy đừng ngại ngần mà chia sẻ với chúng tôi những điều bạn đang thắc mắc hoặc những khó khăn bạn gặp phải khi ở đây.

        Chúng tôi cũng luôn mong muốn được cùng bạn khám phá nhiều địa điểm tốt đẹp nhất tại đây.

        Vậy còn chần chừ gì nữa ngay bây giờ hãy lên kế hoạch để tận hưởng những khoảnh khắc tuyệt vời cùng nhau.

        Mong rằng bạn sẽ có trải nghiệm vui vẻ và đầy ý nghĩa ở ADODDA.'
                    placeType='Căn hộ chung cư · 28'
                    maxNumOfPeople='2'
                  />
                  <Amenities
                    listAmenties={[
                      'Washing machine',
                      'Sofa',
                      'Balcony',
                      'Microwave',
                      'Fridge/ Freezer',
                    ]}
                  />
                  <PolicyAndRule />
                  <Location />
                </Box>
              </Box>
              <Box flex='1'>
                <Actions />
                {/* <BookingForm id='1' price='100' maxNumOfPeople='5' /> */}
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default PlaceDetailsComponent
