import React from "react";
import bannerImg from "../../assets/banner/banner1.png";
import "./Banner.css";
function Banner() {
  return (
    <div className="pt-8">
      <div className="container">
        <div className="relative min-h-[400px] overflow-hidden lg:min-h-[400px] min-w-full rounded-lg bg-slate-900/30">
          <div className="overlay min-h-[400px] rounded-lg">
            <img
              class="rounded-t-lg"
              className="w-full min-h-[400px] rounded-lg bg-cover bg-center object-cover hover:scale-[1.2] duration-1000"
              src={bannerImg}
              alt=""
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-mono">
            <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Welcome to Your Own Kitchen
            </h1>
            <p className="text-white font-sans text-sm lg:text-lg pt-4">
              Here you will find your favorite meal. Your meal will be delivered
              <br></br>
              to you in 30 minutes. You can enjoy these meals with your family,
              friends, or college.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
