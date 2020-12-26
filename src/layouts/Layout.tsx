/* eslint-disable react/destructuring-assignment */
import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
// import PlaceDetailsComponents from '../components/place/PlaceDetailsComponents'

export default function Layout(props: any) {
  return (
    <div>
      <Header />
      {props.children}
      {/* <PlaceDetailsComponents /> */}
      <Footer />
    </div>
  )
}
