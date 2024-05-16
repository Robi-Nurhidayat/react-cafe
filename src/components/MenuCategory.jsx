import allItems from "/assets/images/all-items.svg";
const MenuCategory = () => {
  return (
    <div className='bg-green-200 '>
      <h1>Choose Category</h1>
      <div>
        <div className="flex gap-x-3 items-center px-4 py-2 bg-red-500 max-w-max rounded-3xl">
          <img src={allItems} alt="all item icon" className="h-[30px]" />
          <span>All Items</span>
        </div>
      </div>
    </div>
  )
}

export default MenuCategory