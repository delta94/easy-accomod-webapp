/* eslint-disable operator-linebreak */
import { Box, Button, useToast } from '@chakra-ui/react'
import PlaceInformation from 'components/new-place/place-information/PlaceInformation'
import PlaceImage from 'components/new-place/place-image/PlaceImage'
import PricePolicy from 'components/new-place/price-policy/PricePolicy'
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import OwnerLayout from 'layouts/OwnerLayout'
import { Steps } from 'antd'

const { Step } = Steps

const CreatePlace = () => {
  const [isCompletePlaceInfo, setIsCompletePlaceInfo] = useState(false)
  const [isCompletePlaceImage, setIsCompletePlaceImage] = useState(false)
  const [isCompletePlacePolicy, setIsCompletePlacePolicy] = useState(false)
  const [placeInfo, setPlaceInfo] = useState({
    name: '',
    description: '',
    city: '',
    roomType: '',
    address: '',
    rule: '',
    area: 15,
    bathroomType: 'PRIVATE',
    kitchenType: 'PRIVATE',
    isWithOwner: true,
    hasWaterHeater: true,
    hasConditioner: true,
    hasBalcony: true,
    hasFridge: true,
    hasBed: true,
    hasWardrobe: true,
  })
  const [placeImage, setPlaceImage] = useState({
    image: '',
    overviews_attributes: [],
  })
  const [placePolicy, setPlacePolicy] = useState({
    policy_attributes: {
      currency: 'vnd',
      cancel_policy: 'normal',
      max_num_of_people: 1,
    },
    schedule_price_attributes: {
      normal_day_price: 200000,
      weekend_price: 200000,
      cleaning_price: 50000,
    },
  })
  const toast = useToast()

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (
      placeImage.image !== '' &&
      placeImage.overviews_attributes.length >= 8
    ) {
      setIsCompletePlaceImage(true)
    }
  }, [placeImage.image, placeImage.overviews_attributes.length])

  const next = async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (current === 0 && isCompletePlaceInfo) {
      setCurrent(1)
    } else if (current === 1 && isCompletePlaceInfo && isCompletePlaceImage) {
      setCurrent(2)
    } else {
      toast({
        title: 'Bạn cần điền đầy đủ thông tin',
        description: 'Vui lòng điền vào những trường yêu cầu',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  const prev = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setCurrent(current - 1)
  }

  const steps = [
    {
      title: 'Thông tin chỗ nghỉ',
      content: (
        <PlaceInformation
          completeStep={setIsCompletePlaceInfo}
          syncData={setPlaceInfo}
          data={placeInfo}
        />
      ),
    },
    {
      title: 'Hình ảnh chỗ nghỉ',
      content: (
        <PlaceImage
          completeStep={setIsCompletePlaceImage}
          syncData={setPlaceImage}
          imageData={placeImage}
        />
      ),
    },
    {
      title: 'Giá và quy định nhận chỗ',
      content: (
        <PricePolicy
          completeStep={setIsCompletePlacePolicy}
          syncData={setPlacePolicy}
          data={placePolicy}
        />
      ),
    },
  ]

  return (
    <OwnerLayout>
      <Box mb={5}>
        <Box maxW='80%' m='30px auto' pb={5}>
          <Steps current={current} direction='horizontal'>
            {steps.map((item) => (
              <Step
                key={item.title}
                title={item.title}
                style={{ fontWeight: 'bold' }}
              />
            ))}
          </Steps>
          <div className='steps-content'>{steps[current].content}</div>
          <div className='steps-action buttonWrapperClass'>
            {current < steps.length - 1 && (
              <Button colorScheme='orange' mr={5} onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button colorScheme='orange' mr={5} onClick={() => next()}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button colorScheme='teal' onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </Box>
      </Box>
    </OwnerLayout>
  )
}

export default CreatePlace
