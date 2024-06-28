import React from "react";
import { ProductDetails, ProductDetailsInterface } from "../../public";

const ProductCard: React.FC<ProductDetailsInterface> = ({
  name,
  details,
  pimage,
  picon,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img className="w-full h-48 object-cover" src={pimage} height={600} width={600} alt={name} />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <img className="w-8 h-8 mr-2" src={picon}  alt={`${name} icon`} />
          <div className="font-bold text-xl">{name}</div>
        </div>
        <p className="text-gray-700 text-base">{details}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {ProductDetails.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
