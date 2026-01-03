/* eslint-disable prefer-const */
import { useContext } from "react";
import { shopContext } from "../context";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import DisplayProduct from "../components/displayProduct/DisplayProduct";
import ProductDetails from "../components/productDetails/ProductDetails";
import DescriptionBox from "../components/description-box/DescriptionBox";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";
import type { IProduct } from "../interfaces";

const Product = () => {
  let { all_product } = useContext(shopContext);

  const { productId } = useParams();
  const product = all_product.find(
    (product: IProduct) => product.id === Number(productId)
  );

  return (
    <div className="min-h-screen px-10 md:px-20 py-10">
      <BreadCrumb product={product} />
      <div className="flex-col flex lg:flex-row  gap-4">
        <div className="flex-1">
          <DisplayProduct product={product} />
        </div>
        <div className="flex-1   ">
          <ProductDetails product={product} />
        </div>
      </div>
      <div className="my-6">
        <DescriptionBox />
      </div>
      <div className="my-6">
        <RelatedProducts />
      </div>
    </div>
  );
};

export default Product;
