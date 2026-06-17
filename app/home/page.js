"use client";
import { useState,useEffect,useRef} from "react";
import Features from "@/components/Features";
import Image from "next/image";
import HeroSwiper from "@/components/HeroSwiper";
import HeroSwiper_ii from "@/components/HeroSwiper_ii";
export default function About() {
const [showImage, setShowImage] = useState(false);
const imageRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowImage(true);
      }
    },
    {
      threshold: 0.3,
    }
  );
  if (imageRef.current) {
    observer.observe(imageRef.current);
  }
 
  return () => observer.disconnect();
}, []);

  return (

    <main className="">
      {/* //main content */}
      <HeroSwiper />

      

        <section className="px-30 py-10 flex justify-between items-center gap-20 bg-white">
          <div
              ref={imageRef}
              className={`
                transition-all
                duration-1000
                ease-out
                ${
                  showImage
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }
              `}
            >
              <Image
                src="/best-school-management-software.jpg"
                alt="Benefits of School ERP"
                width={500}
                height={700}
                className="px-10 rounded-lg"
              />
            </div>
          <div className="w-[50%] flex flex-col gap-7 items-center">
            <div className={`text-[55px] text-black font-extrabold
            transition-all
                duration-1000
                ease-out
                ${
                  showImage
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-20 opacity-0"
                }`}><em>
                Looking for the Best School Management Software?</em>
            </div>
            <p className="text-[25px]">
                Any school organization must balance the utility and importance of software that caters to existing and related market practices when selecting school management software. A school should bring expenditures, service quality, and operational excellence from the school management system.
            </p>
            <button className="bg-blue-600 rounded-full w-[180px] h-[80px] text-white text-[22px]">Demo Request</button>
          </div>
        </section>

        <p className="w-[1/3] h-[2px] bg-[#050f5b] top-5"></p>
        <p className="w-[1/3] h-[2px] bg-[#050f5b] m-0.5" ></p>

  {/* features */}
        <section>
          <div className="px-20 py-16 bg-white flex flex-col justify-between items-center gap-10">
            
            {/* Heading */}
            <div className="text-center flex flex-col items-center gap-2">
              <p className="text-sm font-semibold text-[#0E89AB] tracking-widest uppercase">
                What's Inside
              </p>
              <div className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold flex items-center gap-3">
                <span className="text-black text-[55px]">SchoolERP</span>
                <span className="text-[#0E89AB] text-[55px]">App</span>
                <span className="text-black text-[55px]">Features</span>
              </div>
              <p className="text-gray-400 text-base max-w-lg">
                Everything your school needs — in one app, for everyone.
              </p>
            </div>

            <div className="flex justify-around items-center gap-8 w-full">

              {/* Left */}
              <div className="flex flex-col gap-7">

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0 group-hover:bg-[#0E89AB]/20 transition-colors duration-200">
                    <Image src="/dash.png" alt="" width={26} height={26} />
                  </div>
                  <p className="text-[16px] font-bold text-gray-800 group-hover:text-[#0E89AB] transition-colors duration-200">
                    Dashboard Management
                  </p>
                </div>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0 group-hover:bg-[#0E89AB]/20 transition-colors duration-200">
                    <Image src="/attendance.png" alt="" width={26} height={26} />
                  </div>
                  <p className="text-[16px] font-bold text-gray-800 group-hover:text-[#0E89AB] transition-colors duration-200">
                    Attendance Entry
                  </p>
                </div>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0 group-hover:bg-[#0E89AB]/20 transition-colors duration-200">
                    <Image src="/hw.png" alt="" width={26} height={26} />
                  </div>
                  <p className="text-[16px] font-bold text-gray-800 group-hover:text-[#0E89AB] transition-colors duration-200">
                    Homework Entry
                  </p>
                </div>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0 group-hover:bg-[#0E89AB]/20 transition-colors duration-200">
                    <Image src="/fee.png" alt="" width={26} height={26} />
                  </div>
                  <p className="text-[16px] font-bold text-gray-800 group-hover:text-[#0E89AB] transition-colors duration-200">
                    Fee Management
                  </p>
                </div>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0 group-hover:bg-[#0E89AB]/20 transition-colors duration-200">
                    <Image src="/tt.png" alt="" width={26} height={26} />
                  </div>
                  <p className="text-[16px] font-bold text-gray-800 group-hover:text-[#0E89AB] transition-colors duration-200">
                    Timetable Entry
                  </p>
                </div>

              </div>

              {/* Center phone */}
              <div className="shrink-0 drop-shadow-2xl">
                <Image
                  src="/features.png.png"
                  width={370}
                  height={476}
                  alt=""
                  className={`
                    transition-all duration-1000 ease-out
                    ${showImage ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
                  `}
                />
              </div>

              {/* Right */}
              <div className="flex flex-col gap-7">

                <div className="flex items-center gap-4 flex-row-reverse group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0 group-hover:bg-[#0E89AB]/20 transition-colors duration-200">
                    <Image src="/loc.png" alt="" width={26} height={26} />
                  </div>
                  <p className="text-[16px] font-bold text-gray-800 group-hover:text-[#0E89AB] transition-colors duration-200">
                    Location View
                  </p>
                </div>

                <div className="flex items-center gap-4 flex-row-reverse group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0 group-hover:bg-[#0E89AB]/20 transition-colors duration-200">
                    <Image src="/lib.png" alt="" width={26} height={26} />
                  </div>
                  <p className="text-[16px] font-bold text-gray-800 group-hover:text-[#0E89AB] transition-colors duration-200">
                    Library Management
                  </p>
                </div>

                <div className="flex items-center gap-4 flex-row-reverse group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0 group-hover:bg-[#0E89AB]/20 transition-colors duration-200">
                    <Image src="/veh.png" alt="" width={26} height={26} />
                  </div>
                  <p className="text-[16px] font-bold text-gray-800 group-hover:text-[#0E89AB] transition-colors duration-200">
                    Vehicle Tracking
                  </p>
                </div>

                <div className="flex items-center gap-4 flex-row-reverse group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0 group-hover:bg-[#0E89AB]/20 transition-colors duration-200">
                    <Image src="/cir.png" alt="" width={26} height={26} />
                  </div>
                  <p className="text-[16px] font-bold text-gray-800 group-hover:text-[#0E89AB] transition-colors duration-200">
                    Circular
                  </p>
                </div>

                <div className="flex items-center gap-4 flex-row-reverse group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0 group-hover:bg-[#0E89AB]/20 transition-colors duration-200">
                    <Image src="/trk.png" alt="" width={26} height={26} />
                  </div>
                  <p className="text-[16px] font-bold text-gray-800 group-hover:text-[#0E89AB] transition-colors duration-200">
                    Student Tracking
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>
        <p className="flex justify-center w-[1/3] h-[2px] bg-[#050f5b] "></p>
        <p className=" flex justify-center w-[1/7] h-[2px] bg-[#050f5b] mt-1" ></p>

        {/* integration */}
        <section>
              <h className="bg-grey flex justify-center text-[55px] font-bold px-10 "><em>Integrated</em></h>
              <div className="flex justify-center items-center gap-15">
                <div className="w-[45%]">
                        <Image src="/api.png" alt="" width={600} height={700}/>
                </div>
                <div
                  className=" w-[700px] h-[500px] bg-[url('/integrated.gif')] bg-content bg-right bg-no-repeat flex flex-col justify-center ">
    
                  <h className="text-[40px] font-bold text-center">WhatsApp, Biometric, Geo</h>
                  <h className="text-[40px] font-bold text-center">Location, Payment GateWay</h>
                  <p className="bg-[#5266bd] w-[190px] h-[3px]"></p>
                  <p className="bg-[#5266bd] w-[250px] h-[3px] mt-1"></p>
                  <p className="text-[18px] mt-5">Our comprehensive school management software offers a seamless solution for educational institutions, integrating essential features such as WhatsApp and SMS APIs for efficient communication between educators, students, and parents. With biometric authentication, we ensure the utmost security and accountability. Geo-location tracking enhances student safety, allowing administrators to monitor real-time whereabouts. Additionally, our payment gateway simplifies fee collection and financial transactions. This all-in-one platform streamlines school operations, fostering better communication, security, and financial management for a holistic and efficient educational experience.</p>
                </div>
              </div>
        </section>

        <section>
          <Features/>
        </section>

        <section className="py-28 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-[#0E89AB] tracking-widest uppercase mb-3">
                Why SchoolERP
              </p>
              <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-gray-900">
                Built for Every School
              </h2>
              <p className="text-gray-400 mt-3 text-base max-w-xl mx-auto">
                Fast, accessible and simple — everything your school needs to run smoothly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {/* Card 1 — Lightning Speed */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&fit=crop"
                    alt="Lightning Speed"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E89AB]/80 to-transparent" />
                  
                </div>
                {/* Text */}
                <div className="p-7 flex flex-col gap-3 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0E89AB] transition-colors duration-200">
                    Lightning Speed
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We know internet access isn't always fast — so we've made SchoolERP as lightweight and optimized as possible, even on slow connections.
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-[#0E89AB] text-sm font-semibold">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </div>

              {/* Card 2 — Web Based */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=80&fit=crop"
                    alt="Web Based"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E89AB]/80 to-transparent" />
      
                </div>
                {/* Text */}
                <div className="p-7 flex flex-col gap-3 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0E89AB] transition-colors duration-200">
                    Web Based
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    No installation required. Access SchoolERP securely from anywhere — any device, any browser, just an internet connection.
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-[#0E89AB] text-sm font-semibold">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </div>

              {/* Card 3 — User Friendly */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&fit=crop"
                    alt="User Friendly"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E89AB]/80 to-transparent" />
                  
                </div>
                {/* Text */}
                <div className="p-7 flex flex-col gap-3 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0E89AB] transition-colors duration-200">
                    User Friendly
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Designed with simplicity in mind — anyone with basic computer knowledge can use SchoolERP comfortably from day one.
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-[#0E89AB] text-sm font-semibold">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="flex flex-col items-center gap-4 mb-12">
            <h3 className="text-[#0E89AB] text-xl font-semibold uppercase tracking-widest">
              Our Projects
            </h3>

            <h1 className="text-5xl font-extrabold text-[#09345c]">
              OUR BEST WORKS
            </h1>
          </div>

          <HeroSwiper_ii />
        </section>

      <div></div>

    </main>
  );
}

