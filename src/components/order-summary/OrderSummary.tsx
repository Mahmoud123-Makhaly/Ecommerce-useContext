import { useContext } from "react";
import { shopContext } from "../../context";

const OrderSummary = () => {
  const { getTotalCartAmount } = useContext(shopContext);
  return (
    <div className="flex flex-col md:flex-row gap-2 my-8">
      <div className="flex-1 ">
        <h2 className="font-semibold text-2xl">Cart Totals</h2>
        <p className="  border-b border-gray-300 py-3 flex justify-between w-[80%]">
          <span> Subtotal</span>
          <span>${getTotalCartAmount()}</span>
        </p>
        <p className="  border-b border-gray-300 py-3 flex justify-between w-[80%]">
          <span> Shipping Fees</span>
          <span>$0</span>
        </p>
        <p className="  border-b border-gray-300 py-3 flex justify-between w-[80%]">
          <span> Total </span>
          <span>${getTotalCartAmount()}</span>
        </p>
        <button className="bg-gray-700 text-white py-3 px-5 rounded-md mt-6 hover:bg-gray-800 transition">
          Proceed to Checkout
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h2>If you have a discount code, apply it in the cart</h2>
        <div>
          <input
            type="text"
            placeholder="Promo Code"
            className="w-[400px]
              focus:outline-0
              border p-3 rounded-md border-gray-300  rounded-tr-none rounded-br-none
              "
          />
          <button className="border p-3 px-5 text-white  bg-black border-gray-300 border-s-0">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderSummary;
