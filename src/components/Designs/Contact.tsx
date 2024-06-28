import {} from "react-icons";
import { ArrowRight, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#F0F0F0] py-10 text-black prose-lg">
      <h3 className="text-center font-extrabold">
        Get A Quality Service At Your Doorstep Within 60 Min.
      </h3>
      <div className="flex justify-center flex-col items-center">
        <div className="flex gap-x-3 items-center flex-row">
          <PhoneCall />
          <span>9898525234</span>
        </div>

        <button className="flex py-3 px-6 group-hover:mr-4 bg-red-500 text-white flex-row items-center gap-x-3">
          <span>Contact Us</span>
          <ArrowRight className="hover:mr-4 transition-all duration-300 ease-in-out" />
        </button>
      </div>
    </section>
  );
};

export default Contact;
