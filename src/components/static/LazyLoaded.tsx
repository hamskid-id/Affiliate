"use client";

import dynamic from "next/dynamic";
import Loading from "../shared/Loading";

const HeroBottom = dynamic(() => import("./HeroBottom"), {
  ssr: false,
  loading: () => <Loading />,
});

export default HeroBottom;
