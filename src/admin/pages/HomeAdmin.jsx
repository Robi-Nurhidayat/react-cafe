import React from 'react'
import { IoStorefrontSharp } from "react-icons/io5";
import avatar from "/avatar.jpg"


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
        <div className='bg-[#56d0db] col-span-2 pl-5 pt-5'>
            <div className='mb-5 flex items-center gap-2'>
               <IoStorefrontSharp className='text-[40px] text-red-400' />
                <h1 className='text-xl font-bold'>PGSHOP CAFE</h1>
            </div>
            <div>
                <ul className='flex flex-col gap-1'>
                    {
                        adminMenu.map((menu) => {
                            return <li className='cursor-pointer'>{menu.title}</li>
                        })
                    }
                </ul>
            </div>
        </div>
        <div className='col-span-10'>
            <div className='py-5 px-10 flex justify-between items-center border'>
                <span>DASHBOARD</span>
                <div className='w-[60px] h-[60px] rounded-full   bg-slate-500'>
                    <img src={avatar} alt="image profile" className='object-cover rounded-full w-full h-full' />
                </div>
            </div>
            <div>content</div>
        </div>
    </div>
  )
}

export default HomeAdmin