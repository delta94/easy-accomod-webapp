import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Layout from 'layouts/Layout'
import PendingOwner from './PendingOwner'
import PendingRooms from './PendingRooms'
import OwnersList from './OwnerList'
import RenterList from './RenterList'

function Home() {
  return (
    <Layout>
      <Tabs maxW='calc(1296px + 5.6rem)' m='40px auto'>
        <TabList>
          <Tab>Pending Owners</Tab>
          <Tab>Pending Rooms</Tab>
          <Tab>Owners List</Tab>
          <Tab>User List</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <PendingOwner />
          </TabPanel>
          <TabPanel>
            <PendingRooms />
          </TabPanel>
          <TabPanel>
            <OwnersList />
          </TabPanel>
          <TabPanel>
            <RenterList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  )
}

export default Home
