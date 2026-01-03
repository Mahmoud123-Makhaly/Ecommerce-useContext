import new_collections from "../assets/new_collections";
import Item from "../item/Item";

const NewCollections = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center gap-3 my-8">
        <h2 className="text-4xl font-semibold">New Collections</h2>
        <span className="block w-[150px] h-[5px] bg-[#1f1f1f]"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-15 gap-4">
        {new_collections.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
