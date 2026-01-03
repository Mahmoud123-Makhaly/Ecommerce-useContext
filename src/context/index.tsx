/* eslint-disable prefer-const */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type ReactNode } from "react";
import all_product from "../components/assets/all_product";
import type { IProduct } from "../interfaces";

export const shopContext = createContext<{
  [x: number]: number;
  cartItems: { [key: number]: number };
  addToCart: (productId: number) => void;
  removeFromCard: (productId: number) => void;
  all_product: IProduct[];
}>({
  cartItems: {},
  addToCart: () => {},
  removeFromCard: () => {},
  all_product: [],
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
  console.log(cartItems);
  const addToCart = (productId: number) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };
  const removeFromCard = (productId: number) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };
  const contextValue = { cartItems, addToCart, removeFromCard, all_product };
  return (
    <shopContext.Provider value={contextValue}>{children}</shopContext.Provider>
  );
};
export default ShopContextProvider;
