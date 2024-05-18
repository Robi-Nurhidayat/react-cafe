import PizzaCheese from "/assets/images/products/pizza1.png";
import PizzaDaging from "/assets/images/products/pizza2.jpg";

const products = [
  {
    id: 1,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 2,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 3,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 4,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 5,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 6,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 7,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 8,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 9,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 10,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 11,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 12,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 1,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 2,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 3,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 4,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 5,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 6,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 7,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 8,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 9,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 10,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 11,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
  {
    id: 12,
    title: "Mixed Fizza",
    image: PizzaCheese,
    price: 12000,
  },
];

const Product = () => {
  return (
    
      <div className="grid grid-cols-12 px-5 py-5 gap-4 overflow-auto h-[71vh] z-0">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-span-3 bg-white rounded shadow-md h-[300px] flex justify-center">
              <div className="w-[90%] h-full py-5">
                <div className="flex justify-center mb-5">
                  <img
                    src={product.image}
                    alt="pizza"
                    className="w-[150px] rounded"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h4>{product.title}</h4>
                  <h5>Rp. {product.price}</h5>
                </div>
                <div className="flex justify-center gap-2 mt-2">
                  <button className="bg-blue-400 px-2 py-1 text-sm rounded text-white">
                    Add to cart
                  </button>
                  <button className="bg-[#9F73AB] px-2 py-1 text-sm rounded text-white">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    
  );
};

export default Product;
