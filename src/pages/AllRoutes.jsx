import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/page/:pagenumber'  element={<Homepage />} />
    </Routes>
  )
}

export default AllRoutes