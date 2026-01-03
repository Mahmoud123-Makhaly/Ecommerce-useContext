import exclusive from "../assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="my-8 bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] flex-col md:flex-row  flex items-center justify-between  mx-10 px-30 py-10">
      <div className="flex flex-col gap-5 items-center md:items-start">
        <h2 className="text-5xl font-semibold">Exclusive </h2>
        <h2 className="text-5xl font-semibold">Offers For You</h2>
        <h6 className="font-medium">ONLY ON BEST SELLER PRODUCTS </h6>
        <button className="text-white bg-[#f14040] w-fit   flex justify-center   items-center gap-3 py-2  px-8 rounded-3xl cursor-pointer ">
          Check Now
        </button>
      </div>
      <div>
        <div className="min-w-[300px]">
          <img src={exclusive} alt="exclusive" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
