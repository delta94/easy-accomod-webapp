import React from 'react'
import Layout from 'layouts/Layout'
import Header from 'components/account/Header'
import BookmardedList from 'components/account/bookmarded_list/BookmardedList'

function Bookmark() {
  return (
    <Layout>
      <Header />
      <BookmardedList />
    </Layout>
  )
}

export default Bookmark
