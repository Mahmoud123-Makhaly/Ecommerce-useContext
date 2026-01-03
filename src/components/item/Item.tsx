import { Link } from "react-router-dom";
import type { IProduct } from "../../interfaces";

interface ItemProps {
  product: IProduct;
}
const Item = ({ product }: ItemProps) => {
  const { name, image, new_price, old_price } = product;
  return (
    <Link to={`/product/${product.id}`} onClick={() => window.scrollTo(0, 0)}>
      <div className="hover:scale-105 transition-transform duration-300">
        <img src={image} alt={name} />
        <div className="flex flex-col gap-1  my-2">
          <h3>{name}</h3>

          <div className="flex gap-5 font-semibold">
            <p className="line-through">${old_price}</p>
            <p className="line-through text-gray-500">${new_price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
