"use client";

import ReusableSwiper from "@/components/ReusableSwiper";
import heroSlides from "@/app/data/heroSlides";

export default function HeroSwiper() {
  return (
    <div className="px-20 py-10">
      <ReusableSwiper
        slides={heroSlides}
        variant="left"
      />
    </div>
  );
}