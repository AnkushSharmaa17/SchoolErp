"use client"; // Required for Framer Motion in Next.js App Router

import { motion } from "framer-motion";
import Link from "next/link";
// import Footer from "@/components/Footer"; // Uncomment if needed

export default function AcademicManagementPage() {
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
      <hr className="border-gray-200" />
      
      {/* Page Header */}
      <div className="container mx-auto px-6 pt-8">
        <h1 className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-wider">
          Academic Management
        </h1>
      </div>
    
      {/* 1. Centered Hero Section */}
      <section className="container mx-auto px-6 py-16 flex flex-col items-center text-center">
        <motion.div {...fadeUp} className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-6 leading-tight tracking-tight">
            Elevate Your <br />
            <span className="text-blue-600">Curriculum & Grading</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
            Standardize your syllabus, streamline examination grading, and track institutional performance. Inphora gives your academic board the tools to maintain high educational standards without the paperwork.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all hover:-translate-y-1">
            Explore Academic Tools
          </button>
        </motion.div>
        
        {/* Large Wide Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full mt-16 max-w-6xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Student notebook and academic planning" 
            className="rounded-3xl shadow-2xl object-cover h-[400px] w-full border-4 border-blue-50"
          />
        </motion.div>
      </section>

      {/* 2. Light Theme Services Grid (Matching Original Style) */}
      <section className="bg-blue-50 py-24 mt-10">
        <div className="container mx-auto px-6">
          <motion.div {...slideInLeft} className="mb-16 border-l-4 border-blue-600 pl-4">
            <h2 className="text-4xl font-bold text-blue-900 mb-2">Core Academic Features</h2>
            <p className="text-gray-600 text-lg max-w-2xl">A complete suite designed for curriculum coordinators, department heads, and examiners to design and deploy educational frameworks.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Syllabus & Lesson Planning",
              "Examination & Seating Logic",
              "Dynamic Grading & Rubrics",
              "Report Cards & Transcripts",
              "Academic Calendar Mapping",
              "Online Quizzes & Assessments",
              "Subject & Batch Management",
              "Learning Resource Library"
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-blue-600 group-hover:bg-white transition-colors"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Benefits Section (Asymmetrical Layout) */}
      <section className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        <motion.div {...slideInLeft} className="w-full lg:w-1/2">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold mb-6">
            Data-Driven Education
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6 leading-tight">
            Turn Assessments Into <br/> Actionable Insights
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Stop waiting for end-of-term reports to understand how cohorts are performing. Our academic management module automatically calculates GPAs, flags struggling batches, and standardizes assessment formats across all departments.
          </p>
          <div className="space-y-6">
            {[
              "Automated Grade Calculations & Real-Time GPA Tracking",
              "Standardized Assessment Tools Across All Departments",
              "Instant Generation of Compliance-Ready Transcripts",
              "Early Warning System for At-Risk Performance"
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 shadow-md">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-800 font-medium text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Educators reviewing academic performance data" 
            className="rounded-3xl shadow-xl border-8 border-blue-50"
          />
        </motion.div>
      </section>

      {/* 4. Minimalist FAQ Section */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fadeUp} className="mb-14">
            <h2 className="text-4xl font-bold text-blue-900">Academic Workflow FAQs</h2>
            <div className="w-20 h-1 bg-blue-600 mt-6"></div>
          </motion.div>

          <div className="space-y-10">
            <motion.div {...fadeUp} className="border-l-4 border-blue-200 pl-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Can the system handle complex, custom grading scales?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">Absolutely. Our module supports custom grading rubrics, weighted assignments, percentage-to-letter grade conversions, and dynamic GPA calculations tailored to your specific institutional policies.</p>
            </motion.div>
            
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="border-l-4 border-blue-200 pl-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Does academic data sync with the teacher and student portals?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">Yes, the flow of information is immediate. When teachers input exam scores or update lesson plans, the data instantly updates on the student and parent dashboards, eliminating the need to print and distribute physical reports.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}