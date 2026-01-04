import { useContext } from "react";
import { shopContext } from "../../context";
import type { IProduct } from "../../interfaces";
import OrderSummary from "../order-summary/OrderSummary";
const CartItems = () => {
  const { cartItems, all_product, removeFromCard } =
    useContext(shopContext);
  const hasItemsInCart = all_product.some(
    (product) => cartItems[product.id] > 0
  );
  if (!hasItemsInCart) {
    return (
      <table className="  text-center w-full  ">
        <p>Your cart is empty</p>
      </table>
    );
  }
  return (
    <div>
      <table className="  text-center w-full  ">
        <thead>
          <tr>
            <td>Products</td>
            <td>Title</td>
            <td>Price </td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {all_product.map((product: IProduct) => {
            if (cartItems[product.id] > 0) {
              return (
                <tr className="  border-b-1 border-gray-200">
                  <td>
                    <img
                      src={product.image}
                      alt="product-image"
                      className="mx-auto h-25 w-25"
                    />
                  </td>
                  <td>
                    <p>{product.name}</p>
                  </td>
                  <td>
                    <p>{product.new_price}</p>
                  </td>
                  <td>
                    <p> {cartItems[product.id]}</p>
                  </td>
                  <td>
                    <p> {cartItems[product.id] * product.new_price} </p>
                  </td>
                  <td>
                    <button
                      className="py-2 px-4 bg-gray-200 rounded-md"
                      onClick={() => removeFromCard(product.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      {/* start cart total */}
      {hasItemsInCart && <OrderSummary />}
    </div>
  );
};
export default CartItems;
