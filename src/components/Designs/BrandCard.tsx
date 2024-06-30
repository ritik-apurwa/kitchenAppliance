import { FaCheck } from "react-icons/fa";
import { Brand, ProductDetails, combo } from "../../public";
import { useState } from "react";

interface CustomInputProps {
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-colors duration-300"
    />
  );
};

const BrandCard = ({
  brandBgImage,
  brandName,
  brandServiceDetails,
  brandServicePara,
  brandServices,
  id,
}: Brand) => {
  const [selectedProduct, setSelectedProduct] = useState(brandServices[0].name); // Initialize with the first product

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <section key={id} className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
      {/* Main section with background image and overlay */}
      <div
        className="relative min-h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${combo})` }}
      >
        <div className="absolute inset-0  bg-black opacity-50"></div>
        <div className="relative  h-[50vh]  flex flex-col justify-center items-center  text-white">
          <img
            src={brandBgImage}
            height={600}
            width={600}
            loading="lazy"
            alt={`${brandName} logo`}
            className="h-auto w-60 mb-4"
          />
          <h2 className="text-3xl font-bold">{brandName} Service Center</h2>
        </div>
      </div>

      {/* Button to book an appointment */}
      <div className="mt-8 text-center">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600">
          Book {selectedProduct} Products
        </button>
      </div>

      {/* Appointment form */}
      <div className="mt-8">
        <span className="text-lg text-blue-500">Book Appointment</span>
        <form className=" gap-4 grid md:grid-cols-2 items-center py-10">
          <CustomInput placeholder="Name" />
          <CustomInput placeholder="Phone Number" />
          <CustomInput placeholder="City" />
          <CustomInput placeholder="Zip Code" />
          <CustomInput placeholder="Address" />

          <select
            value={selectedProduct}
            onChange={handleProductChange}
            className="w-full px-4 py-2 border rounded-lg"
          >
            {brandServices.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </form>
      </div>

      {/* Button with selected products */}
      <div className="mt-8 text-center">
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600">
          {selectedProduct}  Book Now
        </button>
      </div>

      {/* Brand services paragraph */}
      <div className="mt-8">
        <p className="text-base items-center text-center max-w-xl mx-auto">{brandServicePara}</p>
      </div>

      {/* List of services with check icon */}
      <div className="mt-8 max-w-xl mx-auto w-full flex justify-center items-center">
        <ul className="space-y-2">
          {Object.entries(brandServiceDetails).map(([service, detail]) => (
            <li key={service} className="flex items-center space-x-2">
              <FaCheck className="text-green-500" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Services and support section */}
      <div className="mt-8">
        <h1 className="text-2xl font-bold">Our Service and Support</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {ProductDetails.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-md shadow py-4 lg:py-8 flex justify-center flex-col items-center"
            >
              <img
                src={service.picon}
                alt={service.name}
                loading="lazy"
                className="w-32 h-32 object-cover mb-2"
              />
              <span className="font-bold text-lg">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCard;
