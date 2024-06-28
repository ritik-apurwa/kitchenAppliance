import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

const sm =
  "https://media.gettyimages.com/id/513419717/photo/home-appliance.jpg?s=612x612&w=gi&k=20&c=anHa8mtUq4NljpZvCilJe-E5w8jO9ViUYiZyXc1fZPQ=";

const ImageDynamicBorder = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      borderBottomLeftRadius: ["150px", "200px", "150px"],
      borderTopLeftRadius: ["90px", "250px", "90px"],
      borderTopRightRadius: ["150px", "160px", "140px"],
      borderBottomRightRadius: ["130px", "150px", "90px"],
      transition: {
        duration: 3, // Duration for one half of the cycle
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <section className="size-full flex justify-center items-center">
      <div className="relative flex px-1 justify-start items-start w-full">
        <motion.div
          className="border-2 border-indigo-600 overflow-hidden h-auto w-full"
          animate={controls}
        >
          <img src={sm} height={500} className="size-full" width={500} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default ImageDynamicBorder;
