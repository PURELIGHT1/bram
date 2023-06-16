import React, { useEffect } from 'react'

import { navlinks, about, profile, project, footer } from '../utils/setup/data'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Contact from '../components/global/Contact'

const DashboardLayout = () => {
  return (
    <>
      <Navbar navlinks={navlinks}/>
        <Outlet />
        <Contact/>
      <Footer footer={footer} />
    </>
  )
}

export default DashboardLayout
