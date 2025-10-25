import React from "react";
import { motion } from "framer-motion";
import { Testimonial } from "@/src/types";
import CustomAvatar from "../ui/custom-avatar";
import { TestimonySvg } from "@/src/svg";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full w-full flex flex-col "
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <TestimonySvg />
      </div>

      {/* Quote Text */}
      <p className="text-[#374151] sm:text-[18px] text-[16px] font-[400] leading-relaxed mb-8 flex-grow">
        {testimonial.quote}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <CustomAvatar
          name={testimonial.author.name}
          className="w-[40px] h-[40px]"
        />
        <div>
          <p className=" font-[600] sm:text-[16px] text-[14px]">
            {testimonial.author.name}
          </p>
          <p className="text-[#374151] sm:text-[14px] text-[13px] font-[400]">
            {testimonial.author.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
