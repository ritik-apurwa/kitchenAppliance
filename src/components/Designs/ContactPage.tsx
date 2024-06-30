import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <section className="bg-[#F0F0F0] py-16 text-black prose-lg">
      <motion.h3
        className="text-center font-extrabold text-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get A Quality Service At Your Doorstep Within 60 Min.
      </motion.h3>

      <div className="text-center space-y-8 mt-8">
        <div className="space-y-8 flex justify-center flex-col w-full items-center">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 max-w-xl text-base gap-x-4 gap-y-4 px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              className="flex items-center justify-center space-x-3 px-6 py-3 bg-transparent text-gray-700 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope className="text-blue-500" size={24} />
              <span className="text-lg">demo@mail.com</span>
            </motion.button>
            <motion.button
              className="flex items-center justify-center space-x-3 px-6 py-3 bg-transparent text-gray-700 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <FaPhone className="text-green-500" size={24} />
              <span className="text-lg">+1234567890</span>
            </motion.button>
          </motion.div>
          <motion.div
            className="flex justify-center text-base"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              className="flex items-center justify-center space-x-3 px-6 py-3 bg-transparent text-gray-700 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <FaMapMarkerAlt className="text-red-500" size={24} />
              <span className="text-lg">123 Demo Location, Mumbai, India</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center py-8 items-center">
        <motion.button
          className="bg-red-500 font-semibold px-8 py-3 text-white border-white border-2 rounded-full"
          whileHover={{ scale: 1.1 }}
        >
          Get in Touch
        </motion.button>
      </div>
    </section>
  );
};

export default ContactPage;
