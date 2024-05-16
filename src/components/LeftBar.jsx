import restaurant from "/assets/images/restaurant.svg";
import { GoHomeFill } from "react-icons/go";
import { MdRestaurantMenu } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";

const LeftBar = () => {
  return (
    <div className="bg-white shadow-lg h-[99%] col-span-2 row-start-3 row-end-13 grid grid-cols-12 grid-rows-12">
      <div className="col-span-12 pt-4 grid grid-cols-12 gap-y-5">
        <div className="col-span-6  flex justify-center items-center cursor-pointer">
          <div className="px-5 py-2.5 w-[80px] rounded text-white font-medium text-md flex flex-col items-center bg-gray-300 max-w-max">
            <GoHomeFill />
            Home
          </div>
        </div>
        <div className="col-span-6  flex justify-center items-center cursor-pointer">
          <div className="px-5 py-2.5 w-[80px] rounded text-white font-medium text-md flex flex-col items-center bg-gray-300 max-w-max">
            <MdRestaurantMenu />
            Menu
          </div>
        </div>
        <div className="col-span-6  flex justify-center items-center cursor-pointer">
          <div className="px-5 py-2.5 w-[80px] rounded text-white font-medium text-md flex flex-col items-center bg-gray-300 max-w-max">
            <RiDiscountPercentFill />
            Promo
          </div>
        </div>
      </div>

      <div className="row-start-9 row-span-9 col-start-3 col-span-8 flex justify-center items-center">
        <img src={restaurant} alt="logo" className="w-[80%]" />
      </div>
    </div>
  );
};

export default LeftBar;
