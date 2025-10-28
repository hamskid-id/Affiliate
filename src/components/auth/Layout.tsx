"use client";

import { FacebookIcon, GoogleIcon } from "@/src/svg";
import { AppleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { CustomImage } from "../ui/custom-image";
import AuthImage from "@/public/assets/Subtract.png";
import TrackedRevenue from "@/public/assets/Floating stats.svg";
import ActiveUsers from "@/public/assets/Red Floating stats.svg";
import UserRatings from "@/public/assets/Floating stats (2).svg";
import shakeImage from "@/public/assets/shake_svg.svg";
import { Brand } from "../shared/Brand";

interface IFooterText {
  footerText: string;
  footerLink: string;
  footerLinkTitle: string;
}

interface IAuthLayout extends Partial<IFooterText> {
  title?: string;
  description?: string;
  enableFooter?: boolean;
  children?: React.ReactNode;
}

const OrSeparator = () => (
  <div className="flex items-center w-full">
    <div className="flex-grow h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
    <span className="mx-4 text-sm font-medium text-gray-500">OR</span>
    <div className="flex-grow h-px bg-gradient-to-l from-gray-300 to-transparent"></div>
  </div>
);

const FooterText: React.FC<IFooterText> = ({
  footerText,
  footerLink,
  footerLinkTitle,
}) => (
  <div className="text-center sm:text-md text-[13px] text-gray-600">
    {footerText}
    <Link
      href={footerLink}
      className="ms-2 font-medium sm:text-md text-[13px] text-[#4169E1] hover:text-primary-500 hover:underline transition-colors"
    >
      {footerLinkTitle}
    </Link>
  </div>
);

const AuthLayout: React.FC<IAuthLayout> = ({
  title,
  description,
  enableFooter = true,
  children,
  footerText,
  footerLink,
  footerLinkTitle,
}) => {
  return (
    <div className="relative flex h-screen w-full overflow-y-auto custom-scroll">
      {/* LEFT SECTION (Form area - Takes remaining space after right section) */}
      <div className="flex flex-col w-full lg:w-[calc(100%-735px)]">
        <div className="h-full">
          <div className="px-4 py-6 md:px-6 md:py-6 min-h-full flex flex-col">
            {/* Brand at the top-left */}
            <div className="mb-8 sm:mb-4">
              <Brand style="h-[30px] w-[60px]" />
            </div>

            {/* Main content - centered vertically with proper spacing */}
            <div className="flex-1 flex items-center justify-center py-0">
              <div className="w-full max-w-[512px] sm:px-6 px-0">
                {title && (
                  <h1 className="mb-2 text-[25px] text-center md:text-[30px] font-[700]">
                    {title}
                  </h1>
                )}
                {description && (
                  <p className="text-sm text-center md:text-[15px] font-[400] text-[#606060]">
                    {description}
                  </p>
                )}

                <div>
                  {children}

                  {enableFooter &&
                    footerText &&
                    footerLink &&
                    footerLinkTitle && (
                      <div className="mt-6 space-y-4">
                        <OrSeparator />

                        {/* Social Login */}
                        <div className="grid grid-cols-3 gap-4">
                          <button className="bg-white border rounded-[99px] flex justify-center items-center sm:h-[48px] h-[40px] hover:bg-gray-100 transition">
                            <GoogleIcon />
                          </button>
                          <button className="bg-[#1877F2] rounded-[99px] flex justify-center items-center sm:h-[48px] h-[40px] hover:bg-[#1565D8] transition">
                            <FacebookIcon />
                          </button>
                          <button className="bg-black rounded-[99px] flex justify-center items-center sm:h-[48px] h-[40px] hover:bg-gray-800 transition">
                            <AppleIcon fill="white" color="white" />
                          </button>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-center pb-4">
                          <FooterText
                            footerText={footerText}
                            footerLink={footerLink}
                            footerLinkTitle={footerLinkTitle}
                          />
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION (Decorative images - Fixed with top and bottom space) */}
      <div className="fixed hidden lg:block right-0 top-0 w-[735px] h-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center py-0">
          <div className="relative w-[calc(100%-4rem)] h-[calc(100%-4rem)] max-h-full">
            <CustomImage
              src={AuthImage}
              style="w-full h-full rounded-[45px]"
              imgStyle="rounded-[45px]"
            />

            {/* Floating overlay images with animations - adjusted positions for the new spacing */}
            <motion.span
              className="absolute bottom-8 left-8"
              initial={{ opacity: 0, x: -100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <CustomImage src={ActiveUsers} style="w-[200px] h-[102px]" />
            </motion.span>

            <motion.span
              className="backdrop-blur-sm absolute bottom-24 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <CustomImage src={TrackedRevenue} style="w-[262px] h-[110px]" />
            </motion.span>

            <motion.span
              className="absolute bottom-8 right-8"
              initial={{ opacity: 0, x: 100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <CustomImage src={UserRatings} style="w-[200px] h-[102px]" />
            </motion.span>

            <motion.span
              className="absolute top-[-0.7rem] right-7 p-3 rounded-full bg-[#4169E1]"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
                type: "spring",
                stiffness: 200,
              }}
            >
              <CustomImage src={shakeImage} style="w-[30px] h-[30px]" />
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
