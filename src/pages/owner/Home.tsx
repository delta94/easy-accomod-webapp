import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import 'antd/dist/antd.css'
import OwnerLayout from 'layouts/OwnerLayout'
import LiveRooms from 'components/owner/LiveRooms'
import PendingRooms from 'components/owner/PendingRooms'
import RentedRooms from 'components/owner/RentedRooms'
import RejectRooms from 'components/owner/RejectRooms'

const Host = () => (
  <OwnerLayout title='Home'>
    <Tabs
      size='md'
      variant='enclosed'
      colorScheme='orange'
      m='20px auto'
      w='80%'>
      <TabList>
        <Tab>Phòng đang cho thuê</Tab>
        <Tab>Danh sách chờ</Tab>
        <Tab>Phòng đã cho thuê</Tab>
        <Tab>Danh sách bị từ chối</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <LiveRooms />
        </TabPanel>
        <TabPanel>
          <PendingRooms />
        </TabPanel>
        <TabPanel>
          <RentedRooms />
        </TabPanel>
        <TabPanel>
          <RejectRooms />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </OwnerLayout>
)

export default Host
