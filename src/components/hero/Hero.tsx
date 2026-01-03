import handImage from "../assets/hand_icon.png";
import arrow from "../assets/arrow.png";
import bannerImg from "../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] flex-col sm:flex-row  flex items-center justify-between px-20 py-10 min-h-screen  ">
      <div className="flex flex-col gap-3 sm:gap-5">
        <h4 className="text-[#201d20] font-semibold text-xl">
          NEW ARRIVALS ONLY{" "}
        </h4>
        <h2 className="flex items-center gap-3 ">
          <p className="font-semibold text-3xl  sm:text-5xl  text-[#201d20]">
            {" "}
            New
          </p>{" "}
          <img src={handImage} alt="hand" className="w-[60px] h-[60px]" />
        </h2>
        <h2 className="text-[#201d20] text-3xl  sm:text-5xl font-semibold ">
          Collections
        </h2>
        <h2 className="text-[#201d20]  text-3xl  sm:text-5xl font-semibold">
          For Every One{" "}
        </h2>
        <button className="text-white bg-[#f14040] w-fit   flex justify-center px-5 items-center gap-3 py-2   rounded-3xl cursor-pointer ">
          <p> Latest Collections</p>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
      <div>
        <img src={bannerImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
