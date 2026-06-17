"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SidePanel from "@/components/SidePanel";
export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide if scrolling down AND past the 100px mark
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Show if scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Reduced py-5 to py-3 to make the header slimmer */}
      <nav className="container mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo Section - Height reduced for a slimmer profile */}
        <div className="flex items-center gap-4">
          <img
            src="/logoo.png"
            alt="Envexa"
            className="h-20 w-20 object-contain"
          />

          <div>
            <h1 className="text-4xl font-extrabold text-blue-600">ENVEXA</h1>

            <p className="text-sm tracking-widest text-gray-500">
              SMART SCHOOL MANAGEMENT
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <section className="hidden md:flex flex-1 justify-center items-center gap-10 lg:gap-16">
          <Link
            href="/home"
            className="text-lg text-gray-700 font-semibold hover:text-blue-700 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-lg text-gray-700 font-semibold hover:text-blue-700 transition-colors duration-200"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative group flex items-center py-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg text-gray-700 font-semibold hover:text-blue-700 transition-colors duration-200"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-180 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50 transform translate-y-4 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 flex flex-col gap-1 mt-1">
                <Link
                  href="/services/students"
                  className="block px-5 py-3 text-lg text-gray-700 font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all"
                >
                  Student Management
                </Link>
                <Link
                  href="/services/teachers"
                  className="block px-5 py-3 text-lg text-gray-700 font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all"
                >
                  Teacher Management
                </Link>
                <Link
                  href="/services/academic"
                  className="block px-5 py-3 text-lg text-gray-700 font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all"
                >
                  Academic Management
                </Link>
                <Link
                  href="/services/fee"
                  className="block px-5 py-3 text-lg text-gray-700 font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all"
                >
                  Fee Management
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-lg text-gray-700 font-semibold hover:text-blue-700 transition-colors duration-200"
          >
            Contact
          </Link>
        </section>

        {/* Action Buttons - Adjusted padding to fit the slimmer header */}
        <section className="flex items-center gap-4 shrink-0">
          {/* Login */}
          <Link
            href="/login"
            className="px-7 py-3 text-blue-600 font-semibold border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
          >
            Login
          </Link>

          {/* Register */}
          <Link
            href="/register"
            className="px-7 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Register
          </Link>
        </section>
      </nav>
    </header>
  );
}
