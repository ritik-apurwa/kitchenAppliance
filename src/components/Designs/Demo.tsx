import React from "react";

const DemoData = [
  {
    id: 1,
    name: "Demo Product 1",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    name: "Demo Product 2",
    details: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 3,
    name: "Demo Product 3",
    details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 4,
    name: "Demo Product 4",
    details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 5,
    name: "Demo Product 5",
    details: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 6,
    name: "Demo Product 6",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/400x300",
  },
];

const ProductCard: React.FC<{ product: typeof DemoData[0] }> = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.details}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
};

const DemoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {DemoData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default DemoGrid;
