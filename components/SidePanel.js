"use client";

import Link from "next/link";

export default function SidePanel({ isOpen, setIsOpen }) {
  const menuItems = [
    {
      name: "Contact Us",
      href: "/contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          className="fill-[#0E89AB] transition-all duration-300 group-hover:fill-white"
        >
          <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
        </svg>
      ),
    },
    {
      name: "My Info",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="20"
          height="20"
          className="fill-[#0E89AB] transition-all duration-300 group-hover:fill-white"
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
        </svg>
      ),
    },
    {
      name: "Course Enrollment",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          width="20"
          height="20"
          className="fill-[#0E89AB] transition-all duration-300 group-hover:fill-white"
        >
          <path d="M542.2 32.1c-54.4 3.6-164.5 15.7-254.2 47.5C198.3 47.8 88.2 35.7 33.8 32.1C15.3 30.9 0 45.8 0 64.4V416c0 17.7 14.3 32 32 32c71.2 0 160 13.2 224 42.6V128c0-22.1-17.9-40-40-40zm510.2 0c-54.4 3.6-164.5 15.7-254.2 47.5V490.6C362 461.2 450.8 448 522 448c17.7 0 32-14.3 32-32V64.4c0-18.6-15.3-33.5-33.8-32.3z"/>
        </svg>
      ),
    },
    {
      name: "Proctor",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          className="fill-[#0E89AB] transition-all duration-300 group-hover:fill-white"
        >
          <path d="M256 0L32 96v128c0 123.5 88.1 238.7 208.8 273.2L256 512l15.2-14.8C391.9 462.7 480 347.5 480 224V96L256 0z"/>
        </svg>
      ),
    },
    {
      name: "Academics",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="20"
          height="20"
          className="fill-[#0E89AB] transition-all duration-300 group-hover:fill-white"
        >
          <path d="M320 32L0 160l320 128 261.2-104.5V288h58.8V160L320 32zM143.9 320l-79.9 32V400c0 35.3 114.6 64 256 64s256-28.7 256-64V352l-79.9-32L320 384 143.9 320z"/>
        </svg>
      ),
    },
    {
      name: "Examination",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width="20"
          height="20"
          className="fill-[#0E89AB] transition-all duration-300 group-hover:fill-white"
        >
          <path d="M320 0H64C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"/>
        </svg>
      ),
    },
    {
      name: "Library",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          width="20"
          height="20"
          className="fill-[#0E89AB] transition-all duration-300 group-hover:fill-white"
        >
          <path d="M542.2 32.1C474.3 36.6 376.4 48.8 288 79.6C199.6 48.8 101.7 36.6 33.8 32.1C15.3 30.9 0 45.8 0 64.4V416c0 17.7 14.3 32 32 32c71.2 0 160 13.2 224 42.6c64-29.4 152.8-42.6 224-42.6c17.7 0 32-14.3 32-32V64.4c0-18.6-15.3-33.5-33.8-32.3z"/>
        </svg>
      ),
    },
    {
      name: "Hostel",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          width="20"
          height="20"
          className="fill-[#0E89AB] transition-all duration-300 group-hover:fill-white"
        >
          <path d="M575.8 255.5c0 18-15 32.5-33 32.5H32.5C14.5 288 0 273.5 0 255.5s14.5-32.5 32.5-32.5H64V160c0-35.3 28.7-64 64-64H256V32c0-17.7 14.3-32 32-32s32 14.3 32 32V96H448c35.3 0 64 28.7 64 64v63h30.8c18 0 33 14.5 33 32.5z"/>
        </svg>
      ),
    },
    {
      name: "Online Payment",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          width="20"
          height="20"
          className="fill-[#0E89AB] transition-all duration-300 group-hover:fill-white"
        >
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm448 128v64H64V160H512z"/>
        </svg>
      ),
    },
    {
      name: "Transport",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          className="fill-[#0E89AB] transition-all duration-300 group-hover:fill-white"
        >
          <path d="M192 448c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm256-64c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zM0 80C0 35.8 35.8 0 80 0H352c35.3 0 64 28.7 64 64V80h16c35.3 0 64 28.7 64 64v176c0 17.7-14.3 32-32 32H448c0-53-43-96-96-96s-96 43-96 96H192c0-53-43-96-96-96S0 299 0 352V80z"/>
        </svg>
      ),
    },
  ];

  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0  z-60 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 right-0  h-screen w-80
        bg-gradient-to-b from-[#F0FAFD] via-white to-[#E8F8FC]
        border-l border-[#D9EEF4]
        shadow-2xl z-50
        transition-transform duration-300 ease-in-out
        ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col h-full">
          {/* Header */}
          <div
            className="bg-gradient-to-r from-[#0E89AB] to-[#13A7CE]
            rounded-xl h-[65px]
            flex items-center justify-center
            shadow-lg"
          >
            <h1 className="text-white text-xl font-semibold">
              SchoolERP Menu
            </h1>
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center py-6">
            <div
              className="w-20 h-20 rounded-full
              bg-[#0E89AB]
              flex items-center justify-center
              text-white text-3xl font-bold
              shadow-lg"
            >
              S
            </div>

            <h2 className="mt-3 font-semibold text-gray-800">
              Student Portal
            </h2>

            <p className="text-sm text-gray-500">
              Welcome Back
            </p>
          </div>

          {/* Menu */}
          <ul className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="
                group
                rounded-xl
                transition-all
                duration-300
                hover:bg-[#0E89AB]
                hover:translate-x-2
                hover:shadow-lg
                "
              >
                <Link
                  href={item.href}
                  className="
                  flex items-center
                  gap-4
                  px-5 py-4
                  "
                >
                  {item.icon}

                  <span
                    className="
                    text-[17px]
                    font-medium
                    text-gray-700
                    transition-all
                    duration-300
                    group-hover:text-white
                    "
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="mt-auto pt-5">
            <div
              className="
              bg-white
              border border-[#D9EEF4]
              rounded-xl
              p-4
              shadow-sm
              "
            >
              <p className="text-center text-sm text-gray-600">
                School ERP Management System
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}