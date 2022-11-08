import React from "react";
import img from "../../assets/illustration/about-us.svg";

function AboutUs() {
  return (
    <div className="mt-24 mb-24">
      <div className="container">
        <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-14 font-mono">
          About Us
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-14 lg:p-24 lg:px-20">
            <img src={img} alt="" />
          </div>
          <div className="flex items-center text-md lg:text-xl">
            We’re taking restaurants to a whole new place.
            <br /> Where seamless delivery is prioritized, costs are<br></br>{" "}
            minimized, and profits are maximized. And all you have<br></br> to
            do is cook. Get instant access to an entirely new<br></br> pool of
            customers. We place our kitchens in delivery
            <br /> hotspots with large numbers of hungry eaters who <br></br>
            frequently order food online.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
