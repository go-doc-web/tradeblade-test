import React from "react";
import Hero from "../../sections/hero";
import SectionNumbers from "../../sections/section-numbers/SectionNumbers";
import PassedDeals from "../../sections/section-deal/PassedDeals";
import About from "../../sections/about/";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <SectionNumbers />
      <PassedDeals />
      <About />
    </>
  );
};

export default LandingPage;
