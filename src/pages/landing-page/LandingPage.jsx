import React from "react";
import Hero from "../../sections/hero";
import SectionNumbers from "../../sections/section-numbers/SectionNumbers";
import PassedDeals from "../../sections/section-deal/PassedDeals";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <SectionNumbers />
      <PassedDeals />
    </>
  );
};

export default LandingPage;
