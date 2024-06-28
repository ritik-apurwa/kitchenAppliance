import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { combo } from "../../public";

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
    <section className="h-96 w-full flex items-center justify-center border-2">
      <div className="relative flex px-1 justify-start items-start w-full">
        <motion.div
          className="border-2 border-indigo-600 overflow-hidden h-auto w-full"
          animate={controls}
        >
          <div className=" h-80 lg:size-[400px] w-full flex justify-center items-center">
            <img
              src={combo}
              height={500}
              className="size-full"
              width={500}
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageDynamicBorder;
