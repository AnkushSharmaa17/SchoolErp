"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useState,useEffect,useRef} from "react";
import { Navigation } from "swiper/modules";

export default function ReusableSwiper({
  slides,
  variant = "left",
}) {

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

  // if (imageRef.current) {
  //   observer.observe(imageRef.current);
  // }

  return () => observer.disconnect();
}, []);
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[600px] overflow-hidden rounded-xl">
            {/* Media */}
            {slide.video ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            {variant === "left" ? (
            <div className="absolute inset-0 flex items-center px-40 text-white">
                <div className="w-[60%]">
                <h1 className={`text-7xl font-bold mb-6 transition-all
              duration-1000
              ease-out
              ${
                showImage
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-20 opacity-0"
              }`}>
                    {slide.title}
                </h1>

                <p className="text-2xl leading-relaxed">
                    {slide.description}
                </p>
                </div>
            </div>
            ) : (
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-5xl text-center text-white px-6">
                <h1 className="text-6xl lg:text-8xl font-bold mb-6">
                    {slide.title}
                </h1>

                <p className="text-xl lg:text-3xl leading-relaxed">
                    {slide.description}
                </p>
                </div>
            </div>
            )}

            {/* Navigation Buttons */}
            {index === 0 && (
              <>
                <button
                  className="hero-prev absolute left-8 top-1/2 -translate-y-1/2 z-20
                  w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg
                  text-white text-3xl flex items-center justify-center
                  hover:bg-white/20 transition-all"
                >
                  ←
                </button>

                <button
                  className="hero-next absolute right-8 top-1/2 -translate-y-1/2 z-20
                  w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg
                  text-white text-3xl flex items-center justify-center
                  hover:bg-white/20 transition-all"
                >
                  →
                </button>
              </>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}