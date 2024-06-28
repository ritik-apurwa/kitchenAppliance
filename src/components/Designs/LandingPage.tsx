import ImageDynamicBorder from "./ImageDynamicBorder";
import About from "./About";

const LandingPage = () => {
  return (
    <div className="grid grid-rows-2 lg:grid-cols-2 container ">
      <div className="flex items-center justify-center size-full border">
        <ImageDynamicBorder />
      </div>
      <div className="flex justify-center items-center">
        <About />
      </div>
    </div>
  );
};

export default LandingPage;
