"use client";

import { useState,useEffect,useRef} from "react";
import SidePanel from "@/components/SidePanel";
import Image from "next/image";
import HeroSwiper from "@/components/HeroSwiper";
import HeroSwiper_i from "@/components/ErpSwiper";
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

    <main className="px-30">
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
          <button className="bg-[#5492d3] rounded-3xl w-[180px] h-[80px] text-white text-[20px]">Demo Request</button>
        </div>
      </section>

      <p className="w-[1/3] h-[2px] bg-[#050f5b] top-5"></p>
      <p className="w-[1/3] h-[2px] bg-[#050f5b] left-40 top-4 bottom-5" ></p>

{/* features */}
      <section>
            <div className="px-20 py-5 bg-white flex flex-col justify-between items-center gap-5 top-15">
                <div className="text-center text-[45px] font-extrabold flex items-center gap-3">
                <span className="text-black">SchoolERP</span>
                <span className="text-[#0E89AB]">App</span>
                <span className="text-black">Features</span>
              </div>
                <div className="flex justify-around items-center gap-8">
                  <div>
                      <div className="flex flex-col item-end justify-end gap-3">
                        <div className="flex justify-center gap-5 items-center">
                            <p className="text-[20px] font-bold">Dashboard Management</p>
                            <Image src="/dash.png" alt="" width={50} height={50}/>
                        </div>
                        <p className="text-[18px] flex justify-start">
                            Customize and manage different dashboard on different modules.
                        </p>
                      </div>

                      <div className="flex flex-col item-end justify-center gap-3">
                        <div className="flex justify-center gap-5 items-center">
                            <p className="text-[20px] font-bold">Attendance Entry</p>
                            <Image src="/attendance.png" alt="" width={50} height={50}/>
                        </div>
                        <p className="text-[18px] flex justify-center">
                            Manage and view user's attendance with a detailed report.
                        </p>
                      </div>

                      <div className="flex flex-col item-end justify-center gap-3">
                        <div className="flex justify-center gap-5 items-center">
                            <p className="text-[20px] font-bold">Homework Entry</p>
                            <Image src="/hw.png" alt="" width={50} height={50}/>
                        </div>
                        <p className="text-[18px] flex justify-center">
                            Add, View and Check Homework by teachers and students/Parents.
                        </p>
                      </div>

                      <div className="flex flex-col item-end justify-center gap-3">
                        <div className="flex justify-center gap-5 items-center">
                            <p className="text-[20px] font-bold">Fee Management</p>
                            <Image src="/fee.png" alt="" width={50} height={50}/>
                        </div>
                        <p className="text-[18px] flex justify-center">
                            View and Check Fee by students/parents.
                        </p>
                      </div>

                      <div className="flex flex-col item-end justify-center gap-3">
                        <div className="flex justify-center gap-5 items-center">
                            <p className="text-[20px] font-bold">Timetable Entry</p>
                            <Image src="/tt.png" alt="" width={50} height={50}/>
                        </div>
                        <p className="text-[18px] flex justify-center">
                            Automated timetable for every class and sections.
                        </p>
                      </div>
                  </div>

                  <div>
                    <Image src="/features.png" width={370} height={476} alt=""
                    className={`
                      transition-all
                      duration-1000
                      ease-out
                      ${
                        showImage
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-20 opacity-0"
                      }
                      `}
                      />
                  </div>

                  <div>
                      <div className="flex flex-col item-start justify-center gap-3">
                        <div className="flex justify-center gap-5 items-center">
                            <Image src="/loc.png" alt="" width={50} height={50}/>
                            <p className="text-[20px] font-bold">Location View</p>
                        </div>
                        <p className="text-[18px] flex justify-center">
                            Separate location entries for students, teachers and other staffs
                        </p>
                      </div>

                      <div className="flex flex-col item-start justify-center gap-3">
                        <div className="flex justify-center gap-5 items-center">
                            <Image src="/lib.png" alt="" width={50} height={50}/>
                            <p className="text-[20px] font-bold">Library Management</p>
                        </div>
                        <p className="text-[18px] flex justify-center">
                            To manage available books, its issues and returns
                        </p>
                      </div>

                      <div className="flex flex-col item-start justify-center gap-3">
                        <div className="flex justify-center gap-5 items-center">
                            <Image src="/veh.png" alt="" width={50} height={50}/>
                            <p className="text-[20px] font-bold">Vehicle Tracking</p>
                        </div>
                        <p className="text-[18px] flex justify-center">
                            Parents can be worry-free by tracking their children's vehicle status different modules.
                        </p>
                      </div>

                      <div className="flex flex-col item-start justify-center gap-3">
                        <div className="flex justify-center items-center gap-5">
                            <Image src="/cir.png" alt="" width={50} height={50}/>
                            <p className="text-[20px] font-bold">Circular</p>
                        </div>
                        <p className="text-[18px] flex justify-center">
                            Ease of communication with Student/Parent
                        </p>
                      </div>

                      <div className="flex flex-col item-start justify-center gap-3">
                        <div className="flex justify-center items-centergap-5">
                            <Image src="/trk.png"  alt="" width={50} height={50}/>
                            <p className="text-[20px] font-bold">Student Tracking</p>
                        </div>
                        <p className="text-[18px] flex justify-center">
                            Parents/Teachers can keep eye on their children activities
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
            <h className="bg-grey flex justify-center text-[45px] font-bold px-10 "><em>Integrated</em></h>
            <div className="flex justify-evenly items-center gap-5">
              <div className="w-[45%]">
                      <Image src="/api.png" alt="" width={600} height={700}/>
              </div>
              <div
                className=" w-[500px] h-[500px] bg-[url('/integrated.gif')] bg-cover bg-center bg-no-repeat flex flex-col justify-center ">
  
                <h className="text-[35px] font-bold text-center">WhatsApp, Biometric, Geo</h>
                <h className="text-[35px] font-bold text-center">Location, Payment GateWay</h>
                <p className="bg-[#5266bd] w-[190px] h-[3px]"></p>
                <p className="bg-[#5266bd] w-[250px] h-[3px] mt-1"></p>
                <p className="text-[15px] mt-5">Our comprehensive school management software offers a seamless solution for educational institutions, integrating essential features such as WhatsApp and SMS APIs for efficient communication between educators, students, and parents. With biometric authentication, we ensure the utmost security and accountability. Geo-location tracking enhances student safety, allowing administrators to monitor real-time whereabouts. Additionally, our payment gateway simplifies fee collection and financial transactions. This all-in-one platform streamlines school operations, fostering better communication, security, and financial management for a holistic and efficient educational experience.</p>
              </div>
            </div>
      </section>

      <section>
        <div className="flex justify-around gap-10 items-center ">
          <div className="flex flex-col itmes-center justify-center w-[1000px] h-[800px] bg-grey-700">
            <div className=" flex justify-center">
                <Image src="/web_based.png" alt="" width={400} height={400}/>
            </div>
            <div className="flex flex-col itmes-center justify-center gap-3">
              <h className="text-[40px] font-bold text-center">LIGHTING SPEED</h>
              <p className="text-[24px] text-center">We know that internet access is not always blazing fast so we have made our application as light as possible.</p>
            </div>

          </div>

          <div className="flex flex-col itmes-center justify-center w-[1000px] h-[800px] bg-grey-700">
             <div className=" flex justify-center">
                <Image src="/speed.png" alt="" width={400} height={400}/>
            </div>
            <div className="flex flex-col itmes-center justify-center gap-3">
              <h className="text-[40px] font-bold text-center">WEB BASED</h>
              <p className="text-[24px] text-center">There is no need to install any kind of software on client machines. School Erp can be accessed from anywhere through internet.</p>
            </div>

          </div>

          <div className="flex flex-col itmes-center justify-center w-[1000px] h-[800px] bg-grey-700">
             <div className=" flex justify-center">
                <Image src="/user-friendly.png" alt="" width={400} height={400}/>
            </div>
            <div className="flex flex-col itmes-center justify-center gap-3">
              <h className="text-[40px] font-bold text-center">USER FRIENDLY</h>
              <p className="text-[20px] text-center">Just about anyone working knowledge of computers will able to handle School Erp. The whole software is based on simplicity itself.</p>
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
    </main>
  );
}
