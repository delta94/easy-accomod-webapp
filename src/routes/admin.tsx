import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from '../pages/static-page/NotFound'

export default function AdminRouter() {
  return (
    <Switch>
      <Route component={NotFound} />
    </Switch>
  )
}
