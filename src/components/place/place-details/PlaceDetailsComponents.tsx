import { Container, Box, Flex, chakra, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import axios from 'utils/axios'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import img1 from 'assets/places/1.jpg'
import img2 from 'assets/places/2.jpg'
import img3 from 'assets/places/3.jpg'
import img4 from 'assets/places/4.jpg'
import img5 from 'assets/places/5.png'
import Amenities from './Amenities'
// import BookingForm from './BookingForm'
import ImageSlider from './ImageSlider'
import Location from './Location'
import PlaceIntro from './PlaceIntro'
import PlaceRoute from './PlaceRoute'
import PolicyAndRule from './PolicyAndRule'
import BookingForm from './BookingForm'
import Price from './Price'
import Reviews from './Reviews'
import ShareAndLikeBtn from './ShareAndLikeBtn'

type Intro = {
  name: string
  detailAddress: string
  area: number
  roomType: string
  bathroomType: string
  kitchenType: string
  hasWaterHeater: boolean
  hasConditioner: boolean
  hasBalcony: boolean
  hasFridge: boolean
  hasBed: boolean
  hasWardrobe: boolean
  roomPrice: number
  waterPrice: number
  electricityPrice: number
}
type Params = {
  room_id: string
}

const PlaceDetailsComponent = () => {
  const toast = useToast()
  const params: Params = useParams()
  const Nav = chakra('nav')
  // const NavItem = chakra(Link)
  const NavItem = chakra(Link)

  const [showStickyNavBar, setShowStickyNavBar] = useState(false)
  const [details, setDetails] = useState<Intro>()
  const handleScroll = () => {
    const position = window.pageYOffset
    if (position >= 650) {
      setShowStickyNavBar(true)
    } else {
      setShowStickyNavBar(false)
    }
  }
  useEffect(() => {
    axios
      .get(`/rooms/${params?.room_id}`)
      .then((res) => {
        // debugger
        setDetails(res.data.data)
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLabels = [
    { label: 'Tổng quan', to: 'overview' },
    { label: 'Tiện nghi', to: 'amenities' },
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
                    name='ADODDA - Vinhome Greenbay'
                    address={details?.detailAddress}
                    roomData={details?.area}
                    bathRoomType={details?.bathroomType}
                    kitchenType={details?.kitchenType}
                    details='ADODDA là căn homestay có đầy đủ tiện ích dành cho khách du lịch hoặc đi công tác tại Vinhome Greenbay Mễ Trì, Nam Từ Liêm, Hà Nội (gần hầm chui Đại lộ Thăng Long, nút giao Big C).

        Đây là căn hộ đầu tay tôi trang trí và chuẩn bị từng góc nhỏ để đón khách, cố gắng tạo sự thân thiện và tiện lợi đến tất cả khách hàng.

        Từ ADODDA bạn có thể dễ dàng di chuyển đến Trung tâm hành chính của Hà Nội, khu phố cổ, đường lên sân bay Nội Bài, các địa điểm du lịch.

        Việc đón taxi cũng khá thuận tiện, gần Kengnam,...

        Bên cạnh đó, tôi cũng là một người bản địa vô cùng thân thiện và thoải mái. Chính vì vậy đừng ngại ngần mà chia sẻ với chúng tôi những điều bạn đang thắc mắc hoặc những khó khăn bạn gặp phải khi ở đây.

        Chúng tôi cũng luôn mong muốn được cùng bạn khám phá nhiều địa điểm tốt đẹp nhất tại đây.

        Vậy còn chần chừ gì nữa ngay bây giờ hãy lên kế hoạch để tận hưởng những khoảnh khắc tuyệt vời cùng nhau.

        Mong rằng bạn sẽ có trải nghiệm vui vẻ và đầy ý nghĩa ở ADODDA.'
                    placeType={details?.roomType}
                    maxNumOfPeople='2'
                  />
                  <Amenities listAmenties={details} />
                  {/* <Price /> */}
                  <Reviews />
                  <PolicyAndRule
                  // policy={placeData?.policy_attributes}
                  // rule={placeData?.rule_attributes}
                  // policy='Linh hoạt: Miễn phí hủy phòng trong vòng 48h sau khi đặt phòng thành công và trước 1 ngày so với thời gian check-in. Sau đó, hủy phòng trước 1 ngày so với thời gian check-in, được hoàn lại 100% tổng số tiền đã trả (trừ phí dịch vụ).'
                  // rule='Khách báo trước giờ nhận phòng 3 tiếng.

                  //     Khách cần giao hộ chiếu hoặc căn cước công dân cho chủ nhà.

                  //     Không sử dụng các chất kích thích

                  //     Không mở nhạc quá 11 PM (23:00)

                  //     Không hút thuốc trong phòng ngủ

                  //     Không mở tiệc trong phòng

                  //     Vui lòng tắt các thiết bị khi bạn ra khỏi phòng'
                  />
                  <Location />
                </Box>
              </Box>
              <Box flex='1'>
                <ShareAndLikeBtn />
                <BookingForm
                  roomPrice={details?.roomPrice}
                  waterPrice={details?.waterPrice}
                  electricityPrice={details?.electricityPrice}
                />
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default PlaceDetailsComponent
