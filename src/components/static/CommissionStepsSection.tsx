"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Curvesvg from "@/public/assets/curveSvg.svg";
import { CustomImage } from "../ui/custom-image";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AffiliateStepsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative w-full overflow-hidden  px-0 sm:px-8 md:px-18"
    >
      <div className="bg-gradient-to-br from-[#FF5212] to-[#FF6B35] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-18 sm:rounded-[30px] rounded-none">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="md:text-[34px] sm:text-[30px] text-[20px] font-[700] text-white mb-6 leading-tight"
            variants={textVariants}
          >
            From Click to Commission in 3<br />
            Simple Steps
          </motion.h2>
          <motion.p
            className="text-white sm:text-[20px] text-[14px] font-[500] opacity-90 max-w-xl"
            variants={textVariants}
          >
            Watch every click turn into a conversion and every conversion into a
            payout.
          </motion.p>
        </motion.div>
        <CustomImage
          src={Curvesvg}
          style="w-full h-[200px] sm:h-[300px] lg:h-[413px] mt-0 md:mt-[-7rem]"
        />
      </div>
    </section>
  );
};

export default AffiliateStepsSection;
