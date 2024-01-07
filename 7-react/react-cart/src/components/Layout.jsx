import React from 'react'

const Layout = ({children}) => {
  return (
    <main className=' flex flex-col min-h-screen'>{children}</main>
  )
}

export default Layout