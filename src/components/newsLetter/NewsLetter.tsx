const NewsLetter = () => {
  return (
    <div className="my-8 text-center bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)]   flex flex-col items-center   mx-10 px-5 md:px-30 py-15 gap-3 md:gap-5">
      <h2 className="font-semibold md:text-5xl  ">
        Get Exclusive Offers On Your Email
      </h2>
      <p className="font-medium text-lg text-gray-400">
        Subscribe To Our Newsletter
      </p>
      <div className="relative">
        <input
          type="text"
          placeholder="Your EmailId"
          className="py-3 px-5 rounded-3xl focus:outline-0 w-70 sm:w-100 border border-gray-300"
        />
        <button className="py-3 px-5 rounded-3xl bg-black text-white absolute end-[.1rem] ">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
