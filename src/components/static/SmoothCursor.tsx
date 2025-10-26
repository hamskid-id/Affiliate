"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const SmoothCursor = () => {
  const pathname = usePathname();
  const pointRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  const lerp = (start: number, end: number, amount: number) => {
    return (1 - amount) * start + amount * end;
  };

  useGSAP(() => {
    // Apply only on homepage
    if (pathname !== "/") {
      document.body.style.cursor = "auto";
      return;
    }

    if (!pointRef.current || !circleRef.current) return;
    if ("ontouchstart" in window) return; // Disable on touch devices

    // Hide default cursor
    document.body.style.cursor = "none";

    const cursorInner = pointRef.current;
    const cursorOuter = circleRef.current;

    let cursorX = 0;
    let cursorY = 0;
    let pageX = 0;
    let pageY = 0;
    const size = 9;
    const size2 = 40;
    const trailSpeed = 0.16;

    cursorInner.style.setProperty("--size", size + "px");
    cursorOuter.style.setProperty("--size", size2 + "px");

    const getMousePos = (e: MouseEvent) => {
      pageX = e.clientX;
      pageY = e.clientY;
      cursorInner.style.left = pageX - size / 2 + "px";
      cursorInner.style.top = pageY - size / 2 + "px";
    };

    const mousedown = () => {
      gsap.to(cursorInner, { scale: 10, duration: 0.2, ease: "power1.inOut" });
      gsap.to(cursorOuter, { scale: 0.1, duration: 0.2, ease: "power1.inOut" });
    };

    const mouseup = () => {
      gsap.to(cursorInner, {
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      });
      gsap.to(cursorOuter, {
        scale: 1,
        duration: 0.7,
        ease: "elastic.out(1, 0.5)",
      });
    };

    const loop = () => {
      cursorX = lerp(cursorX, pageX, trailSpeed);
      cursorY = lerp(cursorY, pageY, trailSpeed);
      cursorOuter.style.top = cursorY - size2 / 2 + "px";
      cursorOuter.style.left = cursorX - size2 / 2 + "px";
      requestAnimationFrame(loop);
    };

    loop();

    window.addEventListener("mousemove", getMousePos);
    window.addEventListener("mousedown", mousedown);
    window.addEventListener("mouseup", mouseup);

    // Cleanup
    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", getMousePos);
      window.removeEventListener("mousedown", mousedown);
      window.removeEventListener("mouseup", mouseup);
    };
  }, [pathname]); // re-run when path changes

  // Do not render on other pages
  if (pathname !== "/") return null;

  return (
    <>
      <div
        ref={pointRef}
        style={{ width: "var(--size)", height: "var(--size)" }}
        className="rounded-full bg-white fixed z-[999999] pointer-events-none [mix-blend-mode:difference]"
      />
      <div
        ref={circleRef}
        style={{
          width: "var(--size)",
          height: "var(--size)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='47' height='47' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='23.5' cy='23.5' r='22.5' fill='none' stroke='white' stroke-width='2' /%3E%3C/svg%3E%0A")`,
        }}
        className="fixed z-[999999] left-0 top-0 bg-cover opacity-50 pointer-events-none [mix-blend-mode:difference]"
      />
    </>
  );
};

export default SmoothCursor;
