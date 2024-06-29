
import About from "./About";
import ImageDynamicBorder from "./ImageDynamicBorder";


const LandingPage = () => {
  return (
    <div className="flex  flex-col max-w-7xl mx-auto lg:flex-row py-6   ">
      <div className="lg:w-7/12 ">
        <ImageDynamicBorder />
      </div>
      <div className="flex lg:w-5/12 justify-center items-center">
        <About />
      </div>
    </div>
  );
};

export default LandingPage;
