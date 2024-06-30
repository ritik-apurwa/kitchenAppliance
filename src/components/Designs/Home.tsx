import React from "react";

import Contact from "./Contact";
import GetInTouch from "./GetInTouch";
import LandingPage from "./LandingPage";
import MorphDetails from "./MorphDetails";
import ProductGrid from "./Product";
import ServiceGrid from "./Services";
import AnimatedSection from "./AnimatedSection";

const Home: React.FC = () => {
  return (
    <section className="flex flex-col">
      <section className="flex flex-col w-screen">
        <AnimatedSection key="morph-details" id="morph-details">
          <MorphDetails />
        </AnimatedSection>
        <AnimatedSection
          id="landing-page"
          key="landing-page"
          className="w-screen"
        >
          <LandingPage />
        </AnimatedSection>
        <section id="product" className="w-screen">
          <ProductGrid />
        </section>
        <section id="services" className="w-screen">
          <ServiceGrid />
        </section>
       
       
        <AnimatedSection id="contact" key="contact">
          <Contact />
        </AnimatedSection>
        <AnimatedSection id="get-in-touch" key="get-in-touch">
          <GetInTouch />
        </AnimatedSection>
      </section>
    </section>
  );
};

export default Home;
