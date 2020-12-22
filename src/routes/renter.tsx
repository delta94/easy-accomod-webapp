import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from 'pages/renter/Login'
import Signup from 'pages/renter/Signup'
import Home from 'pages/renter/Home'
import NotFound from 'pages/static-page/NotFound'

export default function RenterRouter() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route component={NotFound} />
    </Switch>
  )
}
