"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="font-sans">

      {/* ── Hero Banner ── */}
      <section className="bg-blue-600 py-20 px-6 my-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-semibold text-white/70 tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-white leading-tight">
            Contact Us
          </h1>
          <p className="text-white/70 mt-4 text-base max-w-xl mx-auto">
            Have questions about SchoolERP? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6 -my-20">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-1" />
      </div>

      {/* ── Form Section ── */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

          {/* Left — info */}
          <div className="flex flex-col gap-6 flex-1">
            <p className="text-sm font-semibold text-[#0E89AB] tracking-widest uppercase">
              Reach Out
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold text-gray-900 leading-tight">
              We are Here to Help Your School Grow
            </h2>
            <div className="w-16 h-1 rounded-full bg-blue-600" />
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Whether you are looking for a demo, have a question about our modules,
              or need support — our team is ready to assist you every step of the way.
            </p>

            {/* Contact info pills */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0">
                  <span className="text-[#0E89AB] text-lg">📧</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</p>
                  <p className="text-gray-700 font-semibold text-sm">support@schoolerp.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0">
                  <span className="text-[#0E89AB] text-lg">📞</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Phone</p>
                  <p className="text-gray-700 font-semibold text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0">
                  <span className="text-[#0E89AB] text-lg">📍</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Location</p>
                  <p className="text-gray-700 font-semibold text-sm">Mohali, Punjab, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="flex-1 w-full">
            {submitted ? (
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-12 flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8F4F8] flex items-center justify-center text-3xl">
                  ✅
                </div>
                <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-500 text-sm">
                  Thanks <span className="font-semibold text-[#0E89AB]">{formData.name}</span>,
                  we will get back to you at <span className="font-semibold text-[#0E89AB]">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "" }); }}
                  className="mt-2 text-sm text-[#0E89AB] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-10 flex flex-col gap-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900">Send us a message</h3>

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#0E89AB] focus:ring-2 focus:ring-[#0E89AB]/20 transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#0E89AB] focus:ring-2 focus:ring-[#0E89AB]/20 transition-all duration-200"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-[#0a6a87] text-white font-bold text-base py-4 rounded-xl transition-colors duration-200 mt-2"
                >
                  Send Message →
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-1" />
      </div>

      {/* ── Bottom CTA ── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <p className="text-sm font-semibold text-[#0E89AB] tracking-widest uppercase">
            Ready to get started?
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-extrabold text-gray-900">
            See SchoolERP in action
          </h2>
          <p className="text-gray-500 text-base max-w-md">
            Book a free demo and let our team walk you through everything SchoolERP can do for your school.
          </p>
          <button className="bg-blue-600 hover:bg-[#0a6a87] transition-colors duration-200 text-white font-semibold text-base px-10 py-4 rounded-full">
            Book a Free Demo
          </button>
        </div>
      </section>

    </main>
  );
}