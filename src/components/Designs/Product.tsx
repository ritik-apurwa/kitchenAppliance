import React from "react";
import { ProductDetails, ProductDetailsInterface } from "../../public";
import BendoStyle from "./BendoGrid";

const ProductCard: React.FC<ProductDetailsInterface> = ({
  name,
  details,
  pimage,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadows p-4 bg-white">
      <img
        className="w-full h-auto px-4 object-cover object-center"
        src={pimage}
        height={1200}
        width={1200}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="flex prose-xl prose items-center mb-2">
          <h3>{name}</h3>
        </div>
        <p className="text-gray-700 text-sm ">{details}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-indigo-500 py-3 text-white font-bold px-5 ">
          Learn More
        </button>
      </div>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
      <div className="py-10">
        <BendoStyle title="Our Products" para="We have variaty of Products " />
      </div>
      {ProductDetails.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
