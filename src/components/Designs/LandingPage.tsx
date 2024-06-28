import ImageDynamicBorder from "./ImageDynamicBorder";
import About from "./About";

const LandingPage = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto grid grid-rows-2 lg:grid-cols-2 items-center">
      <ImageDynamicBorder />
      <About />
    </div>
  );
};

export default LandingPage;
