import start from "../assets/star_icon.png";
import startDull from "../assets/star_dull_icon.png";
import type { IProduct } from "../../interfaces";
import { useContext } from "react";
import { shopContext } from "../../context";
const ProductDetails = ({ product }: { product: IProduct | undefined }) => {
  const { addToCart } = useContext(shopContext);
  return (
    <div className="flex gap-3 lg:gap-10 flex-col">
      <h1 className="font-semibold text-[18px]">{product?.name}</h1>
      <div className="flex gap-2">
        <div className="flex items-center gap-2 ">
          <img src={start} alt="start" />
          <img src={start} alt="start" />
          <img src={start} alt="start" />
          <img src={startDull} alt="start" />
        </div>
        (122)
      </div>
      <div className="flex  gap-4">
        <p className="text-lg font-semibold text-gray-500 decoration-2 line-through ">
          ${product?.old_price}
        </p>
        <p className="text-lg font-semibold  text-[#ff4f2b]">
          ${product?.new_price}
        </p>
      </div>
      <p>
        A lightweight, usually knitted, pullover shirt, close-fitting and with a
        round neckline and short sleeves, worn as an undershirt or outer
        garment.
      </p>
      <h2 className="text-lg font-semibold ">Select Size</h2>
      <ul className="flex gap-4">
        <li className="w-12 h-12 bg-gray-100 rounded-sm  flex items-center justify-center">
          <button className="cursor-pointer">SM</button>
        </li>
        <li className="w-12 h-12 bg-gray-100 rounded-sm  flex items-center justify-center">
          <button className="cursor-pointer">MD</button>
        </li>
        <li className="w-12 h-12 bg-gray-100 rounded-sm  flex items-center justify-center">
          <button className="cursor-pointer">LG</button>
        </li>
        <li className="w-12 h-12 bg-gray-100 rounded-sm  flex items-center justify-center">
          <button className="cursor-pointer">XL</button>
        </li>
        <li className="w-12 h-12 bg-gray-100 rounded-sm  flex items-center justify-center">
          <button className="cursor-pointer">XXL</button>
        </li>
      </ul>
      <button
        className="bg-[#ff4f2b] text-white px-6 py-2 rounded-sm cursor-pointer"
        onClick={() => addToCart(product!.id!)}
      >
        Add To Card
      </button>
      <div className="flex flex-col gap-3">
        <p className="flex gap-2">
          <span className="font-semibold">Category:</span>
          <p>Women , T-Shirt , Crop Top</p>
        </p>
        <p className="flex gap-2">
          <span className="font-semibold">Tags:</span>
          <p>Modern , Latest</p>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
