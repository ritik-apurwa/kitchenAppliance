import useEmblaCarousel from "embla-carousel-react";
import { companyIcons } from "../../public";
import Autoplay from "embla-carousel-autoplay";

const Companies = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })] // Adjust the delay value
  );

  return (
    <section className="py-16 h-96 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col my-8 ">
          <div className="flex justify-between items-center">
            <div className="w-2/12 h-px bg-gradient-to-r from-blue-300 to-indigo-300" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Why Choose Us
            </h1>
            <div className="w-2/12 h-px bg-gradient-to-l from-blue-300 to-indigo-300" />
          </div>
          <p className="text-sn text-center text-gray-600">
            World's Leading Brands Trust Us
          </p>
        </div>

        <div className="overflow-hidden cursor-pointer" ref={emblaRef}>
          <div className="flex flex-row">
            {companyIcons.concat(companyIcons).map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex flex-col items-center flex-shrink-0 mx-6"
              >
                <img
                  src={item.icon}
                  className="w-20 h-20 object-contain"
                  alt={item.name}
                />
                <p className="mt-2 text-lg font-bold text-gray-600">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
