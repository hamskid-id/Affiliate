"use client";

import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { CustomImage } from "../ui/custom-image";
import CustomButton from "../ui/custom-button";
import { ArrowRight } from "lucide-react";
import {
  everythingYouNeedCardItemVariants,
  everythingYouNeedCardsVariants,
  everythingYouNeedContentVariants,
  everythingYouNeedSectionVariants,
} from "@/src/contants/variants";
import { everythingYouNeedfeatures } from "@/src/contants/static";

interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-[#FF5212] transition-all duration-300">
      <div className="mb-4">
        <CustomImage src={icon} style="w-[60px] h-[60px]" />
      </div>
      <h3 className="text-[18px] font-[700] mb-2">{title}</h3>
      <p className="sm:text-[16px] text-[14px] text-[#606060] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const EverythingYouNeedSection: React.FC = () => {
  return (
    <motion.section
      variants={everythingYouNeedSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative py-16 sm:py-20 lg:py-24 px-4 md:px-18 overflow-hidden bg-linear-to-br/decreasing from-white to-[#FFAA8A]/30"
    >
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={everythingYouNeedContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="sm:text-[30px] text-[24px] font-[600] text-[#1F2937] sm:leading-tight leading-[35px] mb-6">
              Everything You Need to Run an Affiliate Program
            </h2>
            <p className="sm:text-[18px] text-[15px] leading-relaxed mb-8">
              Our platform helps you recruit affiliates, track conversions,
              calculate commissions, and manage payouts, all in one seamless
              dashboard.
            </p>
            <CustomButton
              withSideIcon
              sideIcon={<ArrowRight className="text-white w-4 h-4" />}
              className="bg-[#FF5212] !sm:h-[52px] !h-[48px] w-[200px]"
              iconPosition="right"
            >
              Try It Free
            </CustomButton>
          </motion.div>

          <motion.div
            variants={everythingYouNeedCardsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {everythingYouNeedfeatures.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={everythingYouNeedCardItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EverythingYouNeedSection;
