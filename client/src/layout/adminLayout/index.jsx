import React from 'react'
import Admin from '../../pages/admin'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
    <Outlet/>
    </>
  )
}

export default AdminLayout