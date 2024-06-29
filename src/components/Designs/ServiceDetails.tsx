// ServiceDetail.tsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Services } from "../../public";
// Custom MotionDiv component for animations
import { FiArrowLeft } from "react-icons/fi"; // Example: using Feather Icons
import MotionDiv from "./MotionDiv";

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = Services.find((s) => s.id.toString() === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <MotionDiv initial="hidden" animate="visible" variants={variants}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center mb-4">
          <Link
            to="/"
            className="border-2  px-3 flex flex-row items-center"
          >
            <FiArrowLeft className="mr-2" />
            Back
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <ul className="list-disc list-inside">
              {service.servicePoints.map((point, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

// Animation variants for Framer Motion
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default ServiceDetail;
