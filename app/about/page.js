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
    <main>
  <section >
    <div className=" flex items-center justify-center gap-10 px-10 py-10 shadow-gray-400 m-2">
      <div className="w-[60%] h-[500px] bg-blue-900 p-6 rounded-lg shadow-md relative flex flex-col justify-start py-10 px-10 gap-6">
        <h1 className="text-white text-6xl font-bold arial">Helping schools</h1>
        <h1 className="text-white text-6xl font-bold arial"> build together</h1>
        <p  className="bg-red-500 w-[150px] h-[5px]"></p>
        <p className="text-white text-3xl top-1">One interaction at a time</p>
        <button className="bg-blue-100 hover:bg-blue-300 text-white font-bold py-2 px-4  w-[200px] h-[50px] mt-4 rounded-lg shadow-md">
          Join Now
        </button>
      </div>
      <div className="w-[60%] h-[500px] flex items-center justify-end"> 
        <Image className="loading-eager "
          src="/Finalsite_about_hero_v2.png"
          alt="About Us"
          width={600}
          height={400}
          className="absolute right-60 shadow-lg z-20"
        />
      </div>
    </div>
  </section>
  <div className="flex justify-start items-start gap-10 px-10 py-10 shadow-gray-400 m-2">
    <div classNmae="flex flex-col items-start justify-start gap-10 px-10 py-10 shadow-gray-400 m-2">
        <div ><h2 >Our Story</h2></div>
        <div className="flex flex-col items-start justify-start gap-10 px-10 py-10 shadow-gray-400 m-2">
            <h3 >Empower schools to thrive.</h3>
            <p>We believe every school deserves tools that make communication easier, more meaningful, and more human.
           <p>That’s why we build technology that helps schools communicate clearly, engage families meaningfully, and 
            simplify everyday tasks. Our software, services, and people work together to support every interaction that 
            shapes the school experience.</p>
</p>
        </div>
      
        <div><h2>Our Mission</h2></div>
        <div className="flex flex-col items-start justify-start gap-10 px-10 py-10 shadow-gray-400 m-2">
          <h3>Since 1999, Finalsite has helped schools connect with their 
            communities in smarter, more meaningful ways.</h3>
          <p className="m">Today, we’re the trusted partner of more than 7,000 schools and 
            districts in 119 countries. And while our platform has evolved, our 
            focus has stayed the same—supporting schools with tools and guidance that 
            reflect their values, meet modern expectations, and make every interaction count.</p>
          <p>Our platform supports the full school experience, from websites and mobile apps 
            to communications, enrollment, and marketing. With over 500 employees—many of 
            whom have worked in schools—we know what it takes to support your goals because we’ve been there, too.</p>
        </div>
    </div>
    <div className="flex flex-col items-start justify-center">
        <h3 >Our Company</h3>
        <ul className="text-decoration-none   text-lg">
          <li>Experienced and dedicated staff</li>
          <li>Comprehensive curriculum</li>
          <li>State-of-the-art facilities</li>
          <li>Strong community involvement</li>
          <li>Focus on student well-being and development</li>
        </ul>

    </div>
</div>

<div className="flex justify-center gap-10 px-10 py-10 shadow-gray-400 m-2">
  <div className="w-[50%] h-[400px] bg-grey-100 ">
      <h1 className="text-4xl py-10 flex items-center justify-start px-10">Our Clients</h1>
      <p>We are proud to have worked with a diverse range of clients, including schools, districts, and educational organizations around the world. Our clients trust us to provide them with the tools and support they need to succeed, and we are committed to helping them achieve their goals.</p>
      <button className="border-red-700 w-[200px] h-[50px] mt-4 rounded-lg shadow-md">Learn More</button>
  </div>
  <div className="w-[50%] h-[500px] bg-red-700 relative flex items-center justify-center">
      <Image
          src="/Indy_workshop_2025-18.jpg"
          alt="Our Clients"
          width={600}
          height={300}
          className="shadow-lg absolute right-10 left-10 top-10 bottom-10"
        />
  </div>
</div>
  
<div className="flex justify-center gap-10 px-10  shadow-gray-400 m-2">
  <div className="w-[50%] h-[500px] bg-purple-700 relative flex items-center justify-center">
      <Image
          src="/Indy_workshop_2025-18.jpg"
          alt="Our Clients"
          width={600}
          height={300}
          className="shadow-lg absolute right-10 left-10 top-10 bottom-10"
        />
  </div>
  <div className="w-[50%] h-[400px] bg-grey-100 ">
      <h1 className="text-4xl py-10 flex items-center justify-start px-10">Our Clients</h1>
      <p>We are proud to have worked with a diverse range of clients, including schools, districts, and educational organizations around the world. Our clients trust us to provide them with the tools and support they need to succeed, and we are committed to helping them achieve their goals.</p>
  </div>
  
</div>

</main>
  );
}