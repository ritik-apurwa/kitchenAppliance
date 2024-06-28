import Product from "./Product";

const Services = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-row w-full ">
        <div className="bg-indigo-500 h-2 w-10" />
        <div className="flex-grow">
          <h1>Our Services</h1>
        </div>
        <div className="bg-indigo-500 h-2 w-10" />
      </div>
      <h2>Provides Services Mumbai </h2>
      </div>

      <div>
        <Product />
      </div>
    </section>
  );
};

export default Services;
