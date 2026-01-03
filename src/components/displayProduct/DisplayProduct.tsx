import type { IProduct } from "../../interfaces";

const DisplayProduct = ({ product }: { product: IProduct | undefined }) => {
  return (
    <div className="flex gap-5 flex-col md:flex-row">
      <div className="flex  flex-col gap-2 lg:flex-1   ">
        <div className="hidden lg:block">
          <img
            src={product?.image}
            alt={product?.name}
            className=" object-fill"
          />
          <img
            src={product?.image}
            alt={product?.name}
            className=" object-fill"
          />
          <img
            src={product?.image}
            alt={product?.name}
            className=" object-fill"
          />
          <img
            src={product?.image}
            alt={product?.name}
            className=" object-fill"
          />
        </div>
      </div>
      <div className="flex-4">
        <img src={product?.image} alt={product?.name} className="w-full" />
      </div>
    </div>
  );
};

export default DisplayProduct;
