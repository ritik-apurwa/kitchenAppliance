import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import DynamicBorderDiv from "./DynamicBorder";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function IconBorderProgress() {
  const { scrollY } = useScroll();
  const [, setScrollValue] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (latest / docHeight) * 100;
    setScrollPercentage(scrollPercent);
  });
  return (
    <Link to="https://wa.me/+916376358708" className="  relative ">
      <DynamicBorderDiv
        progress={scrollPercentage}
        circleRadius={45}
        strokeWidth={6}
        padding={2} // Add padding here
        contentBg=" bg-green-500"
        circleColor="text-gray-200"
        progressColor="text-red-500"
        content={<FaWhatsapp className="text-gray-600" size={30} />}
      />
    </Link>
  );
}
