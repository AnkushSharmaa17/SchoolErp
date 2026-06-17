"use client"; // Required for Framer Motion in Next.js App Router

import { motion } from "framer-motion";
import Link from "next/link";
// import Footer from "@/components/Footer";

export default function FeeManagementPage() {
  // Animation settings
  const slideInLeft = {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeInOut" },
    viewport: { once: true, margin: "-100px" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 80 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeInOut" },
    viewport: { once: true, margin: "-100px" },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-50px" },
  };

  return (
    <div className="bg-white min-h-screen font-sans text-black overflow-hidden">
      <hr className="border-gray-200" />
      
      {/* 1. Hero Section with Floating Element */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16">
        <motion.div {...slideInLeft} className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold mb-6 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Smart Finance Module
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
            Streamline <span className="text-blue-600">Fee Collection</span> & Accounting
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
            Automate invoicing, enable secure online payments, and track outstanding dues in real-time. Give your finance team total control over your institution's revenue streams.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:scale-105">
              Set Up Payments
            </button>
            <button className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 font-bold py-3 px-8 rounded-lg shadow-sm transition-colors">
              View Reports
            </button>
          </div>
        </motion.div>
        
        {/* Hero Image with Floating Notification */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Finance professional analyzing charts" 
            className="rounded-2xl shadow-2xl object-cover"
          />
          {/* Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Invoice #4920</p>
              <p className="text-blue-900 font-bold text-lg">Payment Received</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Top-Border Feature Cards Grid */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Complete Financial Clarity</h2>
            <p className="text-gray-600 text-lg">Say goodbye to manual ledgers and missing receipts. Our platform handles every aspect of the student billing cycle automatically.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Automated Invoicing", desc: "Generate bulk fee challans and invoices based on class, batch, or custom scholarship rules." },
              { title: "Online Payment Gateway", desc: "Allow parents to pay instantly via credit card, UPI, or bank transfer from their dedicated portal." },
              { title: "Late Fee Logic", desc: "Automatically calculate and apply late fines based on your institution's specific grace periods." },
              { title: "Instant Receipts", desc: "Generate and email PDF receipts the moment a transaction is successfully reconciled." },
              { title: "Defaulter Tracking", desc: "Instantly pull lists of students with pending dues and send automated SMS/email reminders." },
              { title: "Accounting Integration", desc: "Export clean financial data to Tally, QuickBooks, or your preferred accounting software." }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-blue-600"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dark Blue Trust Banner */}
      <section className="bg-blue-900 py-20 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div {...slideInLeft} className="w-full lg:w-1/2 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Secure, Transparent, <br/> and Error-Free.
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-md">
                Financial data is the lifeblood of your institution. We enforce bank-level encryption and strict role-based access so your money and data are always protected.
              </p>
              <ul className="space-y-5">
                {[
                  "Bank-grade 256-bit encryption for all transactions",
                  "Automated daily cash flow reconciliation",
                  "Granular permission settings for cashiers vs. admins"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-blue-50 font-medium">
                    <div className="p-1 rounded bg-blue-700 text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...slideInRight} className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="POS Terminal and secure payments" 
                className="rounded-2xl shadow-2xl border-4 border-blue-800"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Side-by-Side FAQ Grid */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <h2 className="text-4xl font-bold text-blue-900">Billing & Payments FAQ</h2>
            <p className="text-gray-600 mt-4 text-lg">Common questions about migrating to digital fee management.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Can we set up custom fee structures for siblings or staff children?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. The system allows you to create global discount policies (like a 10% sibling concession) or assign custom waivers to individual students, which automatically reflect on their invoices.</p>
            </motion.div>
            
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Are the online payment gateways secure?</h3>
              <p className="text-gray-700 leading-relaxed">We integrate only with PCI-DSS compliant payment gateways (such as Stripe, Razorpay, or PayPal). Credit card data is never stored on our servers, ensuring total security for parents.</p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Does it support part-payments or installments?</h3>
              <p className="text-gray-700 leading-relaxed">Absolutely. You can configure installment plans (e.g., quarterly, monthly) and allow parents to make partial payments. The system will track the remaining balance and generate targeted reminders.</p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-blue-900 mb-3">How does cash collection work alongside online payments?</h3>
              <p className="text-gray-700 leading-relaxed">Cashiers can manually log cash or cheque payments through the admin dashboard. The system updates the student's ledger instantly and issues a printable receipt, keeping online and offline data synced.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}