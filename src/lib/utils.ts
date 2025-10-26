import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* eslint-disable @typescript-eslint/no-explicit-any */

const letters = "!ABCDEFGHIJKLMNOPQRSTUVWXYZ#";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleMouseEnter = (el: any) => {
  if (!el) return;
  el = el.target;
  let iteration: number = 0;
  const speed: number = el.dataset.value!.length > 7 ? 30 : 60;

  let lastTimestamp: number;
  let animationFrameId: number | null = null;

  const animate = (timestamp: number) => {
    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }

    // deltaTime is the time elapsed since the last animation frame
    // Used to reduce or increase speed
    const deltaTime = timestamp - lastTimestamp;

    if (deltaTime >= speed) {
      el.innerText = el.innerText
        .split("")
        .map((_: string, index: number) => {
          if (index < iteration) {
            return el.dataset.value![index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= el.dataset.value!.length) {
        // Stop the animation if completed
        return;
      }

      iteration += 1 / 3;
      lastTimestamp = timestamp;
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  cancelAnimationFrame(animationFrameId!);
  animationFrameId = requestAnimationFrame(animate);
};
