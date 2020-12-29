import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from 'pages/owner/Home'
import CreatPlace from 'pages/owner/CreatPlace'
import RenewRoom from 'pages/owner/RenewRoom'
import PreviewRoom from 'components/owner/PreviewRoom'
import Login from 'pages/owner/Login'
import Signup from 'pages/owner/Signup'
import ViewRoom from 'components/owner/ViewRoom'
import NotFound from '../pages/static-page/NotFound'

export default function OwnerRouter() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/create-room' component={CreatPlace} />
      <Route path='/rooms/:room_id/preview' component={PreviewRoom} />
      <Route path='/rooms/:room_id/view' component={ViewRoom} />
      <Route path='/rooms/:room_id/renew' component={RenewRoom} />
      <Route component={NotFound} />
    </Switch>
  )
}
