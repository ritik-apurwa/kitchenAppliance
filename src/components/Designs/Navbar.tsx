import { Link } from "react-router-dom";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC<{ currentSection: string }> = ({ currentSection }) => {
  return (
    <header className="w-full flex-row h-16 px-3 flex justify-between items-center max-w-7xl py-2 lg:py-4 mx-auto">
      <div className="px-2 items-center flex">
        <Link to="/" className="font-bold text-xl">
          Team Hope
        </Link>
      </div>
      <div className="relative overflow-hidden h-8 flex justify-center w-32 px-4">
        <AnimatePresence>
          <motion.span
            key={currentSection}
            initial={{ opacity: 0, y: 20, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.8, rotate: 10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute max-h-10 h-full text-xs w-full overflow-hidden text-center flex items-center justify-center  font-semibold bg-white border-2 border-gray-300 "
          >
            {currentSection}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="hidden lg:flex flex-row gap-x-2 items-center px-3">
        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-lg">
          Login
        </button>
        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-lg">
          Register
        </button>
      </div>
    </header>
  );
};

export default Navbar;
