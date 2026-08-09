import React from "react";
import Navbar from "../Components/Navbar";

const Sports = () => {
const sports = [
  {
    name: "Athletics",
    outcome: "Stronger running and movement confidence",
    image:
      "https://images.unsplash.com/photo-1623604407444-fe08817cb454?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cnVubmluZyUyMGNoaWxkcmVufGVufDB8fDB8fHww",
  },
  {
    name: "Gymnastics",
    outcome: "Better balance and body control",
    image:
      "https://plus.unsplash.com/premium_photo-1723651363547-ed59b6fe0b9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3ltbmFzdGljcyUyMGNoaWxkcmVufGVufDB8fDB8fHww",
  },
  {
    name: "Football",
    outcome: "Improved foot–eye coordination",
    image:
      "https://images.unsplash.com/photo-1600077063877-22118d6290eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGxjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Basketball",
    outcome: "Improved hand–eye coordination",
    image:
      "https://plus.unsplash.com/premium_photo-1683120846997-9888b7eaf64f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cricket",
    outcome: "Sharper focus and timing",
    image:
      "https://images.unsplash.com/photo-1631194758628-71ec7c35137e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kho-Kho",
    outcome: "Greater agility and spatial awareness",
    image:
      "https://imgs.search.brave.com/us6_GilB0vvo1aLF8Yfa8UplvK-0_tovzra2_k_3s9Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Zmlyc3RjcnkuY29t/L2VkdWNhdGlvbi8y/MDI2LzA1LzI5MTcz/MDI2L0Vzc2F5LU9u/LUtoby1LaG8tNjk2/eDQ3Ni5qcGc",
  },
  {
    name: "Kids’ Yoga",
    outcome: "Better flexibility and body awareness",
    image:
      "https://media.istockphoto.com/id/1632539694/photo/kids-practicing-yoga-early-in-the-morning-training-yoga-together-international-yoga-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=kH981sdVpEqiNhOmnp_mUzeRTXLK5Mwxux18M-vLZPI=",
  },
];

  return (
    <>
      <Navbar />

      <main className=" bg-white min-h-screen">

        {/* =====================================================
            HERO SECTION
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#0B1220]">

          {/* Decorative circles */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-[#8FD14F]/20" />

          <div className="absolute -bottom-48 -left-40 w-[500px] h-[500px] rounded-full border border-[#8FD14F]/20" />

          <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-[#8FD14F]" />

          <div className="absolute bottom-20 left-20 w-3 h-3 rounded-full bg-[#8FD14F]/60" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Hero Content */}
              <div>

                <div className="flex items-center gap-3 mb-6">

                  <span className="w-12 h-[3px] bg-[#8FD14F]" />

                  <span className="text-[#8FD14F] text-sm font-bold uppercase tracking-[3px]">
                    Our Sports
                  </span>

                </div>

                <h1 className="text-white text-[46px] md:text-[60px] lg:text-[68px] font-extrabold leading-tight">

                  Seven Sports,

                  <span className="block text-[#8FD14F]">
                    One Foundation.
                  </span>

                </h1>

                <p className="mt-7 text-white text-xl md:text-2xl leading-relaxed max-w-2xl">
                  Different ways to move. One shared purpose—to help every
                  child grow in confidence and ability.
                </p>

                <p className="mt-6 text-white text-[17px] leading-8 max-w-2xl">
                  Through seven age-appropriate sports programmes, children
                  experience a broad range of movements that support their
                  overall physical literacy.

                </p>

              </div>


              {/* Hero Visual */}
              <div className="flex justify-center lg:justify-end">

                <div className="relative w-[330px] h-[330px] md:w-[410px] md:h-[410px]">

                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-[#8FD14F]/20" />

                  {/* Middle ring */}
                  <div className="absolute inset-8 rounded-full border border-[#8FD14F]/30" />

                  {/* Green circle */}
                  <div className="absolute inset-16 rounded-full bg-[#8FD14F] flex items-center justify-center">

                    <div className="text-center">

                      <div className="text-[#0B1220] text-[80px] md:text-[100px] font-black leading-none">
                        7
                      </div>

                      <p className="text-[#0B1220] text-xl md:text-2xl font-bold">
                        Sports
                      </p>

                      <p className="text-[#0B1220]/70 text-sm mt-2">
                        One complete foundation
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SPORTS INTRO
        ====================================================== */}

        <section className="bg-[#8FD14F] py-16">

          <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">

            <p className="text-[#0B1220] text-lg md:text-xl font-semibold leading-8 max-w-4xl mx-auto">
              Each sport introduces children to different movements,
              challenges and experiences—helping them develop a broad and
              adaptable movement foundation.
            </p>

          </div>

        </section>


        {/* =====================================================
            SPORTS GRID
        ====================================================== */}

        <section className="py-24 bg-[#F7F9F5]">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            {/* Heading */}
            <div className="max-w-3xl mb-14">

              <div className="flex items-center gap-3 mb-5">

                <span className="text-[#0B1220] text-sm font-bold uppercase tracking-[3px]">
                  Explore the programme
                </span>

                <span className="w-16 h-[2px] bg-[#8FD14F]" />

              </div>

              <h2 className="text-[#0B1220] text-[40px] md:text-[52px] font-extrabold leading-tight">
                Seven sports.
                <span className="text-[#8FD14F]">
                  {" "}Seven ways to grow.
                </span>
              </h2>

            </div>


            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

              {sports.map((sport, index) => (

                <div
                  key={sport.name}
                  className={`
                    group
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    border
                    border-gray-200
                    shadow-sm
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-500
                    ${index === 6 ? "lg:col-start-2" : ""}
                  `}
                >

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">

                    <img
                      src={sport.image}
                      alt={sport.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-110
                        transition-transform
                        duration-700
                      "
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent" />

                    {/* Number */}
                    <div className="absolute top-5 left-5 w-11 h-11 rounded-full bg-[#8FD14F] flex items-center justify-center text-[#0B1220] font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Sport name */}
                    <h3 className="absolute bottom-5 left-6 text-white text-2xl font-bold">
                      {sport.name}
                    </h3>

                  </div>


                  {/* Card content */}
                  <div className="p-7">

                    <p className="text-xs uppercase tracking-[2px] font-bold text-[#8FD14F] mb-3">
                      Outcome
                    </p>

                    <p className="text-[#0B1220] font-semibold text-lg leading-7">
                      {sport.outcome}
                    </p>

                    <div className="mt-6 h-[2px] w-10 bg-[#8FD14F] group-hover:w-full transition-all duration-500" />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            MOVEMENT FOUNDATION
        ====================================================== */}

        <section className="bg-white py-24">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="bg-[#0B1220] rounded-[2rem] overflow-hidden">

              <div className="grid lg:grid-cols-2">

                {/* Left */}
                <div className="p-10 md:p-14 lg:p-16">

                  <p className="text-[#8FD14F] text-sm font-bold uppercase tracking-[3px] mb-5">
                    The bigger picture
                  </p>

                  <h2 className="text-white text-[38px] md:text-[50px] font-extrabold leading-tight">

                    Diverse movement.

                    <span className="block text-[#8FD14F]">
                      Strong foundation.
                    </span>

                  </h2>

                  <p className="text-white/65 text-lg leading-8 mt-7">
                    Every sport contributes something different. Together,
                    they help children develop the physical skills, confidence
                    and awareness they need to participate in an active life.
                  </p>

                </div>


                {/* Right visual */}
                <div className="bg-[#8FD14F] p-10 md:p-14 flex items-center justify-center">

                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">

                    {[
                      "Running",
                      "Balance",
                      "Coordination",
                      "Agility",
                      "Focus",
                      "Flexibility",
                    ].map((skill) => (

                      <div
                        key={skill}
                        className="bg-[#0B1220] rounded-2xl p-5 text-center"
                      >

                        <p className="text-white font-semibold">
                          {skill}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="bg-white py-15 mb-1">

          <div className="max-w-5xl mx-auto px-6 text-center ">

            <div className="w-16 h-1 bg-[#0B1220] rounded-full mx-auto mb-8" />

            <h2 className="text-[#0B1220] text-[40px] md:text-[56px] font-extrabold leading-tight mb-15">
              Seven sports. Diverse movement experiences.
            </h2>

          

            <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdbGapyT761HjsvQF4XM7hWNPyyXmkJ4CxbGDS1Fn8akj9wLw/viewform?usp=publish-editor"
              className="
             
                bg-[#0B1220]
                text-white
                px-8
                py-4
                rounded-full
                font-bold
                hover:bg-white
                hover:text-[#0B1220]
                transition-all
                duration-300
                hover:-translate-y-1
                shadow-lg
              "
            >
              Book a Free Demo
            </a>

          </div>

        </section>

      </main>
    </>
  );
};

export default Sports;