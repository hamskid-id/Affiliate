"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { CheckSvg, PlaneSvg } from "@/src/svg";
import React from "react";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  const titleText = "Welcome to Affiliate SaaS Platform";
  const words = titleText.split(" ");

  const wrapper = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const planeVariant = {
    hidden: { opacity: 0, y: -30, rotate: -20, scale: 0.6 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 25, filter: "blur(8px)", rotateX: 80 },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const descriptionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.4,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const featureContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 2.0,
      },
    },
  };

  const featureVariant = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <motion.div
      variants={wrapper}
      initial="hidden"
      animate="visible"
      className="bg-[linear-gradient(94.26deg,#FF5212_0%,#952800_100%)] text-white sm:px-6 px-4 py-14 min-h-[320px]"
    >
      <div className="max-w-[718px] m-auto flex flex-col justify-center items-center gap-2">
        <motion.div variants={planeVariant} initial="hidden" animate="visible">
          <PlaneSvg />
        </motion.div>

        <motion.h1
          className="sm:text-[34px] text-[24px] font-bold text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariant}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-sm sm:text-[18px] text-center font-[400] text-orange-100"
          variants={descriptionVariant}
          initial="hidden"
          animate="visible"
        >
          {`Let's set up your first affiliate program so partners can start
          promoting your business and driving results.`}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center items-center sm:gap-6 gap-2 text-xs"
          variants={featureContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="flex items-center gap-2"
            variants={featureVariant}
          >
            <CheckSvg />
            Easy 5-minute setup
          </motion.span>

          <motion.span
            className="flex items-center gap-2"
            variants={featureVariant}
          >
            <CheckSvg />
            Real-time tracking
          </motion.span>

          <motion.span
            className="flex items-center gap-2"
            variants={featureVariant}
          >
            <CheckSvg />
            Automated payouts
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};
