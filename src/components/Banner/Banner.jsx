import React from "react";
import bannerImg from "../../assets/banner/banner1.png";
import "./Banner.css";
function Banner() {
  return (
    <div className="pt-8">
      <div className="container">
        <div className="relative">
          <div className="overlay">
            <img src={bannerImg} className="w-full rounded-lg" alt="" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-mono">
            <h1 className="text-white text-xl md:text-2xl lg:text-6xl font-bold">
              Welcome to Your Own Kitchen
            </h1>
            <p className="text-white text-sm lg:text-md pt-4">
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
