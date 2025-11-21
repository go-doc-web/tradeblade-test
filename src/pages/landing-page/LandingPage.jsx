import React from "react";
import Hero from "../../sections/hero";
import SectionNumbers from "../../sections/section-numbers/SectionNumbers";
import PassedDeals from "../../sections/section-deal/PassedDeals";
import About from "../../sections/about/";
import Questions from "../../sections/qestions/Questions";
import { AccordionContextProvider } from "../../store/useAccordionContext.jsx";

const LandingPage = () => {
  return (
    <AccordionContextProvider>
      <Hero />
      <SectionNumbers />
      <PassedDeals />
      <About />
      <Questions />
    </AccordionContextProvider>
  );
};

export default LandingPage;
