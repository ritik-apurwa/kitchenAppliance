
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (latest / docHeight) * 100;
    setScrollPercentage(scrollPercent);
  });
  return (
    <section className="max-w-7xl mx-auto py-3 border-2 w-full">
      <div className="flex flex-row ">
      <h1 className="text-center">Company Name</h1>
      <span>
        {scrollValue.toFixed(2)}
        <span>
        Scroll Percentage: {scrollPercentage.toFixed(2)}%
        </span>
      </span>
      <Link to="/about">
      about
      </Link>
      </div>
    </section>
  );
};

export default Navbar;
