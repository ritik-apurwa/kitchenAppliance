import { useLocation } from "react-router-dom";
import Companies from "./Companies";
import Contact from "./Contact";
import GetInTouch from "./GetInTouch";
import LandingPage from "./LandingPage";
import MorphDetails from "./MorphDetails";
import { useEffect } from "react";
import ProductGrid from "./Product";
import ServiceGrid from "./Services";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <section className="flex flex-col gap-y-4">
      <section id="morph-details">
        <MorphDetails />
      </section>
      <section id="landing-page">
        <LandingPage />
      </section>
      <section id="services">
        <ProductGrid />
      </section>
      <section id="services">
        <ServiceGrid />
      </section>
      <section id="companies">
        <Companies />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="get-in-touch">
        <GetInTouch />
      </section>
    </section>
  );
}
