import React from "react";
import Navbar from "../Components/Navbar";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#FAFCF9] ">

        {/* ================= BACKGROUND DECORATION ================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {/* Top right soft circle */}
          <div
            className="
              absolute
              -top-40
              -right-32
              w-[520px]
              h-[520px]
              rounded-full
              bg-[#8FD14F]/10
              blur-3xl
            "
          />

          {/* Bottom left soft circle */}
          <div
            className="
              absolute
              -bottom-52
              -left-40
              w-[500px]
              h-[500px]
              rounded-full
              bg-[#8FD14F]/5
              blur-3xl
            "
          />

          {/* Small decorative circle */}
          <div
            className="
              absolute
              top-[25%]
              right-[42%]
              w-20
              h-20
              rounded-full
              border
              border-[#8FD14F]/20
            "
          />

        </div>


        {/* ================= CONTENT ================= */}
        <div
          className="
            relative
            z-10
            max-w-[1500px]
            mx-auto
            min-h-[calc(100vh-80px)]
            px-6
            sm:px-10
            lg:px-16
            xl:px-20
            p
            lg:py-20
            flex
            items-center
          "
        >

          <div
            className="
              w-full
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-14
              xl:gap-20
              items-center
            "
          >

            {/* ================================================= */}
            {/* LEFT SIDE */}
            {/* ================================================= */}

            <div className="max-w-2xl">

            


              {/* Main Heading */}
              <h1
                className="
                  text-[#0B1220]
                  text-[48px]
                  sm:text-[58px]
                  md:text-[68px]
                  lg:text-[64px]
                  xl:text-[76px]
                  font-bold
                  leading-[1.03]
                  tracking-[-0.04em]
                  mt-10
                
                "
              >
                Building confident,

                <br />

                active and{" "}

                <span className="text-[#8FD14F]">
                  healthy
                </span>

                <br />

                <span className="text-[#8FD14F]">
                  children for life!
                </span>
              </h1>


              {/* Description */}
              <p
                className="
                  mt-8
                  max-w-xl
                  text-[#596574]
                  text-base
                  sm:text-lg
                  lg:text-xl
                  leading-8
                "
              >
                A structured Early Childhood Physical Literacy System
                for ages 2–9, delivered inside your school by trained
                coaches.
              </p>


              {/* ================= BUTTONS ================= */}
              <div
                className="
                  mt-9
                  flex
                  flex-col
                  sm:flex-row
                  items-start
                  sm:items-center
                  gap-5
                "
              >

                {/* Primary CTA */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdbGapyT761HjsvQF4XM7hWNPyyXmkJ4CxbGDS1Fn8akj9wLw/viewform?usp=publish-editor"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-5
                    bg-[#0B1220]
                    hover:bg-[#8FD14F]
                    text-white
                    hover:text-[#0B1220]
                    px-7
                    py-4
                    rounded-xl
                    font-bold
                    text-base
                    shadow-[0_12px_30px_rgba(11,18,32,0.18)]
                    hover:shadow-[0_15px_35px_rgba(143,209,79,0.25)]
                    transition-all
                    duration-300
                  "
                >
                  Book a Free Demo

                  <span
                    className="
                      text-xl
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </a>


                {/* Secondary CTA */}
                <Link
                  to="/sports"
                  className="
                    group
                    relative
                    text-[#0B1220]
                    font-bold
                    text-base
                    py-3
                    cursor-pointer
                    
                  "
                >
                  Explore the programme

                  <span
                    className="
                      absolute
                      left-0
                      bottom-1
                      w-full
                      h-[1px]
                      bg-[#0B1220]
                      transition-all
                      duration-300
                      group-hover:bg-[#8FD14F]
                    "
                  />

                </Link>

              </div>


              {/* ================= TRUST POINTS ================= */}
              <div
                className="
                  mt-8
                  pt-7
                  border-t
                  border-[#0B1220]/10
                  flex
                  flex-wrap
                  gap-x-8
                  gap-y-4
                "
              >

                <div className="flex items-center gap-2 ">
                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#8FD14F]
                    "
                  />

                  <span className="text-md font-extrabold text-[#0B1220] ">
                    Ages 2–9
                  </span>
                </div>


                <div className="flex items-center gap-2 border-l-[#0B1220]">
                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#8FD14F]
                    "
                  />

                  <span className="text-md  text-[#0B1220] font-extrabold">
                    7 Sports
                  </span>
                </div>


                <div className="flex items-center gap-2">
                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#8FD14F]
                    "
                  />

                  <span className="text-md text-[#0B1220] font-extrabold">
                    LTDA Aligned
                  </span>
                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* RIGHT SIDE - LOGO VISUAL */}
            {/* ================================================= */}
            

            <div
              className="
                relative
                
               
                lg:justify-end
              "
            >
            

              {/* Large background circle */}
              <div
                className="
                  absolute
                  w-[340px]
                  h-[340px]
                  sm:w-[450px]
                  sm:h-[450px]
                  lg:w-[500px]
                  lg:h-[500px]
                  rounded-full
                  bg-[#8FD14F]/10
                  
                "
              />

              {/* Blue-ish subtle circle */}
              <div
                className="
                  absolute
                  w-[280px]
                  h-[280px]
                  sm:w-[390px]
                  sm:h-[390px]
                  lg:w-[430px]
                  lg:h-[430px]
                  rounded-full
                  border
                  border-[#0B1220]/5
                "
              />


              {/* ================= IMAGE CARD ================= */}
              <div
                className="
                  relative
                  z-10
                  w-full
                  max-w-[450px]
                  p-3
                  sm:p-4
                  rounded-[3rem]
                  bg-[#8FD14F]
                  border
                  border-white
                  shadow-[0_25px_70px_rgba(11,18,32,0.14)]
                  rotate-[1deg]
                  hover:rotate-0
                  transition-transform
                  duration-500
                  mb-40
                  mr-20
                 
                  
                "
              >

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    bg-white
                    
                    
                  "
                >

                  <img
                    src="/logoFinal.png"
                    alt="ActiveStart Kids - Your Physical Literacy Partner"
                    className="
                      
                      w-[95%]
                      h-[50%]
                      object-cover
                      block
                      max-auto

                    "
                  />

                </div>

              </div>


              {/* ================= FLOATING BADGE ================= */}
              {/* <div
                className="
                  absolute
                  z-20
                  left-0
                  bottom-0
                  sm:left-4
                  lg:-left-6
                  lg:bottom-8
                  bg-[#0B1220]
                  text-white
                  px-5
                  py-4
                  rounded-2xl
                  shadow-[0_15px_35px_rgba(11,18,32,0.22)]
                "
              >

                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.15em]
                    text-[#8FD14F]
                    font-bold
                  "
                >
                  Our approach
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold
                  "
                >
                  Sports. Motivation. Confidence.
                </p>

              </div> */}


              {/* Small green decoration */}
              <div
                className="
                  absolute
                  z-20
                  right-2
                  top-2
                  w-5
                  h-5
                  rounded-full
                  bg-[#8FD14F]
                  shadow-[0_0_0_8px_rgba(143,209,79,0.12)]
                "
              />

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Home;