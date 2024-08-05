import React from 'react'
import { CiShop } from "react-icons/ci";

const adminMenu = [
    {
        id: 1,
        title: "Dashboard",
    },
    {
        id: 2,
        title: "Products",
    },
    {
        id: 3,
        title: "Users",
    },
    {
        id: 4,
        title: "Orders",
    },
]

const HomeAdmin = () => {
  return (
    <div className='grid grid-cols-12 min-h-screen'>
        <div className='bg-[#56d0db] p-5 col-span-2'>
            <div className='mb-5 flex flex-col'>
                <i><CiShop /></i>
                <h1>PGSHOP CAFE</h1>
            </div>
            <div>
                <ul className='flex flex-col gap-1'>
                    {
                        adminMenu.map((menu) => {
                            return <li>{menu.title}</li>
                        })
                    }
                </ul>
            </div>
        </div>
        <div className='bg-blue-500 p-5 col-span-10'>
            <div>top</div>
            <div>content</div>
        </div>
    </div>
  )
}

export default HomeAdmin