"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/src/lib/utils";
import useWindowHeight from "@/src/hooks/use-windo-height";
import { Brand } from "../shared/Brand";
import BASESVG from "../shared/Logo";
import CustomButton from "../ui/custom-button";
import { navLinks } from "@/src/contants/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const { scrollY } = useWindowHeight();
  const [hideNav, setHideNav] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();

  const goToAuthPage = () => router.push("/auth/sign-in");

  useEffect(() => {
    let prevScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHideNav(currentScroll > prevScroll && currentScroll > 200);
      prevScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navLinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => link.href.slice(1));

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(`#${sectionId}`);
            return;
          }
        }
      }

      setActiveSection("");
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const target = document.getElementById(href.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-8 sm:top-12 w-full z-[99] transition-transform duration-700",
        hideNav ? "-translate-y-[400px]" : "translate-y-0",
        {
          "!top-4": scrollY > 99 || pathname !== "/",
        },
      )}
    >
      <div className="max-w-[1440px] mx-auto px-[3%] 2xl:px-[5%]">
        <div
          className={cn(
            "flex h-[60px] min-[450px]:h-[69px] items-center justify-between rounded-[52px] p-3 shadow-[0_4px_15px_0px_rgba(11,36,4,0.05)] backdrop-blur-lg transition-all duration-300",
            pathname === "/"
              ? "bg-white/80 text-black"
              : "bg-black/40 text-gray-300 backdrop-blur-sm",
          )}
        >
          {/* Logo */}
          <div className="flex items-center gap-1">
            <BASESVG />
            <Brand />
          </div>

          <div className="hidden lg:flex items-center gap-x-8 xl:gap-x-10">
            {navLinks.map((link) => {
              const isActive =
                (link.href === "/" && pathname === "/") ||
                activeSection === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className={cn(
                    "relative text-base font-medium transition-colors duration-200",
                    isActive
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Action button */}
          <div className="flex gap-x-2 md:gap-x-3 lg:gap-x-4">
            <CustomButton
              onClick={() => goToAuthPage()}
              className="bg-[#4169E1] !sm:h-[49px] !h-[45px] px-6 sm:w-[130px] w-[120px]"
            >
              Login
            </CustomButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
