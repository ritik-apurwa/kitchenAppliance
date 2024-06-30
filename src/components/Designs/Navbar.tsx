import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";

import { MobileNav } from "./MobileNav";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const menuVariants = {
    closed: { height: 56 },
    open: { height: "fit-content" },
  };
  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.header
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="  w-screen bg-white mx-auto overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between max-h-14 w-full items-center p-4">
          <Link to="/" className="font-bold text-xl">
            Team Hope
          </Link>
          <button
            onClick={handleOpen}
            className=" p-1.5 bg-indigo-600 text-white rounded-full focus:outline-none"
          >
            {isOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        <div className="h-auto  py-10 flex bg-white max-w-5xl mx-auto overflow-y-auto max-h-screen  justify-center items-center">
          <MobileNav isOpen={isOpen} toggleNav={toggleNav} />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
