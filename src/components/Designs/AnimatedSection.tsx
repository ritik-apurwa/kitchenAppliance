import React, { ReactNode } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = "",
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  return (
    <AnimatePresence>
      <motion.section
        id={id}
        ref={ref}
        initial={{ opacity: 80, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className={`pt-16 ${className}`}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
};

export default AnimatedSection;
