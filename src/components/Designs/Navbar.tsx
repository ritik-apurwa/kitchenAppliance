import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom"; // Adjust the import path as necessary

import DynamicBorderDiv from "./DynamicBorder";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [, setScrollValue] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (latest / docHeight) * 100;
    setScrollPercentage(scrollPercent);
  });

  return (
    <section className="max-w-7xl flex justify-between items-center mx-auto py-3 border-2 w-full">
      <div className="flex items-center">
        <h1 className="text-center mr-4">Company Name</h1>
        <Link to="/about" className="text-blue-500 hover:underline">
          About
        </Link>
      </div>
      <div>
        
      </div>
      <div className="relative flex size-8  items-center justify-center">
        <DynamicBorderDiv
          progress={scrollPercentage}
          circleRadius={45}
          strokeWidth={20}
          contentBg="bg-blue-500"
          circleColor="text-gray-200"
          progressColor="text-blue-500"
         content={<FaWhatsapp />}
        />
      </div>
    </section>
  );
};

export default Navbar;
