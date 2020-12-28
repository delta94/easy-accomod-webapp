/* eslint-disable react/destructuring-assignment */
import React from 'react'
import Header from '../components/layout/OwnerHeader'
import Footer from '../components/layout/Footer'

export default function Layout(props: any) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
