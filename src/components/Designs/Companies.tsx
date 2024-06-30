import useEmblaCarousel from "embla-carousel-react";
import { companyIcons } from "../../public";
import Autoplay from "embla-carousel-autoplay";
import BendoStyle from "./BendoGrid";

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
        <BendoStyle
          title="Why Choose Us"
          para="We have products from from top companies"
        />

        <div className="overflow-hidden cursor-pointer" ref={emblaRef}>
          <div className="flex flex-row">
            {companyIcons.concat(companyIcons).map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex cursor-pointer flex-col pointer-events-none items-center flex-shrink-0 mx-6"
              >
                <img
                  src={item.icon}
                  loading="lazy"
                  className="w-20 h-20 cursor-pointer pointer-events-none object-contain"
                  alt={item.name}
                />
                <p className="mt-2 text-lg cursor-pointer pointer-events-none font-bold text-gray-600">
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
