import PizzaCheese from "/assets/images/products/pizza1.png";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
const RightBar = () => {
  return (
    <div className="h-full col-span-3 row-start-3 row-end-13 pl-5">
      <div className=" bg-white h-full pt-2">
        <div className="px-4 flex justify-between items-center py-4">
          <h3 className="text-xl font-semibold">New Order Bill</h3>
          <span className="font-semibold text-sm text-gray-300">Monday, 22 April 2024</span>
        </div>
        {/* list food */}
        <div className="border-y-2 pt-10 pb-2 ">
          <div className="px-2 flex flex-col gap-6  overflow-auto h-[400px]">
            <div className="flex gap-x-2 justify-between items-center px-4 py-2 bg-[#f8f3fa] rounded-3xl">
              <img
                src={PizzaCheese}
                alt="all item icon"
                className="h-[60px] rounded-[360px]"
              />
              <div className="text-sm">
                <h5>Cheese Burger</h5>
                <p>Rp. 120000</p>
              </div>
              <div className="flex items-center gap-x-3">
                <button className="text-[#FEC260] text-3xl">
                  <FaMinusCircle />
                </button>
                <span>0</span>
                <button className="text-[#FEC260] text-3xl">
                  <FaPlusCircle />
                </button>
              </div>
            </div>
            <div className="flex gap-x-2 justify-between items-center px-4 py-2 bg-[#f8f3fa] rounded-3xl">
              <img
                src={PizzaCheese}
                alt="all item icon"
                className="h-[60px] rounded-[360px]"
              />
              <div className="text-sm">
                <h5>Cheese Burger</h5>
                <p>Rp. 120000</p>
              </div>
              <div className="flex items-center gap-x-3">
                <button className="text-[#FEC260] text-3xl">
                  <FaMinusCircle />
                </button>
                <span>0</span>
                <button className="text-[#FEC260] text-3xl">
                  <FaPlusCircle />
                </button>
              </div>
            </div>
            <div className="flex gap-x-2 justify-between items-center px-4 py-2 bg-[#f8f3fa] rounded-3xl">
              <img
                src={PizzaCheese}
                alt="all item icon"
                className="h-[60px] rounded-[360px]"
              />
              <div className="text-sm">
                <h5>Cheese Burger</h5>
                <p>Rp. 120000</p>
              </div>
              <div className="flex items-center gap-x-3">
                <button className="text-[#FEC260] text-3xl">
                  <FaMinusCircle />
                </button>
                <span>0</span>
                <button className="text-[#FEC260] text-3xl">
                  <FaPlusCircle />
                </button>
              </div>
            </div>
            <div className="flex gap-x-2 justify-between items-center px-4 py-2 bg-[#f8f3fa] rounded-3xl">
              <img
                src={PizzaCheese}
                alt="all item icon"
                className="h-[60px] rounded-[360px]"
              />
              <div className="text-sm">
                <h5>Cheese Burger</h5>
                <p>Rp. 120000</p>
              </div>
              <div className="flex items-center gap-x-3">
                <button className="text-[#FEC260] text-3xl">
                  <FaMinusCircle />
                </button>
                <span>0</span>
                <button className="text-[#FEC260] text-3xl">
                  <FaPlusCircle />
                </button>
              </div>
            </div>
            <div className="flex gap-x-2 justify-between items-center px-4 py-2 bg-[#f8f3fa] rounded-3xl">
              <img
                src={PizzaCheese}
                alt="all item icon"
                className="h-[60px] rounded-[360px]"
              />
              <div className="text-sm">
                <h5>Cheese Burger</h5>
                <p>Rp. 120000</p>
              </div>
              <div className="flex items-center gap-x-3">
                <button className="text-[#FEC260] text-3xl">
                  <FaMinusCircle />
                </button>
                <span>0</span>
                <button className="text-[#FEC260] text-3xl">
                  <FaPlusCircle />
                </button>
              </div>
            </div>
            <div className="flex gap-x-2 justify-between items-center px-4 py-2 bg-[#f8f3fa] rounded-3xl">
              <img
                src={PizzaCheese}
                alt="all item icon"
                className="h-[60px] rounded-[360px]"
              />
              <div className="text-sm">
                <h5>Cheese Burger</h5>
                <p>Rp. 120000</p>
              </div>
              <div className="flex items-center gap-x-3">
                <button className="text-[#FEC260] text-3xl">
                  <FaMinusCircle />
                </button>
                <span>0</span>
                <button className="text-[#FEC260] text-3xl">
                  <FaPlusCircle />
                </button>
              </div>
            </div>
           
          </div>
          <div className="px-4 mt-16">
              <div className="flex items-center justify-between">
                <p>Sub total</p>
                <p>Rp. 200000</p>
              </div>
              <p className="border border-dashed mt-8"></p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-red-500">Total</p>
                <p className="text-green-500">Rp. 200000</p>
              </div>
            </div>
        </div>

        {/* end of list food */}

        <div className="px-5 mt-10">
        <button className="bg-red-500 w-full py-1.5 text-white font-semibold rounded ">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
