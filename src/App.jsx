import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen py-5 px-[9%] bg-gray-800 font-thin  text-white'>
      <Navbar/>
      <MainRoutes />
    </div>
  )
}

export default App