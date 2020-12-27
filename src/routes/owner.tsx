import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from 'pages/owner/Home'
import CreatPlace from 'pages/owner/CreatPlace'
import PreviewRoom from 'pages/admin/PreviewRoom'
import NotFound from '../pages/static-page/NotFound'

export default function OwnerRouter() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/create-room' component={CreatPlace} />
      <Route path='/rooms/:room_id/preview' component={PreviewRoom} />
      <Route component={NotFound} />
    </Switch>
  )
}
