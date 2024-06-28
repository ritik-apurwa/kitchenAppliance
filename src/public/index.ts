import lg from "./companyIcons/lg.png";
import samsung from "./companyIcons/lg.png";
import bosch from "./companyIcons/lg.png";
import ifb from "./companyIcons/lg.png";
import panasonic from "./companyIcons/lg.png";
import sharp from "./companyIcons/lg.png";
import toshiba from "./companyIcons/lg.png";
import siemens from "./companyIcons/lg.png";
import hitachi from "./companyIcons/lg.png";
import godrej from "./companyIcons/lg.png";
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
import bannerimg from "./productIcon/style.jpg"

export { rfg, wm, mw, dryer, dw, bannerimg };

export const ProductDetails = [
  {
    id: 1,
    icon: rfgicon,
    details:
      "Served genuine and depandable washing machine repair. our team is behind our jobs, and we always put customer service first.",
    name: "",
  },
  {
    id: 1,
    icon: mwicon,
    details: "",
    name: "We are one of the leading microwave oven service centers in your region, making sure that all of the microwave oven model appliances are fixed.",
  },
  { id: 1, icon: wmicon, details: "", name: "" },
  {
    id: 1,
    icon: dwicon,
    details: "",
    name: "Efficient dishwasher service in mumbai. our dedicated center offers expert repairs, timely maintenance, and reliable solutions to keep your appliance running smoothly. customer satisfaction is our priority!",
  },
  {
    id: 1,
    icon: dryericon,
    details: "",
    name: "Revitalize your clothes dryer with our mumbai service center. expert repairs, quick maintenance, and customer satisfaction guaranteed. your appliance, our priority!.",
  },
];

// Define the interface
interface CompanyIcon {
  id: number;
  name: string;
  icon: string ; // The type might be different based on how you're handling images (e.g., string, any, etc.)
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
