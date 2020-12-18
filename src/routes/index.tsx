import React from 'react'
import { Route } from 'react-router-dom'

import RenterRouter from './renter'
import AdminRouter from './admin'
import OwnerRouter from './owner'
import NotFound from '../pages/static-page/NotFound'

function App() {
  return (
    <Route
      path='/'
      render={() => {
        const domain = window.location.hostname.split('.')
        if (domain.length === 1) return <RenterRouter />
        if (domain.length === 2) {
          if (domain[0] === 'admin') return <AdminRouter />
          if (domain[0] === 'owner') return <OwnerRouter />
        }
        return <NotFound />
      }}
    />
  )
}

export default App
