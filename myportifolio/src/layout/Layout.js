import React from 'react'
import { Outlet } from 'react-router-dom'
import FlowbiteNavbar from './navbar/Navbar'
import FlowbiteFooter from './Footer'

function Layout() {
  return (
    <div className='container '>
        <FlowbiteNavbar/>

        <div className='container min-vh-100 my-3 p-3'>
            <Outlet/>  {/* To render the current route selected */}
        </div>
          
        <FlowbiteFooter/>

    </div>
  )
}

export default Layout