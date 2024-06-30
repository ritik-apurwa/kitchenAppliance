import { FaCogs, FaUsers, FaAward, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import BendoStyle from "./BendoGrid";
import { IconType } from "react-icons";

import React from "react";

interface Achievments {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}
const Achievments: Achievments[] = [
  {
    id: 1,
    title: "Award-Winning Service",
    icon: FaAward,
    description:
      "Recognized for our excellence in service quality and customer satisfaction.",
  },
  {
    id: 2,
    title: "Expert Technicians",
    icon: FaCogs,
    description:
      "Our technicians are highly trained and experienced in handling various appliances.",
  },
  {
    id: 3,
    title: "Customer-Centric Approach",
    icon: FaHandshake,
    description:
      "We prioritize customer satisfaction and provide personalized services.",
  },
  {
    id: 4,
    title: "Community Engagement",
    icon: FaUsers,
    description: "Actively involved in community services and initiatives.",
  },
  {
    id: 5,
    title: "Quality Assurance",
    icon: FaAward,
    description:
      "We ensure the highest standards of quality in all our services.",
  },
];

const AchievmentsD = () => {
  return (
    <section className="grid grid-cols-1  lg:grid-cols-2 gap-10 py-10">
      {Achievments.map((item) => (
        <motion.div
          key={item.title}
          className="flex flex-col items-center space-x-4"
        >
          <div className=" border-2 rounded-full size-20 flex items-center justify-center">
            <item.icon
              size={40}
              className="hover:scale-125 transition-all duration-300 ease-in-out
            text-indigo-600"
            />
          </div>
          <div>
            <h3 className="text-xl text-center font-semibold text-gray-800 dark:text-gray-200">
              {item.title}
            </h3>
            <p className="text-gray-700 lg:w-[50ch] w-[30ch] text-center dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

const AboutPage: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <BendoStyle title="About Us" para="25 Years of Excellence" />

      <div className="mt-8 flex flex-col items-center w-full mx-auto prose prose-lg text-gray-700 dark:text-gray-300">
        <p>
          Service Centre Mumbai is an award-winning service provider for
          commercial and residential appliances. We provide repair services for
          out-of-warranty products such as refrigerators, microwaves, air
          conditioners, and washing machines in Mumbai.
        </p>
        <p>
          Our team of expert technicians is dedicated to offering prompt and
          reliable services, ensuring your appliances are up and running in no
          time. We pride ourselves on our customer-centric approach and
          exceptional service quality.
        </p>
      </div>

      <AchievmentsD />

      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Our Mission
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Our mission is to provide top-notch repair services with a focus on
          customer satisfaction and quality. We strive to be the most trusted
          service provider in the region, known for our expertise and
          reliability.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Our Vision
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          We envision a future where every household and business has access to
          reliable and affordable appliance repair services, enhancing the
          quality of life for our customers.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutPage;
