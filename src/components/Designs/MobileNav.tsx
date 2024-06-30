import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Services } from "../../public";

interface NavProps {
  isOpen: boolean;
  toggleNav: () => void;
}

export const MobileNav: React.FC<NavProps> = ({ toggleNav }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  const MenuLinkss = () => {
    return (
      <div className="flex flex-col text-lg gap-4">
        {MenuLinks.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className={`nav-link ${
              location.pathname === item.path
                ? "text-blue-600"
                : "text-gray-800"
            }`}
            onClick={toggleNav}
          >
            {item.label}
          </Link>
        ))}
      </div>
    );
  };

  const ServiceLinkss = () => {
    return (
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
              className="space-y-2"
            >
              {Services.map((item) => (
                <Link
                  to={`/service/${item.id}`}
                  key={item.id}
                  className="block text-lg text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={toggleNav}
                >
                  {item.title}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const MenuLinks = [
    { id: 1, path: "/contact", label: "Contact" },
    { id: 2, path: "/about", label: "About" },
    { id: 3, path: "/product", label: "Product" },
  ];

  return (
    <section className="w-10/12 ">
      <AnimatePresence>
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className=""
        >
          <nav className="space-y-6 text-2xl font-medium">
            <MenuLinkss />
            <ServiceLinkss />
          </nav>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
