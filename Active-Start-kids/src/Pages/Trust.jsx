import React from "react";
import Navbar from "../Components/Navbar";

const Trust = () => {
  const trustPoints = [
    {
      number: "01",
      title: "LTAD-Guided Curriculum",
      subtitle: "A foundation that develops progressively.",
      description:
        "Our curriculum is guided by Long-Term Athlete Development principles, helping children build essential movement skills in a structured and progressive way.",
    },
    {
      number: "02",
      title: "Trained Coaches",
      subtitle: "The right people make the difference.",
      description:
        "Coaches are trained to work with young children using clear instructions, positive encouragement and an engaging approach to movement.",
    },
    {
      number: "03",
      title: "Safety and Inclusion",
      subtitle: "Every child should feel comfortable participating.",
      description:
        "Sessions are designed to provide a safe, supportive and inclusive environment where children can learn, explore and progress at their own pace.",
    },
    {
      number: "04",
      title: "Age-Appropriate Planning",
      subtitle: "Activities matched to each stage of development.",
      description:
        "Session formats, instructions and movement challenges are planned around children’s age and ability—making learning enjoyable, achievable and meaningful.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className=" min-h-screen bg-white">

        {/* =====================================================
            HERO SECTION
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#0B1220]">

          {/* Decorative circles */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-[#8FD14F]/20" />

          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border border-[#8FD14F]/20" />

          <div className="absolute top-24 right-24 w-3 h-3 rounded-full bg-[#8FD14F]" />

          <div className="absolute bottom-24 left-24 w-4 h-4 rounded-full bg-[#8FD14F]/70" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-28">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Hero content */}
              <div>

                <div className="flex items-center gap-4 mb-7">

                  <span className="w-12 h-[3px] bg-[#8FD14F]" />

                  <span className="text-[#8FD14F] text-sm font-bold uppercase tracking-[3px]">
                    Trust & Credibility
                  </span>

                </div>

                <h1 className="text-white text-[46px] md:text-[60px] lg:text-[68px] font-extrabold leading-tight">

                  Trust and Programme

                  <span className="block text-[#8FD14F]">
                    Credibility
                  </span>

                </h1>

                <p className="mt-7 text-white text-xl md:text-2xl leading-relaxed max-w-3xl">
                  Thoughtfully designed for children.
                  <span className="block">
                    Professionally supported for schools.
                  </span>
                </p>

                <p className="mt-6 text-white text-[17px] md:text-lg leading-8 max-w-3xl">
                  For schools and parents, trust begins with knowing that every
                  session has been carefully planned, responsibly delivered and
                  designed around how young children learn and develop.
                </p>

              </div>


              {/* Hero visual */}
              <div className="flex justify-center lg:justify-end">

                <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">

                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-[#8FD14F]/20" />

                  {/* Middle ring */}
                  <div className="absolute inset-8 rounded-full border border-[#8FD14F]/30" />

                  {/* Inner circle */}
                  <div className="absolute inset-16 rounded-full bg-[#8FD14F] flex items-center justify-center">

                    <div className="text-center">

                      <div className="text-[#0B1220] text-[70px] md:text-[90px] font-black leading-none">
                        ✓
                      </div>

                      <p className="text-[#0B1220] text-xl md:text-2xl font-extrabold">
                        Trusted
                      </p>

                      <p className="text-[#0B1220]/70 text-sm mt-2">
                        Child-centred programme
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO STRIP
        ====================================================== */}

        <section className="bg-[#8FD14F] py-12">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <p className="text-[#0B1220] text-xl md:text-2xl font-bold leading-relaxed">
              Every session is thoughtfully planned around the needs,
              development and confidence of young children.
            </p>

          </div>

        </section>


        {/* =====================================================
            TRUST POINTS
        ====================================================== */}

        <section className="bg-white py-24">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            {/* Section heading */}
            <div className="max-w-3xl mb-16">

              <div className="flex items-center gap-3 mb-5">

                <span className="text-[#0B1220] text-sm font-bold uppercase tracking-[3px]">
                  Why schools can trust us
                </span>

                <span className="w-14 h-[2px] bg-[#8FD14F]" />

              </div>

              <h2 className="text-[#0B1220] text-[40px] md:text-[52px] font-extrabold leading-tight">
                Built around
                <span className="text-[#8FD14F]">
                  {" "}children first.
                </span>
              </h2>

              <p className="mt-5 text-[#0B1220] text-lg leading-8 font-bold">
                Our approach brings together progressive curriculum design,
                trained coaches, safety and age-appropriate planning.
              </p>

            </div>


            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-7">

              {trustPoints.map((point) => (

                <div
                  key={point.number}
                  className="
                    group
                    bg-[#0B1220]
                    rounded-3xl
                    p-8
                    md:p-10
                    relative
                    overflow-hidden
                    shadow-lg
                    hover:-translate-y-2
                    hover:shadow-2xl
                    transition-all
                    duration-500
                  "
                >

                  {/* Number */}
                  <div
                    className="
                      absolute
                      top-7
                      right-7
                      w-12
                      h-12
                      rounded-full
                      bg-[#8FD14F]
                      flex
                      items-center
                      justify-center
                      text-[#0B1220]
                      font-extrabold
                      text-sm
                      group-hover:scale-110
                      transition-transform
                      duration-300
                    "
                  >
                    {point.number}
                  </div>


                  {/* Accent */}
                  <div className="w-12 h-1 bg-[#8FD14F] rounded-full mb-7 group-hover:w-20 transition-all duration-500" />


                  <h3 className="text-white text-2xl md:text-3xl font-bold pr-16">
                    {point.title}
                  </h3>

                  <p className="text-[#8FD14F] font-semibold text-lg mt-4 leading-7">
                    {point.subtitle}
                  </p>

                  <p className="text-white/60 text-[16px] leading-8 mt-5">
                    {point.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            SCHOOL CONFIDENCE SECTION
        ====================================================== */}

        <section className="bg-[#8FD14F] py-24">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="bg-[#0B1220] rounded-[2rem] overflow-hidden">

              <div className="grid lg:grid-cols-2">

                {/* Content */}
                <div className="p-10 md:p-14 lg:p-16">

                  <div className="flex items-center gap-3 mb-6">

                    <span className="w-10 h-[3px] bg-[#8FD14F]" />

                    <span className="text-[#8FD14F] text-sm font-bold uppercase tracking-[3px]">
                      For Schools
                    </span>

                  </div>

                  <h2 className="text-white text-[38px] md:text-[50px] font-extrabold leading-tight">
                    A Programme Schools Can Deliver
                    <span className="block text-[#8FD14F]">
                      with Confidence
                    </span>
                  </h2>

                  <p className="text-white text-lg leading-8 mt-7 max-w-2xl">
                    ActiveStart Kids brings together thoughtful curriculum
                    design, trained delivery and child-centred planning to
                    provide schools with a purposeful approach to early-years
                    physical literacy.
                  </p>

                </div>


                {/* Visual */}
                <div className="bg-[#8FD14F] p-10 md:p-14 flex items-center justify-center">

                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">

                    <div className="bg-[#0B1220] rounded-2xl p-6 text-center">
                      <div className="text-[#8FD14F] text-3xl font-black">
                        01
                      </div>
                      <p className="text-white font-semibold mt-2">
                        Curriculum
                      </p>
                    </div>

                    <div className="bg-[#0B1220] rounded-2xl p-6 text-center">
                      <div className="text-[#8FD14F] text-3xl font-black">
                        02
                      </div>
                      <p className="text-white font-semibold mt-2">
                        Coaches
                      </p>
                    </div>

                    <div className="bg-[#0B1220] rounded-2xl p-6 text-center">
                      <div className="text-[#8FD14F] text-3xl font-black">
                        03
                      </div>
                      <p className="text-white font-semibold mt-2">
                        Safety
                      </p>
                    </div>

                    <div className="bg-[#0B1220] rounded-2xl p-6 text-center">
                      <div className="text-[#8FD14F] text-3xl font-black">
                        04
                      </div>
                      <p className="text-white font-semibold mt-2">
                        Support
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL STATEMENT
        ====================================================== */}

        <section className="bg-white py-24">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <div className="w-16 h-1 bg-[#8FD14F] rounded-full mx-auto mb-8" />

            <h2 className="text-[#0B1220] text-[38px] md:text-[52px] font-extrabold leading-tight">
              Structured with care.
            </h2>

            <h2 className="text-[#8FD14F] text-[38px] md:text-[52px] font-extrabold leading-tight">
              Delivered with purpose.
            </h2>

            <h2 className="text-[#0B1220] text-[38px] md:text-[52px] font-extrabold leading-tight">
              Designed for every child.
            </h2>

          </div>

        </section>

      </main>
    </>
  );
};

export default Trust;