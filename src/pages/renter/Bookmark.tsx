import React from 'react'
import Layout from 'layouts/Layout'
import Header from 'components/account/Header'
import BookmarkList from 'components/account/bookmark-list/BookmarkList'

function Bookmark() {
  return (
    <Layout>
      <Header />
      <BookmarkList />
    </Layout>
  )
}

export default Bookmark
