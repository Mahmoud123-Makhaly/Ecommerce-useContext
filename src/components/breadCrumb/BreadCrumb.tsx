import type { IProduct } from "../../interfaces";
import arrow from "../assets/breadcrum_arrow.png";
const BreadCrumb = ({ product }: { product?: IProduct | undefined }) => {
  console.log(product);
  return (
    <div className="mb-4">
      <h2 className="flex gap-2 items-center flex-wrap">
        HOME <img src={arrow} alt="Arrow" className="w-[12px] h-[12px]" />
        SHOP <img src={arrow} alt="Arrow" className="w-[12px] h-[12px]" />{" "}
        {product?.category}
        <img src={arrow} alt="Arrow" className="w-[12px] h-[12px]" />
        {product?.name}
      </h2>
    </div>
  );
};

export default BreadCrumb;
