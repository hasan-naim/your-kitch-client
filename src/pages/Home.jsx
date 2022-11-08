import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import ContactUs from "../components/ContactUs/ContactUs";

function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default Home;
