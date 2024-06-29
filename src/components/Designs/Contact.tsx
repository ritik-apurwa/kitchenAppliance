import {} from "react-icons";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#F0F0F0] py-10 text-black prose-lg">
      <h3 className="text-center  font-extrabold">
        Get A Quality Service At Your Doorstep Within 60 Min.
      </h3>

      <div className="text-center space-y-4">
        <div className="space-y-4 flex justify-center flex-col w-full items-center">
          <div className="grid grid-cols-2 max-w-80 text-sm gap-x-2 px-4">
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-transparent text-gray-700 rounded-md shadow-md border border-gray-300 hover:bg-gray-100">
              <FaEnvelope className="text-blue-500" />
              <span>demo@mail.com</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-transparent text-gray-700 rounded-md shadow-md border border-gray-300 hover:bg-gray-100">
              <FaPhone className="text-green-500" />
              <span>+1234567890</span>
            </button>
          </div>
          <div className="flex justify-center text-sm">
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-transparent text-gray-700 rounded-md shadow-md border border-gray-300 hover:bg-gray-100">
              <FaMapMarkerAlt className="text-red-500" />
              <span>123 Demo Location, Mumbai, India</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center  py-4  items-center">
        <button className="bg-red-500 font-semibold px-5 py-1.5 text-white border-white border-2">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Contact;
