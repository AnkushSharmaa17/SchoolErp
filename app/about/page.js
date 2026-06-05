"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  // Animation settings
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, margin: "-50px" },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true },
  };

  return (
    <main className="relative bg-white font-sans text-black overflow-hidden">
      
      {/* CSS for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="/image4.avif"
          alt="School Campus"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center"
        >
          <div className="inline-block px-4 py-1 mb-4 border border-white/30 rounded-full text-white/90 tracking-widest text-sm uppercase">
            Discover Envexa
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            ABOUT US
          </h1>
        </motion.div>
      </section>

      {/* 2. Intro Section (Text & Video) */}
      <section className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        <motion.div {...slideInLeft} className="w-full lg:w-1/2 flex flex-col gap-6">
          <h3 className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            Our Mission
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Empowering Education with <span className="text-blue-600">Envexa ERP</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            Manage your entire school with confidence. Our all-in-one platform helps institutions automate workflows, enhance collaboration, and deliver a seamless educational experience for administrators, teachers, and students alike.
          </p>
          <div className="pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-50 aspect-video group">
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <video
              src="/girlvidio.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
            ></video>
          </div>
        </motion.div>
      </section>

      {/* 3. Features Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          
          {/* Section Header */}
          <motion.div {...fadeUp} className="text-center mb-20">
            <h3 className="inline-block px-6 py-2 border-2 border-blue-100 bg-blue-50 rounded-full text-blue-700 font-bold text-sm tracking-wide mb-6">
              SCHOOL ERP FEATURES
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Powerful Features for <br/>
              <span className="text-blue-600">Smarter Management</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
              Envexa is designed to simplify day-to-day operations and empower everyone through one integrated, easy-to-use platform.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Left Sticky Image Card */}
            <motion.div {...slideInLeft} className="w-full lg:w-1/3">
              <div className="sticky top-32 rounded-3xl overflow-hidden shadow-xl h-[500px] relative group">
                <img
                  src="/image3.avif"
                  alt="School Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <div className="w-12 h-1 bg-blue-500 mb-4"></div>
                  <h3 className="text-3xl font-bold mb-2">All-in-One</h3>
                  <p className="text-xl font-medium text-blue-100 mb-2">School Management</p>
                  <p className="text-blue-200/80 text-sm">Simplify. Automate. Succeed.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Feature Cards Grid */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Student Management", desc: "Manage admissions, profiles, attendance and academic records seamlessly." },
                { title: "Teacher Management", desc: "Organize teacher schedules, payroll, profiles and track performance." },
                { title: "Attendance Tracking", desc: "Real-time attendance tracking with automated alerts for parents." },
                { title: "Academic Management", desc: "Handle classes, subjects, assignments and dynamic timetables." },
                { title: "Examinations", desc: "Create custom exams, grading rubrics, and generate report cards instantly." },
                { title: "Fee Management", desc: "Automate fee collection, invoicing, and late-payment tracking." },
                { title: "Communication", desc: "Send SMS, email notifications and campus announcements instantly." },
                { title: "Transport & Analytics", desc: "Manage bus routes and get real-time insights into school performance." }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Subtle hover accent line */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300"></div>
                  
                  <h4 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 pl-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed pl-2">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Marquee Footer Banner */}
      <div className="bg-blue-900 py-6 overflow-hidden border-t-4 border-blue-600">
        <div className="marquee-container">
          {/* Double the content so it loops seamlessly */}
          <div className="flex justify-around w-[50%] shrink-0 text-blue-100 text-xl md:text-2xl font-bold tracking-wide">
            <span>Communication</span>
            <span className="text-blue-500">•</span>
            <span>Interact with Teachers</span>
            <span className="text-blue-500">•</span>
            <span>Attendance Tracking</span>
            <span className="text-blue-500">•</span>
            <span>Fee Management</span>
            <span className="text-blue-500">•</span>
            <span>Online Examinations</span>
            <span className="text-blue-500">•</span>
          </div>
          <div className="flex justify-around w-[50%] shrink-0 text-blue-100 text-xl md:text-2xl font-bold tracking-wide">
             <span>Communication</span>
            <span className="text-blue-500">•</span>
            <span>Interact with Teachers</span>
            <span className="text-blue-500">•</span>
            <span>Attendance Tracking</span>
            <span className="text-blue-500">•</span>
            <span>Fee Management</span>
            <span className="text-blue-500">•</span>
            <span>Online Examinations</span>
            <span className="text-blue-500">•</span>
          </div>
        </div>
      </div>
      
    </main>
  );
}