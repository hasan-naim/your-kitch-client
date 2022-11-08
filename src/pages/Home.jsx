import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import ContactUs from "../components/ContactUs/ContactUs";
import MealsSection from "../components/MealsSection/MealsSection";

function Home() {
  return (
    <div>
      <Banner />
      <MealsSection />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default Home;
