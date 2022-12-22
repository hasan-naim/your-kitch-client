import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import ContactUs from "../components/ContactUs/ContactUs";
import MealsSection from "../components/MealsSection/MealsSection";
import { Helmet } from "react-helmet-async";
function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="pt-12">
      <Helmet>
        <title>Home | Your kitch</title>
      </Helmet>
      <Banner />
      <MealsSection />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default Home;
