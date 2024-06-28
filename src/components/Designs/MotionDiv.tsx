// MotionDiv.tsx
import { motion } from "framer-motion";

const MotionDiv: React.FC<any> = ({ children, ...rest }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
