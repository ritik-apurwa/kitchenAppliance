import React from "react";
import { ProductDetails } from "../../public";
import { MailIcon } from "lucide-react";
import BendoStyle from "./BendoGrid";

const GetInTouch: React.FC = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d49359.217944015516!2d75.05920396415601!3d27.354539532233094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scharanwas%20huddel!5e0!3m2!1sen!2sin!4v1719570377043!5m2!1sen!2sin";

  return (
    <section className="py-16  w-screen mx-auto bg-gray-50">
      <div className=" mx-auto max-w-5xl px-4 space-y-12">
        <BendoStyle title="Get In Touch" para="Stay Connected" />
        <p className="text-center text-lg  lg:px-20 text-gray-700">
          Home appliance service center Mumbai is an independent repair service
          center and we are not associated with any brand. We disclaim any
          affiliation, endorsement, and/or sponsorship of or by any such third
          party/vendor.
        </p>
        <div className="flex flex-row max-w-3xl mx-auto justify-center items-center h-14 gap-x-2">
          <div className="flex justify-center items-center w-12">
            <MailIcon className="text-gray-700" />
          </div>
          <div className="h-14 w-60 items-center justify-start flex ">
            <input
              type="text"
              placeholder="Your email address here"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 my-6 ">Services</h1>
          <div className="grid grid-cols-2     md:grid-cols-3 xl:grid-cols-4 lg:py-10 gap-4">
            {ProductDetails.map((item) => (
              <div className="flex flex-row border-2  py-1 px-2 items-center gap-x-2">
                <div className="w-12 h-auto">
                  <img src={item.picon} alt="" />
                </div>
                <span className="text-xs ">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            View Us On Maps
          </h1>
          <div className="overflow-hidden rounded-md shadow-md">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
