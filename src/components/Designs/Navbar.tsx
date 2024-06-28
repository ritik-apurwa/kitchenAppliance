import { useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Example icon from react-icons

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
      <div className="relative flex items-center justify-center">
        <FaHome className="text-gray-600" size={30} />
        <div
          className="absolute inset-0 rounded-full border-4 border-white"
          style={{
            boxSizing: "border-box",
          }}
        ></div>
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-blue-500"
          style={{
            boxSizing: "border-box",
            clipPath: `inset(${100 - scrollPercentage}% 0 0 0)`,
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Navbar;
