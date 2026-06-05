// components/ErpSwiper.jsx

"use client";

import ReusableSwiper from "@/components/ReusableSwiper";
import erpSlides from "@/app/data/erpSlides";

export default function ErpSwiper() {
  return (
    <div className="px-20 py-10 bg-gray-200">
      <ReusableSwiper
        slides={erpSlides}
        variant="center"
      />
    </div>
  );
}