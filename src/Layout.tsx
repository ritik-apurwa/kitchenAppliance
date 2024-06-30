import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Designs/Footer";
import IconBorderProgress from "./components/Designs/WhatsIcon";
import { useEffect, useState } from "react";
import Navbar from "./components/Designs/Navbar";

const Layout = () => {
  const sectionNames: { [key: string]: string } = {
    "": "Home",
    "morph-details": "Morph Details",
    "landing-page": "Landing Page",
    demo: "Demo",
    product: "Products",
    services: "Services",
    companies: "Companies",
    contact: "Contact",
    "get-in-touch": "Get In Touch",
  };
  const sectionIds = [
    "morph-details",
    "landing-page",
    "demo",
    "product",
    "services",
    "companies",
    "contact",
    "get-in-touch",
  ];
  const [, setCurrentSection] = useState<string>("Home");
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
    <main className="relative   overflow-x-hidden overflow-y-auto">
      <div className="">
        <div className="fixed top-0 h-16 bg-background z-50  w-screen">
          <Navbar />
        </div>
        <div className="min-h-[calc(100vh-135px)]">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
        <div className="fixed bottom-10 size-14 right-4">
          <IconBorderProgress />
        </div>
      </div>
    </main>
  );
};

export default Layout;
