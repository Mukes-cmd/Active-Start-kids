import React from "react";
import Navbar from "../Components/Navbar";

const Partnership = () => {
  const steps = [
    {
      number: "01",
      title: "Understand the School",
      subtitle: "We begin by listening.",
      description:
        "We learn about your students, age groups, timetable, facilities and expectations to understand what will work best for your school.",
    },
    {
      number: "02",
      title: "Design the Programme",
      subtitle: "We create the right fit.",
      description:
        "The programme is planned around your school’s needs, with suitable sports, age-appropriate sessions and a practical delivery schedule.",
    },
    {
      number: "03",
      title: "Deliver the Sessions",
      subtitle: "Our trained coaches bring the programme to life.",
      description:
        "Children participate in structured, safe and joyful sessions designed to build movement skills, confidence and active participation.",
    },
    {
      number: "04",
      title: "Track and Support Progress",
      subtitle: "The partnership continues beyond each session.",
      description:
        "We track children’s development and work closely with the school to maintain consistent delivery, clear communication and a positive programme experience.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className=" bg-white min-h-screen">

        {/* ================= HERO ================= */}
        <section className="bg-[#0B1220] relative overflow-hidden">

          {/* Decorative elements */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full border border-[#8FD14F]/20" />

          <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full border border-[#8FD14F]/20" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-28">

            <div className="max-w-4xl">

              <div className="flex items-center gap-4 mb-7">
                <span className="w-12 h-[3px] bg-[#8FD14F]" />

                <span className="text-[#8FD14F] text-sm font-bold uppercase tracking-[3px]">
                  Our Partnership
                </span>
              </div>

              <h1 className="text-white text-[46px] md:text-[60px] lg:text-[68px] font-extrabold leading-tight">
                How the Partnership
                <span className="block text-[#8FD14F]">
                  Works
                </span>
              </h1>

              <p className="mt-7 text-white text-xl md:text-2xl leading-relaxed max-w-3xl">
                A simple, supported journey—from the first conversation to
                consistent programme delivery.
              </p>

              <p className="mt-6 text-white text-[17px] md:text-lg leading-8 max-w-3xl">
                Every school is different. We take the time to understand your
                priorities, design the right programme and support its delivery
                at every stage.
              </p>

            </div>

          </div>
        </section>


        {/* ================= JOURNEY ================= */}
        <section className="bg-white py-24">

          <div className="max-w-6xl mx-auto px-6 md:px-10">

            {/* Section heading */}
            <div className="text-center max-w-3xl mx-auto mb-20">

              <div className="inline-flex items-center gap-3 mb-5">

                <span className="w-10 h-[2px] bg-[#8FD14F]" />

                <span className="text-[#0B1220] text-sm font-bold uppercase tracking-[3px]">
                  The Journey
                </span>

                <span className="w-10 h-[2px] bg-[#8FD14F]" />

              </div>

              <h2 className="text-[#0B1220] text-[38px] md:text-[48px] font-extrabold">
                From conversation to
                <span className="text-[#8FD14F]">
                  {" "}impact
                </span>
              </h2>

            </div>


            {/* ================= STEPS ================= */}
            <div className="relative">

              {/* Connecting line */}
              <div className="hidden md:block absolute left-[43px] top-10 bottom-10 w-[2px] bg-[#8FD14F]" />

              <div className="space-y-10">

                {steps.map((step) => (

                  <div
                    key={step.number}
                    className="relative flex flex-col md:flex-row gap-7 md:gap-10 group"
                  >

                    {/* Number */}
                    <div className="relative z-10 shrink-0">

                      <div
                        className="
                          w-[86px]
                          h-[86px]
                          rounded-full
                          bg-[#8FD14F]
                          flex
                          items-center
                          justify-center
                          text-[#0B1220]
                          text-xl
                          font-extrabold
                          shadow-lg
                          group-hover:scale-110
                          transition-transform
                          duration-300
                        "
                      >
                        {step.number}
                      </div>

                    </div>


                    {/* Content */}
                    <div
                      className="
                        flex-1
                        bg-[#0B1220]
                        rounded-3xl
                        p-8
                        md:p-10
                        shadow-lg
                        group-hover:-translate-y-1
                        transition-all
                        duration-300
                      "
                    >

                      <h3 className="text-white text-2xl md:text-3xl font-bold">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-[#8FD14F] font-semibold text-lg">
                        {step.subtitle}
                      </p>

                      <p className="mt-4 text-white/65 text-[16px] md:text-lg leading-8 max-w-4xl">
                        {step.description}
                      </p>

                      {/* Bottom accent */}
                      <div className="mt-7 w-12 h-[3px] bg-[#8FD14F] rounded-full group-hover:w-24 transition-all duration-500" />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ================= COMPLETE SUPPORT ================= */}
        <section className="bg-[#8FD14F] py-24">

          <div className="max-w-6xl mx-auto px-6 md:px-10">

            <div className="bg-[#0B1220] rounded-[2rem] p-10 md:p-16 relative overflow-hidden">

              {/* Decorative circle */}
              <div className="absolute -right-28 -top-28 w-72 h-72 rounded-full border border-[#8FD14F]/20" />

              <div className="relative grid lg:grid-cols-[1fr_auto] gap-12 items-center">

                <div>

                  <div className="flex items-center gap-3 mb-6">

                    <span className="w-10 h-[3px] bg-[#8FD14F]" />

                    <span className="text-[#8FD14F] text-sm font-bold uppercase tracking-[3px]">
                      Complete Support
                    </span>

                  </div>

                  <h2 className="text-white text-[38px] md:text-[50px] font-extrabold leading-tight">
                    ActiveStart Kids becomes
                    <span className="block text-[#8FD14F]">
                      your school success partner!
                    </span>
                  </h2>

                  <p className="mt-7 text-white text-lg leading-8 max-w-3xl">
                    From planning and delivery to progress tracking,
                    ActiveStart Kids makes physical literacy simple for
                    schools to implement and meaningful for every child
                  </p>

                </div>


                {/* Visual */}
                <div className="flex justify-center">

                  <div className="w-40 h-40 rounded-full bg-[#8FD14F] flex items-center justify-center">

                    <div className="text-center">

                      <div className="text-[#0B1220] text-4xl font-black">
                        360°
                      </div>

                      <div className="text-[#0B1220] text-sm font-bold mt-1">
                        Support
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= FINAL STATEMENT ================= */}
        <section className="bg-white py-24">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <div className="w-16 h-1 bg-[#8FD14F] mx-auto rounded-full mb-8" />

            <h2 className="text-[#0B1220] text-[36px] md:text-[48px] font-extrabold leading-tight">
              One partnership!
              <span className="block text-[#8FD14F]">
                One shared goal!
              </span>
            </h2>

            <p className="mt-6 text-[#0B1220] text-lg md:text-xl leading-8 font-bold">
              Helping every child move confidently, participate joyfully
              and build an active foundation for life.
            </p>

          </div>

        </section>

      </main>
    </>
  );
};

export default Partnership;