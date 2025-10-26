"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useSidebar } from "@/src/components/ui/sidebar";

export const MobileNav = () => {
  const { openMobile, toggleSidebar } = useSidebar();

  return (
    <div className="block md:hidden">
      {/* Floating Hamburger Button */}
      <motion.button
        onClick={() => toggleSidebar()}
        initial={false}
        animate={{ rotate: openMobile ? 90 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF5212] text-white shadow-lg"
      >
        {openMobile ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
    </div>
  );
};
