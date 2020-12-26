import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from 'pages/renter/Login'
import Signup from 'pages/renter/Signup'
import Home from 'pages/renter/Home'
import NotFound from 'pages/static-page/NotFound'
import City from 'pages/renter/City'
import RoomDetail from 'pages/renter/Detail'
import Account from 'pages/renter/Account'
import Bookmark from 'pages/renter/Bookmark'

export default function RenterRouter() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/rooms/:room_id' component={RoomDetail} />
      <Route path='/cities/:city' component={City} />
      <Route path='/signup' component={Signup} />
      <Route path='/account' component={Account} />
      <Route path='/bookmarks' component={Bookmark} />
      <Route component={NotFound} />
    </Switch>
  )
}
