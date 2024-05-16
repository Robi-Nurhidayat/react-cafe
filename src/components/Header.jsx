import { IoIosSearch } from "react-icons/io";

const Header = () => {

    const onSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='h-[70%] bg-white col-span-full flex justify-between items-center px-20  row-start-1 row-span-2 shadow-lg'>
        <div className='font-bold text-xl'><span className='text-red-500'>REST</span>AURANT</div>
        <form onSubmit={onSubmit} className="flex items-center gap-1">
            <div>
                <input type="text" className='w-96 bg-[#dddff7] outline-none px-3 py-2 text-sm text-gray-900 border rounded' placeholder='Search categories or menu' />
            </div>
            <button type="submit" className="bg-[#ceab42] px-3 py-2 rounded">
                <span className="text-xl text-white"><IoIosSearch /></span>
            </button>
        </form>

        <div>
            <button className='bg-[#ceab42] text-white font-semibold px-5 py-2 rounded'>Login</button>
        </div>

    </div>
  )
}

export default Header