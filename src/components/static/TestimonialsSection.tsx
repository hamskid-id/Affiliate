"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { TestimonialCard } from "./TestimonialCard";

import "swiper/css";
import "swiper/css/pagination";
import { TESTIMONIALS_DATA } from "@/src/contants/static";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="sm:text-[36px] text-[24px] font-semibold text-[#333333] mb-2">
          Trusted by Businesses That Value Simplicity
        </h2>
        <p className="text-[#333333] sm:text-[20px] text-[16px] font-normal max-w-2xl mx-auto">
          See how businesses and affiliates are growing with our platform
        </p>
      </motion.div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="testimonials-swiper max-w-[1200px] sm:min-h-[350px] min-h-[300px]"
      >
        {TESTIMONIALS_DATA.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
