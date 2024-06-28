import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { ProductDetails } from "../../public";
import { MailIcon } from "lucide-react";

const GetInTouch: React.FC = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d49359.217944015516!2d75.05920396415601!3d27.354539532233094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scharanwas%20huddel!5e0!3m2!1sen!2sin!4v1719570377043!5m2!1sen!2sin";

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 space-y-12">
        <p className="text-center text-lg text-gray-700">
          Home appliance service center Mumbai is an independent repair service
          center and we are not associated with any brand. We disclaim any
          affiliation, endorsement, and/or sponsorship of or by any such third
          party/vendor.
        </p>
        <div className="flex flex-row justify-center items-center h-14 gap-x-2">
          <div className="flex justify-center items-center w-12">
            <MailIcon className="text-gray-700" />
          </div>
          <div className="h-14 w-full items-center justify-start flex flex-grow">
            <input
              type="text"
              placeholder="Your email address here"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <div className="space-y-4">
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-transparent text-gray-700 rounded-md shadow-md border border-gray-300 hover:bg-gray-100">
              <FaEnvelope className="text-blue-500" />
              <span>demo@mail.com</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-transparent text-gray-700 rounded-md shadow-md border border-gray-300 hover:bg-gray-100">
              <FaPhone className="text-green-500" />
              <span>+1234567890</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-transparent text-gray-700 rounded-md shadow-md border border-gray-300 hover:bg-gray-100">
              <FaMapMarkerAlt className="text-red-500" />
              <span>123 Demo Location, Mumbai, India</span>
            </button>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Services</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ProductDetails.map((item) => (
              <li key={item.id} className="text-center">
                <div className="bg-white p-4 rounded-md shadow-md">
                  <img
                    src={item.picon}
                    alt={item.name}
                    className="w-20 h-20 mx-auto object-contain mb-2"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            View Us On Maps
          </h1>
          <div className="overflow-hidden rounded-md shadow-md">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
