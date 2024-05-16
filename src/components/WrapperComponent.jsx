import React from 'react'
import Header from './Header'
import LeftBar from './LeftBar'
import MenuCategory from './MenuCategory'
import { Outlet } from 'react-router-dom'
import RightBar from './RightBar'

const WrapperComponent = () => {
  return (
    <div className=''>
        <div className='h-screen bg-[#eeeefd] grid grid-cols-12 grid-rows-12 items-start'>
            <Header />
            <LeftBar />
            <div className='col-span-6 row-start-3 row-end-13'>
                <MenuCategory />
                {/* list of products */}
                <Outlet />
            </div>
            <RightBar />
        </div>
    </div>
  )
}

export default WrapperComponent