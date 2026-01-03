import { useContext } from "react";
import { shopContext } from "../context";
import Item from "../components/item/Item";
import arrowDown from "../components/assets/dropdown_icon.png";

const ShopCategory = ({ bannerImage }: { bannerImage: string }) => {
  const AllProducts = useContext(shopContext);
  const { pathname } = window.location;
  const category = pathname.split("/")[1];
  const filteredProducts = AllProducts.filter(
    (product) => product.category === category
  );
  return (
    <div>
      <div>
        <img src={bannerImage} alt="bannerImage" />
      </div>
      <div className="mx-15 my-6 flex flex-col sm:flex-row gap-3 justify-between items-center">
        {" "}
        <p>
          <span className="font-semibold">
            Showing 1-{filteredProducts.length}
          </span>{" "}
          out of {AllProducts.length} products
        </p>
        <button className="border border-gray-300 py-3 px-7 rounded-3xl cursor-pointer flex items-center gap-2 ">
          Sort By <img src={arrowDown} alt="arrowDown" />
        </button>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-15 gap-4">
        {filteredProducts.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </div>
      <div className="flex justify-center my-6">
        <button className="bg-gray-300 py-3 px-7 rounded-3xl cursor-pointer  ">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
