"use client";

import { motion } from "framer-motion";
import RightImage from "../../../public/assets/key_merchant.svg";
import {
  keyFeaturesSectionVariants,
  keyFeaturesImageVariants,
  keyFeaturesItemVariants,
} from "../../contants/variants";
import { CustomImage } from "../ui/custom-image";
import {
  CampainManagement,
  CommissionRules,
  KPIDashboard,
  Payout,
} from "@/src/svg";

const features = [
  {
    icon: <KPIDashboard />,
    title: "KPI Dashboard",
    description: "Monitor clicks, conversions, and commissions in real-time.",
  },
  {
    icon: <CampainManagement />,
    title: "Campaign Management",
    description:
      "Create referral links, set up coupon codes, and manage multiple campaigns.",
  },
  {
    icon: <CommissionRules />,
    title: "Commission Rules",
    description:
      "Set flat rate or percentage-based commissions with flexible rules.",
  },
  {
    icon: <Payout />,
    title: "Payout Management",
    description: "Manual payout tracking with CSV export capabilities.",
  },
];

export default function KeyFeaturesForMerchants() {
  return (
    <section
      id="features"
      className="px-0 sm:px-4 md:px-8 lg:px-16 w-full bg-gradient-to-br from-orange-50 via-white to-orange-50/30 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          variants={keyFeaturesSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-4 sm:px-0"
        >
          <header className="mb-8">
            <h2 className="text-[#333] font-semibold text-[24px] sm:text-[30px] leading-[1.4] mb-4">
              Key Features For Merchants
            </h2>
            <p className="text-[#333] font-medium text-[14px] sm:text-[16px]">
              Powerful tools to help you manage affiliates, automate payouts,
              and track performance seamlessly.
            </p>
          </header>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={keyFeaturesItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-[#333] font-semibold text-[14px] sm:text-[16px] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[#606060] font-normal text-[13px] sm:text-[14px]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={keyFeaturesImageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-[70%] w-full h-[250px] sm:h-[460px] px-0"
        >
          <CustomImage
            src={RightImage}
            imgStyle="sm:object-contain object-cover"
            style="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
