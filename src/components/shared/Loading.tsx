"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="loader-container ">
      <svg viewBox="0 0 400 160" id="loader">
        <text
          x="50%"
          y="50%"
          dy=".32em"
          textAnchor="middle"
          className="text-body"
        >
          Logo
        </text>
      </svg>
    </div>
  );
}
