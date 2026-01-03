import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/layout";
import Shop from "../pages/Shop";
import ShopCategory from "../pages/ShopCategory";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import LoginSignUp from "../pages/LoginSignUp";
import menBanner from "../components/assets/banner_mens.png";
import womenBanner from "../components/assets/banner_women.png";
import kidBanner from "../components/assets/banner_kids.png";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Shop />} />
      <Route path="/men" element={<ShopCategory bannerImage={menBanner} />} />
      <Route
        path="/women"
        element={<ShopCategory bannerImage={womenBanner} />}
      />
      <Route path="/kid" element={<ShopCategory bannerImage={kidBanner} />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LoginSignUp />} />
    </Route>
  )
);
