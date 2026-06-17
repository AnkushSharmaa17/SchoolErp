"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    title: "Hospital Management System",
    image: "/hospital_mgmt.jpg",
    description:
      "A complete healthcare management solution that streamlines patient care, appointments, billing, pharmacy operations and hospital administration through a single integrated platform.",
    features: [
      "Patient Registration",
      "Doctor Scheduling",
      "Pharmacy Management",
      "Laboratory System",
      "Billing & Insurance",
      "Analytics Dashboard",
    ],
  },

  {
    title: "School ERP Management",
    image: "/school_erpjpeg.jpeg",
    description:
      "An all-in-one ERP platform designed to automate school administration, attendance, fee collection, examinations, communication and academic management.",
    features: [
      "Attendance Tracking",
      "Fee Management",
      "Online Examination",
      "Transport Tracking",
      "Parent Portal",
      "Report Generation",
    ],
  },

  {
    title: "Library Management System",
    image: "/lib_mgmt.jpg",
    description:
      "A smart digital library solution for managing books, borrowing records, returns, inventory tracking and member activities efficiently.",
    features: [
      "Book Catalog",
      "Issue & Return",
      "Fine Management",
      "Barcode Support",
      "Member Tracking",
      "Inventory Reports",
    ],
  },
];

export default function HeroSwiper_ii() {
  return (
    <div className="px-20 py-10 bg-gradient-to-b from-white to-[#f5fafc]">
      <Swiper
        navigation
        modules={[Navigation]}
        className="rounded-3xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center py-10">
              <div
                className="
                w-[90%]
                bg-white
                rounded-[32px]
                shadow-xl
                border border-[#e7eef2]
                overflow-hidden
                "
              >
                <div className="flex items-center">
                  
                  {/* Image Section */}
                  <div
                    className="
                    w-[45%]
                    p-10
                    bg-gradient-to-br
                    from-[#f8fcfe]
                    to-[#eef8fb]
                    flex
                    justify-center
                    items-center
                    "
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="
                      max-w-[420px]
                      w-full
                      h-auto
                      transition-all
                      duration-500
                      hover:scale-105
                      "
                    />
                  </div>

                  {/* Content Section */}
                  <div
                    className="
                    w-[55%]
                    px-12
                    py-12
                    flex
                    flex-col
                    justify-center
                    "
                  >
                    <span
                      className="
                      text-sm
                      uppercase
                      tracking-widest
                      text-[#0E89AB]
                      font-semibold
                      "
                    >
                      Featured Project
                    </span>

                    <h1
                      className="
                      text-4xl
                      font-extrabold
                      text-[#09345c]
                      mt-3
                      mb-5
                      "
                    >
                      {project.title}
                    </h1>

                    <p
                      className="
                      text-gray-600
                      text-lg
                      leading-8
                      mb-8
                      "
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.features.map((feature, i) => (
                        <span
                          key={i}
                          className="
                          px-4
                          py-2
                          rounded-full
                          bg-[#0E89AB]/10
                          text-[#0E89AB]
                          text-sm
                          font-medium
                          "
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button
                      className="
                      mt-8
                      w-fit
                      px-8
                      py-4
                      rounded-full
                      bg-[#0E89AB]
                      text-white
                      font-semibold
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-lg
                      "
                    >
                      Explore Project
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}