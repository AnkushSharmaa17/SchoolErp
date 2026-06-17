"use client"; // Required for Framer Motion in Next.js App Router

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function TeacherManagementPage() {
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
       <hr/>
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 flex items-center leading-tight">Teacher Management</h1>
    
      {/* 2. Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div {...slideInLeft} className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            Empower Your <br />
            <span className="text-blue-600">Educational Faculty</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Inphora streamlines faculty administration so your educators can focus on teaching. From onboarding and workload allocation to payroll and performance tracking, handle your entire staff lifecycle in one secure platform.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
            Optimize Your Staff Today
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
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Teachers collaborating in a staff room" 
            className="rounded-2xl shadow-2xl border-4 border-blue-50"
          />
        </motion.div>
      </section>

      {/* 3. Services List Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div {...slideInLeft} className="mb-12 border-l-4 border-blue-600 pl-4">
            <h2 className="text-3xl font-bold text-blue-900">Core Faculty Features</h2>
            <p className="text-gray-600 mt-2">Everything you need to support and manage your teaching staff efficiently.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Faculty Profile & Records",
              "Staff Attendance & Leaves",
              "Payroll & Salary Processing",
              "Class & Subject Allocation",
              "Performance Appraisals",
              "Teacher Self-Service Portal",
              "Timetable Management",
              "Training & Certifications"
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="HR and Payroll Analytics Dashboard" 
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        <motion.div {...slideInLeft} className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Key Benefits for Administration</h2>
          <p className="text-gray-700 mb-6">
            Eliminate administrative bottlenecks. Our module gives your HR and admin teams complete visibility into staff workloads, attendance patterns, and payroll processing.
          </p>
          <ul className="space-y-4">
            {[
              "Centralized Faculty Profiles & Secure Document Vault",
              "Automated Payroll Calculation & Tax Compliance",
              "Smart Timetable & Workload Distribution",
              "Streamlined Leave Request & Approval Workflows"
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
            <p className="text-gray-600 mt-2">Common questions about managing your staff with Inphora.</p>
          </motion.div>

          <div className="space-y-6">
            <motion.div {...slideInLeft} className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">How does the workload allocation feature work?</h3>
              <p className="text-gray-700">The system automatically calculates teaching hours based on the timetable, preventing double-booking and ensuring fair distribution of classes among your faculty members.</p>
            </motion.div>
            
            <motion.div {...slideInLeft} transition={{ delay: 0.1, duration: 0.8 }} className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Can teachers manage their own leave requests?</h3>
              <p className="text-gray-700">Yes. Through the dedicated Teacher Self-Service Portal, staff can check their available leave balances, submit time-off requests, and download their payslips without going through HR.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}