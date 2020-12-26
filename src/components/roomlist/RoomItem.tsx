import {
  Box,
  Badge,
  Image,
  AspectRatio,
  Link,
  Center,
  Text,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

type Props = {
  title: string
  description: string
  imageUrl: string
  comingSoon?: boolean
  reviewCount: string
  rating: string
  price: string
}

const RoomItem = ({
  title,
  description,
  imageUrl,
  comingSoon,
  reviewCount,
  rating,
  price,
}: Props) => (
  <Box
    borderWidth='1px'
    borderRadius='lg'
    mt={3}
    w='100%'
    mx='0.3rem'
    my='0.4rem'>
    <Image
      src={imageUrl}
      cursor='pointer'
      fallbackSrc='https://www.luxstay.com/loading-img.svg'
      width='100%'
      height={230}
      top={0}
      left={0}
      objectFit='cover'
      borderRadius='3px'
    />
    <Box p='6'>
      <Box alignItems='baseline'>
        <Badge borderRadius='full' px='2' colorScheme='teal'>
          New
        </Badge>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'>
          1 beds &bull; 2 baths
        </Box>
      </Box>

      <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
        {title}
      </Box>

      <Box>
        {price}
        <Box as='span' color='gray.600' fontSize='sm'>
          / wk
        </Box>
      </Box>

      <Box d='flex' mt='2' alignItems='center'>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon key={i} color='teal.500' />
          ))}
        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
          {reviewCount} reviews
        </Box>
      </Box>
    </Box>
  </Box>
)

export default RoomItem
