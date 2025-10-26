"use client";

import React from "react";
import { motion } from "framer-motion";
import { ourToolFeatures, traditionalFeatures } from "@/src/contants/static";
import { CancelSvg, MarkSvg } from "@/src/svg";
import {
  columnsVariants,
  sectionVariants,
  WhydescriptionVariants,
  WhytitleVariants,
} from "@/src/contants/variants";

interface FeatureCardProps {
  text: string;
  variant: "negative" | "positive";
}

interface FeatureColumnProps {
  title: string;
  titleColor: string;
  features: Array<{
    text: string;
    variant: "negative" | "positive";
  }>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ text, variant }) => {
  const isNegative = variant === "negative";

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${
        isNegative
          ? "bg-[#FEF2F2] border-[#FA0000]"
          : "bg-[#F0FDF4] border-[#4CAF50]"
      }`}
    >
      {isNegative ? <CancelSvg /> : <MarkSvg />}
      <span className="sm:text-[15px] text-[14px] font-normal text-[#374151]">
        {text}
      </span>
    </div>
  );
};

const FeatureColumn: React.FC<FeatureColumnProps> = ({
  title,
  titleColor,
  features,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[16px] font-semibold" style={{ color: titleColor }}>
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            text={feature.text}
            variant={feature.variant}
          />
        ))}
      </div>
    </div>
  );
};

const WhyWeBuiltSection: React.FC = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-18 bg-white"
    >
      <div>
        {/* Title */}
        <motion.div
          variants={WhytitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-bold text-[#1F2937]">
            Why We Built This
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={WhydescriptionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-[14px] sm:text-[16px] leading-relaxed text-[#374151] max-w-[900px] mx-auto mb-12 sm:mb-16"
        >
          Most affiliate tools are too expensive or overly complex. SMEs need a
          fast, affordable way to launch programs, track conversions, and manage
          payouts without hiring a developer or waiting weeks for setup.
        </motion.p>

        <motion.div
          variants={columnsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          <FeatureColumn
            title="Traditional Tools = Frustration"
            titleColor="#DC2626"
            features={traditionalFeatures}
          />
          <FeatureColumn
            title="Our Tool = Simplicity"
            titleColor="#16A34A"
            features={ourToolFeatures}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyWeBuiltSection;
