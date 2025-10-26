"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage from "../../../public/assets/Dashboard.svg";
import HeroImage2 from "../../../public/assets/Affiliates.svg";
import { CaseSvg, RedTickSvg, UserSolidSvg } from "@/src/svg";
import {
  whoItsForAffiliateCardVariants,
  whoItsForMerchantCardVariants,
  whoItsForSectionVariants,
} from "@/src/contants/variants";

const WhoItsForSection = () => {
  return (
    <section
      id="who-its-for"
      className="relative w-full bg-[#FF5212] py-16 px-4 md:px-18"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative">
        <motion.div
          variants={whoItsForSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-white sm:text-[36px] text-[24px] font-[600] mb-3">
            {` Who It's For`}
          </h2>
          <p className="text-white sm:text-[24px] text-[18px] font-[400]">
            Built for Businesses and Affiliates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            variants={whoItsForMerchantCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-[20px] px-6 pt-6 md:pt-8 flex flex-col justify-between md:px-[32px]"
          >
            <CaseSvg />

            <h3 className="text-[20px] sm:text-[24px] font-[600] mb-2">
              Merchants
            </h3>

            <p className="text-base sm:text-[18px] font-[400] text-[#333333] mb-6">
              Create affiliate campaigns, define commissions, and manage payouts
              easily
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <RedTickSvg />
                <span className="text-[#333333] text-[14px] sm:text-[16px] font-[500]">
                  Campaign management dashboard
                </span>
              </li>
              <li className="flex items-start gap-3">
                <RedTickSvg />
                <span className="text-[#333333] text-[14px] sm:text-[16px] font-[500]">
                  Real-time conversion tracking
                </span>
              </li>
              <li className="flex items-start gap-3">
                <RedTickSvg />
                <span className="text-[#333333] text-[14px] sm:text-[16px] font-[500]">
                  Automated commission calculations
                </span>
              </li>
            </ul>

            <div className="relative w-full sm:h-44 h-20 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={HeroImage}
                alt="Merchant Dashboard"
                fill
                className="sm:object-cover contain"
                loading="eager"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            variants={whoItsForAffiliateCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-[20px] px-6 pt-6 md:pt-8 flex flex-col gap-2 justify-between"
          >
            <UserSolidSvg />

            <h3 className="text-[24px] font-[600]">Affiliates</h3>

            <p className="text-base sm:text-[18px] font-[400] text-[#333333] mb-3">
              Get custom links, monitor conversions, and track your earnings
              transparently
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <RedTickSvg />
                <span className="text-[#333333] text-[14px] sm:text-[16px] font-[500]">
                  Personal affiliate dashboard
                </span>
              </li>
              <li className="flex items-start gap-3">
                <RedTickSvg />
                <span className="text-[#333333] text-[14px] sm:text-[16px] font-[500]">
                  Transparent earning analytics
                </span>
              </li>
              <li className="flex items-start gap-3">
                <RedTickSvg />
                <span className="text-[#333333] text-[14px] sm:text-[16px] font-[500]">
                  Easy payout requests
                </span>
              </li>
            </ul>
            <div className="relative w-full sm:h-44 h-20 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={HeroImage2}
                alt="Affiliate Dashboard"
                fill
                className="sm:object-cover object-contain"
                loading="eager"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
