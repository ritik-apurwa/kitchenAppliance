import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Services } from "../../public";
import { brands } from "../../public";

interface NavProps {
  isOpen: boolean;
  toggleNav: () => void;
}

export const MobileNav: React.FC<NavProps> = ({ isOpen, toggleNav }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const location = useLocation();

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
    setIsBrandsOpen(false);
  };

  const toggleBrands = () => {
    setIsServicesOpen(false);
    setIsBrandsOpen((prev) => !prev);
  };

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  const MenuItem = ({ path, label }: { path: string; label: string }) => (
    <Link
      to={path}
      className={`nav-link ${
        location.pathname === path ? "text-blue-600" : "text-gray-800"
      }`}
      onClick={toggleNav}
    >
      {label}
    </Link>
  );

  return (
    <section className="w-10/12 h-full">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="space-y-6 text-2xl font-medium"
          >
          <div className="flex flex-col gap-y-4 text-lg">
          <MenuItem path="/contact" label="Contact" />
            <MenuItem path="/about" label="About" />
            <MenuItem path="/product" label="Product" />
          </div>

            <div className={`space-y-4 ${isBrandsOpen || isServicesOpen ? "pb-10 lg:pb-20" : ""}`}>
              <button
                className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
                onClick={toggleBrands}
              >
                Brands
                {isBrandsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              <AnimatePresence>
                {isBrandsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                   <div className="flex flex-col gap-4 text-lg">
                   {brands.map((item) => (
                      <MenuItem
                        key={item.id}
                        path={`/brands/${item.id}`}
                        label={item.brandName}
                      />
                    ))}
                   </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-4">
              <button
                className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
                onClick={toggleServices}
              >
                Services
                {isServicesOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                   <div className="flex flex-col gap-4 text-lg">
                   {Services.map((item) => (
                      <MenuItem
                        key={item.id}
                        path={`/service/${item.id}`}
                        label={item.title}
                      />
                    ))}
                   </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
