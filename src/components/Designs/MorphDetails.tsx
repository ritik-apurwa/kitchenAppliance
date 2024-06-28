import { bannerimg } from "../../public";

export default function MorphDetails() {
  return (
    <section className="relative  max-w-7xl mx-auto">
      <div className="home relative py-10">
        <img
          src={bannerimg}
          className="w-full h-auto object-cover"
          alt="banner"
        />

        {/* Morphing overlay for small devices */}
        <div className="absolute inset-0 bg-indigo-600 bg-opacity-70 flex flex-col justify-center items-start  p-4 sm:hidden">
          <h2 className="text-white text-2xl font-bold mb-4">Best & Latest</h2>
          <p className="text-white text-start text-sm mb-4">
            This is a sample paragraph. Replace with your desired content.
          </p>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors">
            Learn More
          </button>
        </div>

        {/* Content box for larger devices */}
        <div className="hidden sm:block absolute top-1/2 left-8 transform -translate-y-1/2  p-6 rounded-lg  max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Best & Trusted </h2>
          <p className="text-gray-700 mb-4">
          Ac, led lcd tv, washing machine, micro oven service center in mumbai
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
