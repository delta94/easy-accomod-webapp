/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react'
import { firestore } from 'firebase-config'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function Layout(props: any) {
  const [name, setName] = useState('')
  useEffect(() => {
    firestore
      .collection('test')
      .doc('ayeQpD0ByKbK9q1NcVCD')
      .onSnapshot((doc) => {
        setName(doc.data()?.name)
        return doc.data()?.name
      })
  }, [])

  return (
    <div>
      <Header />
      {name}
      {props.children}
      <Footer />
    </div>
  )
}
