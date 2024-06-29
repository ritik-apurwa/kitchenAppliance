import React from "react";
import { ServiceDetailsInterface, Services } from "../../public";
import BendoStyle from "./BendoGrid";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const ServiceCard: React.FC<ServiceDetailsInterface> = ({
  id,
  image,
  title,
  servicePoints,
}) => {
  return (
    <div
      key={id}
      className="max-w-sm rounded overflow-hidden shadows p-4 bg-white"
    >
      <img
        className="w-full h-auto px-4 object-cover object-center"
        src={image}
        height={1200}
        width={1200}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="flex prose-xl prose items-center mb-2">
          <h3>{title}</h3>
        </div>
        <p className="text-gray-700 text-sm ">{servicePoints.slice(1, 2)}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          to={`/service/${id}`}
          className="bg-indigo-500 py-3 text-white font-bold px-5"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

const ServiceGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="py-10">
        <BendoStyle
          title=" Our Service"
          para="Product service and repairing "
        />
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
        {Services.map((service) => (
        <AnimatedSection key={service.id.toString()} id={service.id.toString()}>
            <ServiceCard key={service.id} {...service} />
        </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
