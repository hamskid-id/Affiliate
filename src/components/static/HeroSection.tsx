"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import CustomButton from "../ui/custom-button";
import { CustomImage } from "../ui/custom-image";
import GetStartedBtn from "../../../public/assets/GetStartedBtn.svg";
import {
  containerVariants,
  titleVariants,
  descriptionVariants,
} from "../../contants/variants";
import { useRouter } from "nextjs-toploader/app";

const HeroSection: React.FC = () => {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  const navigateToDasboard = () => router.push("/dashboard");

  return (
    <section className="relative">
      <div className="pb-2 sm:pb-4 pt-4 sm:pt-6 2xl:mt-20 mt-6 md:max-[2000px]:min-h-[70vh] max-[2000px]:min-h-[40vh] relative z-20 min-[2000px]:mb-[25rem] px-4">
        <div className="w-full items-center flex flex-col justify-center">
          <motion.div
            ref={heroRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full sm:h-[70%] flex flex-col sm:mt-34 mt-30 justify-center"
          >
            <div
              ref={titleRef}
              className="text-center w-full flex flex-col justify-center items-center"
            >
              <motion.h1
                custom={0.2}
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="sm:text-[34px] text-[24px] md:text-[48px] font-[700] sm:leading-[60px] leading-[35px] text-[#4A4A4A] z-20"
              >
                Launch and Manage Your Affiliate
              </motion.h1>

              <motion.h1
                custom={0.4}
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="sm:text-[34px] text-[24px] md:text-[48px] font-[700] sm:leading-[50px] leading-[35px] text-[#4A4A4A]"
              >
                Program in Minutes Join
              </motion.h1>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={descRef}
          variants={descriptionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full grid place-items-center overflow-hidden mt-5"
        >
          <p className="text-center sm:leading-[30px] leading-[28px] text-[14px] sm:text-[22px] font-[400] w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[831px] text-[#333333]">
            A simple, reliable platform for businesses to create affiliate or
            referral programs, track conversions, and pay affiliates — all in
            one place.
          </p>
        </motion.div>

        <div className="w-fit mt-8 m-auto flex items-center gap-4 justify-center flex-wrap">
          <CustomImage
            clickFunc={() => navigateToDasboard()}
            src={GetStartedBtn}
            style="w-[300px] sm:h-[55px] h-[45px]"
          />
          <CustomButton className="w-[230px] !sm:h-[55px] !h-[48px] border-2 border-[#606060] text-[#606060] bg-white">
            See Demo
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
