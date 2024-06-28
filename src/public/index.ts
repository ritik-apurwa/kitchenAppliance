import lg from "./companyIcons/lg.png";
import samsung from "./companyIcons/samsung.png";
import bosch from "./companyIcons/bosch.png";
import ifb from "./companyIcons/ifb.png";
import panasonic from "./companyIcons/panasonic.png";
import sharp from "./companyIcons/simen.png";
import toshiba from "./companyIcons/toshiba.png";
import siemens from "./companyIcons/simen.png";
import hitachi from "./companyIcons/hitachi.png";
import godrej from "./companyIcons/godrej.png";









import rfg from "./producs/Regrigerator2.jpg";
import wm from "./producs/washingMachine.jpg";
import mw from "./producs/MicroWave.jpg";
import dw from "./producs/Dishwasher.jpg";
import dryer from "./producs/Dryer.jpg";
import rfgicon from "./productIcon/refrigeratorIcon.png";
import wmicon from "./productIcon/washingmachineicon.png";
import mwicon from "./productIcon/MicroWave.png";
import dwicon from "./productIcon/DishWasher.png";
import dryericon from "./productIcon/Dryer.png";
import bannerimg from "./productIcon/style.jpg";

export { rfg, wm, mw, dryer, dw, bannerimg };

export interface ProductDetailsInterface {
  id: number;
  name: string;
  details: string;
  pimage: string;
  picon: string;
}

export const ProductDetails: ProductDetailsInterface[] = [
  {
    id: 1,
    name: "Refrigerator",
    pimage: rfg,
    picon: rfgicon,
    details: "Expert refrigerator repairs with genuine parts. Our skilled technicians ensure your fridge runs efficiently, maintaining optimal temperatures for food preservation.",
  },
  {
    id: 2,
    name: "Microwave",
    pimage: mw,
    picon: mwicon,
    details: "Specialized microwave oven repairs for all models. Quick diagnostics and precise fixes to restore your appliance's heating and cooking capabilities.",
  },
  {
    id: 3,
    name: "Dishwasher",
    pimage: dw,
    picon: dwicon,
    details: "Comprehensive dishwasher services in Mumbai. From leak repairs to improving cleaning performance, we ensure your dishwasher operates at peak efficiency.",
  },
  {
    id: 4,
    name: "Dryer",
    pimage: dryer,
    picon: dryericon,
    details: "Expert clothes dryer repairs and maintenance. We address heating issues, strange noises, and performance problems to keep your dryer running smoothly.",
  },
  {
    id: 5,
    name: "Washing Machine",
    pimage: wm,
    picon: wmicon,
    details: "Professional washing machine repairs for all brands. Our services cover everything from motor issues to cycle malfunctions, ensuring clean laundry every time.",
  },
];

// Define the interface
interface CompanyIcon {
  id: number;
  name: string;
  icon: string; // The type might be different based on how you're handling images (e.g., string, any, etc.)
}

// Create the array
export const companyIcons: CompanyIcon[] = [
  { id: 1, name: "LG", icon: lg },
  { id: 2, name: "Samsung", icon: samsung },
  { id: 3, name: "Bosch", icon: bosch },
  { id: 4, name: "IFB", icon: ifb },
  { id: 5, name: "Panasonic", icon: panasonic },
  { id: 6, name: "Sharp", icon: sharp },
  { id: 7, name: "Toshiba", icon: toshiba },
  { id: 8, name: "Siemens", icon: siemens },
  { id: 9, name: "Hitachi", icon: hitachi },
  { id: 10, name: "Godrej", icon: godrej },
];
