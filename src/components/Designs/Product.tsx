import React from "react";
import { ProductDetails, ProductDetailsInterface } from "../../public";
import BendoStyle from "./BendoGrid";
import AnimatedSection from "./AnimatedSection";

const ProductCard: React.FC<ProductDetailsInterface> = ({ name, details, pimage }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadows bg-white flex flex-col h-full">
      <div id="image_div" className="flex-1 flex items-center justify-center p-4">
        <img
          className="w-full h-auto object-contain"
          src={pimage}
          alt={name}
        />
      </div>
      <div id="content_div" className="flex-1  flex flex-col justify-center px-6 py-4">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <p className="text-gray-700 text-sm">{details} lorem40</p>
      </div>
      <div id="button_div" className="px-6 py-4">
        <button className="w-full bg-indigo-500 py-3 text-white font-bold">
          Learn More
        </button>
      </div>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  return (
    <div className=" w-full max-w-7xl mx-auto">
      <div className="py-10">
        <BendoStyle title="Our Products" para="We have variaty of Products " />
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3  gap-4 px-4">
        {ProductDetails.map((product) => (
        <AnimatedSection key={product.id.toString()} id={product.id.toString()} >
            <ProductCard key={product.id} {...product} />
        </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
