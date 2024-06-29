import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Companies from "./Companies";
import Contact from "./Contact";
import GetInTouch from "./GetInTouch";
import LandingPage from "./LandingPage";
import MorphDetails from "./MorphDetails";
import ProductGrid from "./Product";
import ServiceGrid from "./Services";

const sectionIds = [
  "morph-details",
  "landing-page",
  "product",
  "services",
  "companies",
  "contact",
  "get-in-touch",
];

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("Home");

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map((id) => document.getElementById(id));
      const scrolledSections = sections.filter(
        (section) =>
          section &&
          section.getBoundingClientRect().top < window.innerHeight / 2
      );

      if (scrolledSections.length > 0) {
        const currentSectionId =
          scrolledSections[scrolledSections.length - 1]?.id || "";
        setCurrentSection(sectionNames[currentSectionId] || "Home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div className="fixed w-screen border-b border-b-black mx-auto top-0 h-16 z-50 bg-white">
        <Navbar currentSection={currentSection} />
      </div>

      <section className="flex flex-col w-screen pt-16 gap-y-4">
        <section id="morph-details" className="pt-16">
          <MorphDetails />
        </section>
        <section id="landing-page" className="w-screen pt-16">
          <LandingPage />
        </section>
        <section id="product" className="w-screen pt-16">
          <ProductGrid />
        </section>
        <section id="services" className="w-screen pt-16">
          <ServiceGrid />
        </section>
        <section id="companies" className="pt-16">
          <Companies />
        </section>
        <section id="contact" className="pt-16">
          <Contact />
        </section>
        <section id="get-in-touch" className="pt-16">
          <GetInTouch />
        </section>
      </section>
    </>
  );
};

export default Home;

const sectionNames: { [key: string]: string } = {
  "": "Home",
  "morph-details": "Morph Details",
  "landing-page": "Landing Page",
  product: "Products",
  services: "Services",
  companies: "Companies",
  contact: "Contact",
  "get-in-touch": "Get In Touch",
};
