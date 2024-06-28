import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useScrollSpy = (sectionIds: string[]) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            if (currentSection !== id) {
              setCurrentSection(id);
              navigate(`#${id}`, { replace: true });
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection, navigate, sectionIds]);

  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(sectionId);
    }
  }, [location]);

  return currentSection;
};
