"use client"; // Required for Framer Motion in Next.js App Router

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function StudentManagementPage() {
  // Animation settings for left-to-right slide in
  const slideInLeft = {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeInOut" },
    viewport: { once: true, margin: "-100px" },
  };

  // Animation settings for bottom-to-top fade in
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-50px" },
  };

  return (
    
    <div className="bg-white min-h-screen font-sans text-black overflow-hidden">
       {/* <h1 className="h-0.1 w-full bg-zinc-900"></h1> */}
       <hr/>
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900  flex items-center leading-tight">Student Managment</h1>
    
      {/* 2. Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div {...slideInLeft} className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            Comprehensive <br />
            <span className="text-blue-600">Student Management</span> Services
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Inphora provides professional student management modules to help educational institutions track the complete student lifecycle, from admission to graduation. Replace manual paperwork with secure, real-time digital efficiency.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
            Get Started Today
          </button>
        </motion.div>
        
        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Students collaborating" 
            className="rounded-2xl shadow-2xl border-4 border-blue-50"
          />
        </motion.div>
      </section>

      {/* 3. Services List Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div {...slideInLeft} className="mb-12 border-l-4 border-blue-600 pl-4">
            <h2 className="text-3xl font-bold text-blue-900">View More Services</h2>
            <p className="text-gray-600 mt-2">Everything you need to run your institution efficiently.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Student Profile Management",
              "Attendance Tracking",
              "Fee & Invoice Structure",
              "Academic & Exam Grading",
              "Staff & HR Management",
              "Parent & Student Portal",
              "Transport Management",
              "Disciplinary Logs"
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
              >
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {service}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits Section with Image */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Analytics Dashboard" 
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        <motion.div {...slideInLeft} className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Key Benefits of Our System</h2>
          <p className="text-gray-700 mb-6">
            Our module helps schools proactively manage student success and administrative workflows. We handle everything from managing enrollment forms to automating daily classroom tasks.
          </p>
          <ul className="space-y-4">
            {[
              "Centralized Digital Profiles & Document Vault",
              "Real-Time Attendance & Academic Tracking",
              "Seamless Parent-Teacher Communication",
              "Automated Fee Reminders & Invoicing"
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* 5. FAQ Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">Common questions about how we streamline school operations.</p>
          </motion.div>

          <div className="space-y-6">
            <motion.div {...slideInLeft} className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">What is a Student Management System?</h3>
              <p className="text-gray-700">A digital hub that centralizes all student-related data, replacing physical files with secure, easily searchable digital profiles for admissions, grades, and daily activities.</p>
            </motion.div>
            
            <motion.div {...slideInLeft} transition={{ delay: 0.1, duration: 0.8 }} className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Does the system provide dedicated access for parents?</h3>
              <p className="text-gray-700">Yes, we provide dedicated parent portals and dashboards aligned with modern communication standards, allowing parents to securely view attendance, grades, and fee notices in real-time.</p>
            </motion.div>
          </div>
        </div>
      </section>

   
    </div>
  );
} 