import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/renter/Home'
import NotFound from '../pages/static-page/NotFound'

export default function RenterRouter() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}
