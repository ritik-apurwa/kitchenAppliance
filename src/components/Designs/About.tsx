const About = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row items-center justify-center gap-y-8">
        <div className="h-2 bg-indigo-600 w-full max-w-20 mx-auto"></div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 dark:text-gray-100">
          About Us
        </h1>
        <div className="h-2 bg-indigo-600 w-full max-w-20 mx-auto"></div>
      </div>
      <div className="prose-lg">
        <h3 className="text-center font-bold">25 years exeperience</h3>
      </div>

      <div className="mt-8 prose prose-lg text-gray-700 dark:text-gray-300">
        <p>
          Service Centre Mumbai is an award-winning service provider for
          commercial and residential appliances. We provide repair services for
          out-of-warranty products such as refrigerators, microwaves, air
          conditioners, and washing machines in Mumbai.
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

export default About;
