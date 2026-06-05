"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SidePanel from "@/components/SidePanel";
export default function Header() {
  const [showTopBar, setShowTopBar] = useState(true);
  const[isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header */}
      {showTopBar && (
        <div className="z-10 bg-[#a9e2f5] text-white px-20 py-5 flex justify-between items-center text-[20px]">
        <div  className="flex justify-start items-center gap-4">
            <div className="flex justify-center items-center gap-2">
              <svg className="fill-[#19497c]"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="30px" height="25px "><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>
              <p>Sector-74, Mohali - 140307</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <svg className="fill-[#19497c]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30px" height="25px"><path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"/></svg>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <svg  className="fill-[#19497c]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30px" height="25px"><path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/></svg>
              <p>2086660112</p>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4">
              <div>
                <svg className="fill-[#19497c]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30px" height="25px"><path d="M194.4 211.7a53.3 53.3 0 1 0 59.2 88.6 53.3 53.3 0 1 0 -59.2-88.6zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12-18.1-7.1-57.6-6.8-83.1-6.5-4.1 0-7.9 .1-11.2 .1s-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2 0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2 2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5 4.1 0 7.9-.1 11.2-.1s7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5 6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83 0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83-2.7-6.9-6.8-13.1-12-18.4l0 .2zm-67.1 44.5c18.1 12.1 30.6 30.9 34.9 52.2s-.2 43.5-12.3 61.6c-6 9-13.7 16.6-22.6 22.6s-19 10.1-29.6 12.2c-21.3 4.2-43.5-.2-61.6-12.3s-30.6-30.9-34.9-52.2 .2-43.5 12.2-61.6 30.9-30.6 52.2-34.9 43.5 .2 61.6 12.2l.1 0zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1 2.6-7.1 5.2-9.8 6.1-4.5 9.8-5.2 7.6-.4 11.1 1.1 6.5 3.9 8.6 7 3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2-3.9 3.2-6.2 4.2-4.8 1.5-7.3 1.5c-3.8 0-7.5-1.1-10.6-3.2l-.1 0zM448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM357 389c-18.7 18.7-41.4 24.6-67 25.9-26.4 1.5-105.6 1.5-132 0-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132 1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0 25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9-1.3 25.6-7.1 48.3-25.8 67l0 .1z"/></svg>
              </div>
              <div>
                <svg className="fill-[#19497c]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30px" height="25px"><path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"/></svg>
              </div>
          </div>

      </div>

      )}

      {/* Main Navbar */}
      <div className="sticky top-0 z-50 bg-white ">
        <div className="bg-white text-black px-20 py-7 flex justify-between items-center text-[25px]">
                <div className="flex justify-start items-center gap-4">
                  <Image 
                    src="/images.png"
                    alt="Company Logo"
                    width={164}
                    height={70}
                  />
                </div>
                <div className="flex justify-center items-center gap-4">
                   <ul className="flex gap-15">
                      <li className="transition-all duration-300 hover:text-[#0E89AB] hover:font-bold"><Link href="/">Home</Link></li>
                      <li className="transition-all duration-300 hover:text-[#0E89AB] hover:font-bold"><Link href="/about">About</Link></li>
                      <li className="transition-all duration-300 hover:text-[#0E89AB] hover:font-bold"><Link href="/services">Services</Link></li>
                      <li className="transition-all duration-300 hover:text-[#0E89AB] hover:font-bold"><Link href="/contact">Contact</Link></li>
                   </ul>
                </div>
                <div className="flex justify-end items-center gap-4">
                  {/* <div className="flex justify-center items-center gap-2 w-[200px] border-2 bg-[#0E89AB] px-3 py-2  rounded-lg  hover:scale-90 inline-block">
                      <p className="text-white font-bold">Get Quote </p>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15px" height="10px"><path fill="rgb(255, 255, 255)" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                  </div> */}
                  <svg onClick={() => setIsOpen(prev => !prev)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512 " width="40px" height="30px"><path fill="rgb(116, 192, 252)" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                </div>
                
        </div>
        <p className="w-[100%] h-[4px] bg-[#19497c] bottom-0"></p>
      </div>
      <SidePanel isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
}