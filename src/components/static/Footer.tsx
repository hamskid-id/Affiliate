"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/src/contants/static";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import BASESVG from "../shared/Logo";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  interface SocialIconProps {
    icon: string;
    className?: string;
  }

  const SocialIcon: React.FC<SocialIconProps> = ({ icon, className }) => {
    switch (icon) {
      case "linkedin":
        return <FiLinkedin className={className} />;
      case "twitter":
        return <FiTwitter className={className} />;
      case "facebook":
        return <FiFacebook className={className} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#1A1D29] text-white py-12 px-4 md:px-12 lg:px-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="flex items-center gap-2 mb-4">
            <BASESVG />
            <span className="text-white text-[24px] sm:text-[28px] font-[600]">
              LOGO
            </span>
          </div>

          <p className="text-[#A3A3A3] text-[16px] sm:text-[20px] font-[400] leading-relaxed mb-6 max-w-[280px]">
            The simple, reliable platform for affiliate program management.
          </p>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A3A3A3] hover:text-white transition-colors"
                aria-label={social.name}
              >
                <SocialIcon icon={social.icon} className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-white text-[16px] font-semibold mb-4">Product</h3>
          <ul className="space-y-3">
            {FOOTER_LINKS.product.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[#A3A3A3] text-[14px] sm:text-[16px] font-[400] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-white text-[16px] font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            {FOOTER_LINKS.company.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[#A3A3A3] text-[14px] sm:text-[16px] font-[400] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="border-t border-[#2D3142] mb-8"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <p className="text-[#A3A3A3] text-[14px]">
          © {currentYear} All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
