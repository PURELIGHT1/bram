import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../helpers/routes';
import {
  DashboardLayout,
  HomeLayout,
  NotFoundPage,
} from '../../pages'

const RouteManager = () => {
    const { pathname } =  useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(pathname === '/'){
            navigate(ROUTES.HOME);
        }
    }, [pathname, navigate])
  return (
    <>
       <Routes>
          <>
            <Route path="/" element={<DashboardLayout/>}>
              <Route path={ROUTES.HOME} element={<HomeLayout/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
          </>
       </Routes>
    </>
  )
}

export default RouteManager
