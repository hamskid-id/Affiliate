"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Menu, X } from "lucide-react";
import { NavItem } from "@/src/types/navigation";
import { cn } from "@/src/lib/utils";

interface MobileNavProps {
  items: readonly NavItem[];
}

export const MobileNav = ({ items }: MobileNavProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (url: string) => pathname === url;

  return (
    <div className="block md:hidden">
      {/* Floating Hamburger Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        initial={false}
        animate={{ rotate: open ? 90 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Pop-out Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-[7rem] right-6 z-40 flex flex-col items-end gap-3"
          >
            {items.map((item, index) => {
              const active = isActive(item.url);

              return (
                <motion.div
                  key={item.url}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 30 }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <Link href={item.url}>
                    <motion.div
                      layout
                      initial={{ width: "3rem" }}
                      whileHover={{ width: "auto" }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 20,
                      }}
                      className={cn(
                        "group flex items-center rounded-full shadow-md transition-colors bg-black text-white cursor-pointer",
                        "hover:bg-neutral-800",
                        active && "bg-[#FF5212]",
                      )}
                    >
                      {/* Icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                        <item.icon className="h-4 w-4 !text-white" />
                      </div>

                      {/* Sliding Label */}
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pr-4 text-[13px] font-medium text-white whitespace-nowrap"
                      >
                        {item.title}
                      </motion.span>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
