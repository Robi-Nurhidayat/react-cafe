import allItems from "/assets/images/all-items.svg";
import Pizza from "/assets/images/pizza.svg";
import Burger from "/assets/images/burger.svg";
import Rice from "/assets/images/rice.svg";
const MenuCategory = () => {
  return (
    <div className='bg-white px-5 pt-2 pb-4'>
      <h1>Choose Category</h1>
      <div className="flex justify-between items-center pl-3 mt-1 w-10/12">
        <div className="flex gap-x-3 items-center px-4 py-2 bg-[#f8f3fa] w-[140px] rounded-3xl">
          <img src={allItems} alt="all item icon" className="h-[30px]" />
          <span>All Items</span>
        </div>
        <div className="flex gap-x-3 items-center px-4 py-2 bg-[#f8f3fa] w-[140px] rounded-3xl">
          <img src={Pizza} alt="all item icon" className="h-[30px]" />
          <span>Pizza</span>
        </div>
        <div className="flex gap-x-3 items-center px-4 py-2 bg-[#f8f3fa] w-[140px] rounded-3xl">
          <img src={Burger} alt="all item icon" className="h-[30px]" />
          <span>Burger</span>
        </div>
        <div className="flex gap-x-3 items-center px-4 py-2 bg-[#f8f3fa] w-[140px] rounded-3xl">
          <img src={Rice} alt="all item icon" className="h-[30px]" />
          <span>Rice</span>
        </div>
      </div>
    </div>
  )
}

export default MenuCategory