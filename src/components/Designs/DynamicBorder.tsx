import { motion } from "framer-motion";
import React from "react";

interface DynamicBorderDivProps {
  progress: number;
  circleRadius: number;
  strokeWidth: number;
  circleColor: string;
  progressColor: string;
  showText?: boolean;
  content?: React.ReactNode;
  contentBg?: string;
  active?: boolean;
  padding?: number;
}

export default function DynamicBorderDiv({
  progress,
  circleColor,
  strokeWidth,
  circleRadius,
  progressColor,
  content,
  contentBg,
  active,
  padding = 10, // default padding value
}: DynamicBorderDivProps) {
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section className="flex justify-center items-center" style={{ padding }}>
      <div
        className={`${active ? "relative" : "w-full relative text-wrap"}`}
        style={{ paddingBottom: "100%" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="transform rotate-[-90deg] w-full h-full"
            viewBox={`0 0 ${circleRadius * 2 + strokeWidth} ${
              circleRadius * 2 + strokeWidth
            }`}
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              className={`${circleColor}`}
              strokeWidth={strokeWidth}
              stroke="currentColor"
              fill="transparent"
              r={circleRadius}
              cx="50%"
              cy="50%"
            />
            <motion.circle
              className={`${progressColor}`}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={circleRadius}
              cx="50%"
              cy="50%"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.5 }}
            />
          </svg>
          <div
            className={`absolute   border-red-300 rounded-full size-[90%] flex justify-center items-center ${contentBg}`}
          >
           <div className="size-[90%] flex items-center justify-center">
           {content}
           </div>
          </div>
        </div>
      </div>
    </section>
  );
}
