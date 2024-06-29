import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { combo } from "../../public";

const ImageDynamicBorder = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      borderBottomLeftRadius: ["50%", "60%", "50%"],
      borderTopLeftRadius: ["50%", "60%", "40%"],
      borderTopRightRadius: ["70%", "50%", "90%"],
      borderBottomRightRadius: ["40%", "50%", "70%"],
      transition: {
        duration: 3, // Duration for one half of the cycle
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <section className="h-full  lg:p-10 w-full flex items-center justify-center ">
      <div className="relative flex px-1 justify-start items-start w-full">
        <motion.div
          className="border-8 rounded-full border-indigo-600 overflow-hidden size-auto"
          animate={controls}
        >
          <div className=" h-auto  rounded-full w-full flex justify-center items-center">
            <img
              src={combo}
              height={500}
              className="h-auto w-full bg-cover object-cover object-center"
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
