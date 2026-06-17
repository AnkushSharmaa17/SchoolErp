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
  <> <main className="h-screen w-full ">
    <h1 className="  h-20 text-3xl flex justify-center items-center  bg-amber-950">
      WELCOME TO OUR SCHOOL 
    </h1>
    <div className="bg-zinc-400 h-40 w-full ">
      <img src="" alt="" />
    </div>

        <HeroSwiper_ii />
      </section>
    </main>
  );
}

