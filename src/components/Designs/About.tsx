import BendoStyle from "./BendoGrid";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <BendoStyle title="About us" para="25 years exeperience" />

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
}
