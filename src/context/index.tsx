/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type ReactNode } from "react";
import all_product from "../components/assets/all_product";
import type { IProduct } from "../interfaces";

export const shopContext = createContext<{
  cartItems: { [key: number]: number };
  addToCart: (productId: number) => void;
  removeFromCard: (productId: number) => void;
  all_product: IProduct[];
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
}>({
  cartItems: {},
  addToCart: () => {},
  removeFromCard: () => {},
  all_product: [],
  getTotalCartAmount: () => 0,
  getTotalCartItems: () => 0,
});
const defaultCart = () => {
  let cart: {
    [key: number]: number;
  } = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState(defaultCart());
  const addToCart = (productId: number) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };
  const removeFromCard = (productId: number) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalCart = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let product = all_product.find(
          (product) => product.id === Number(item)
        );
        totalCart += product!.new_price * cartItems[item];
      }
    }
    return totalCart;
  };
  const getTotalCartItems = () => {
    let TotalCart = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        TotalCart += cartItems[item];
      }
    }
    return TotalCart;
  };
    const contextValue = {
    cartItems,
    addToCart,
    removeFromCard,
    all_product,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <shopContext.Provider value={contextValue}>{children}</shopContext.Provider>
  );
};
export default ShopContextProvider;
