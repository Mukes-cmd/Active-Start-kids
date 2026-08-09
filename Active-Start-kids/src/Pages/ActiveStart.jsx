import React from "react";
import Navbar from "../Components/Navbar";

const ActiveStart = () => {
  return (
    <>
      <Navbar />

      <div className=" bg-[#F8F9FA] min-h-screen">

        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-[#0B1220]">

          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#D4A017]/10 rounded-full" />
          <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-[#D4A017]/10 rounded-full" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24">

            <div className="max-w-4xl">

              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-10 h-[2px] bg-[#8FD14F]" />

                <span className="text-[#8FD14F] text-sm font-bold uppercase tracking-[3px]">
                  ActiveStart Kids
                </span>
              </div>

              <h1 className="text-white text-[42px] md:text-[58px] lg:text-[68px] font-extrabold leading-tight">
                The ActiveStart Kids
                <span className="block text-[#8FD14F]">
                  Approach
                </span>
              </h1>

              <p className="mt-8 text-white text-[20px] md:text-[23px] leading-relaxed max-w-3xl">
                A complete physical literacy programme, thoughtfully designed
                for the early years.
              </p>

            </div>

          </div>
        </section>


        {/* ================= INTRODUCTION ================= */}
        <section className="bg-white py-20">

          <div className="max-w-6xl mx-auto px-6 md:px-10">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* Text */}
              <div>

                <p className="text-[#8FD14F] text-sm font-bold uppercase tracking-[2px] mb-4">
                  Our Approach
                </p>

                <h2 className="text-[#0B1220] text-[34px] md:text-[42px] font-bold leading-tight mb-6">
                  Movement should feel
                  <span className="text-[#8FD14F]"> joyful.</span>
                </h2>

                <p className="text-gray-600 text-[18px] leading-8">
                  Children learn best when movement feels joyful, achievable
                  and meaningful. The ActiveStart Kids approach combines a
                  structured curriculum, multiple sports and trained coaches
                  to help every child build essential movement skills—at the
                  right pace and in a positive environment.
                </p>

              </div>


              {/* Visual */}
              <div className="relative">

                <div className="bg-[#0B1220] rounded-3xl p-10 md:p-12 shadow-2xl">

                  <div className="w-14 h-14 rounded-2xl bg-[#8FD14F] flex items-center justify-center mb-8">
                    <span className="text-[#0B1220] text-2xl font-bold">
                      ↗
                    </span>
                  </div>

                  <p className="text-white text-[25px] md:text-[30px] font-bold leading-relaxed">
                    “Movement is the foundation.
                    <span className="text-[#D4A017]">
                      {" "}Sport is the medium.
                    </span>
                    {" "}Physical literacy is the outcome.”
                  </p>

                </div>

                {/* Small decorative block */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#8FD14F] rounded-2xl -z-0" />

              </div>

            </div>

          </div>

        </section>


        {/* ================= FEATURES ================= */}
        <section className="py-20 bg-[#F8F9FA]">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            {/* Section Heading */}
            <div className="max-w-3xl mb-14">

              <p className="text-[#8FD14F] text-sm font-bold uppercase tracking-[2px] mb-4">
                What We Provide
              </p>

              <h2 className="text-[#0B1220] text-[36px] md:text-[46px] font-bold leading-tight">
                Everything Schools Need to Deliver
                <span className="text-[#8FD14F]">
                  {" "}Meaningful Movement Education
                </span>
              </h2>

            </div>


            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Card 1 */}
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                <div className="w-12 h-12 rounded-xl bg-[#0B1220] text-[#8FD14F] flex items-center justify-center text-xl font-bold mb-7 group-hover:bg-[#8FD14F] group-hover:text-[#0B1220] transition-colors">
                  01
                </div>

                <h3 className="text-[#0B1220] text-[22px] font-bold mb-3">
                  Structured Curriculum
                </h3>

                <p className="text-[#8FD14F] font-semibold italic mb-4">
                  Every session has a purpose.
                </p>

                <p className="text-gray-600 leading-7">
                  Our structured curriculum helps children progressively
                  develop fundamental movement skills, confidence and a
                  positive relationship with physical activity.
                </p>

              </div>


              {/* Card 2 */}
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                <div className="w-12 h-12 rounded-xl bg-[#0B1220] text-[#8FD14F]flex items-center justify-center text-xl font-bold mb-7 group-hover:bg-[#8FD14F] group-hover:text-[#0B1220] transition-colors">
                  02
                </div>

                <h3 className="text-[#0B1220] text-[22px] font-bold mb-3">
                  Seven Sports
                </h3>

                <p className="text-[#D4A017] font-semibold italic mb-4">
                  Different sports. Broader development.
                </p>

                <p className="text-gray-600 leading-7">
                  Children experience seven sports that introduce them to a
                  wide range of movements and help build a strong foundation
                  for future participation.
                </p>

              </div>


              {/* Card 3 */}
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                <div className="w-12 h-12 rounded-xl bg-[#0B1220] text-[#8FD14F] flex items-center justify-center text-xl font-bold mb-7 group-hover:bg-[#8FD14F] group-hover:text-[#0B1220] transition-colors">
                  03
                </div>

                <h3 className="text-[#0B1220] text-[22px] font-bold mb-3">
                  Trained Coaches
                </h3>

                <p className="text-[#8FD14F] font-semibold italic mb-4">
                  The right guidance makes every child feel included.
                </p>

                <p className="text-gray-600 leading-7">
                  Our coaches are trained to engage young children with
                  patience, encouragement and age-appropriate instruction—
                  creating a safe and joyful learning experience.
                </p>

              </div>


              {/* Card 4 */}
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                <div className="w-12 h-12 rounded-xl bg-[#0B1220] text-[#8FD14F] flex items-center justify-center text-xl font-bold mb-7 group-hover:bg-[#8FD14F] group-hover:text-[#0B1220] transition-colors">
                  04
                </div>

                <h3 className="text-[#0B1220] text-[22px] font-bold mb-3">
                  Age-Appropriate Sessions
                </h3>

                <p className="text-[#8FD14F] font-semibold italic mb-4">
                  Designed around how young children learn.
                </p>

                <p className="text-gray-600 leading-7">
                  Sessions use simple instructions, engaging activities and
                  achievable challenges suited to each age group, helping
                  children learn without pressure.
                </p>

              </div>


              {/* Card 5 */}
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                <div className="w-12 h-12 rounded-xl bg-[#0B1220] text-[#8FD14F] flex items-center justify-center text-xl font-bold mb-7 group-hover:bg-[#8FD14F] group-hover:text-[#0B1220] transition-colors">
                  05
                </div>

                <h3 className="text-[#0B1220] text-[22px] font-bold mb-3">
                  Progress Tracking
                </h3>

                <p className="text-[#D4A017] font-semibold italic mb-4">
                  Development schools and parents can recognise.
                </p>

                <p className="text-gray-600 leading-7">
                  Children’s participation and movement development are
                  tracked over time, helping schools and parents understand
                  their progress and celebrate meaningful milestones.
                </p>

              </div>


              {/* Card 6 */}
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                <div className="w-12 h-12 rounded-xl bg-[#0B1220] text-[#8FD14F] flex items-center justify-center text-xl font-bold mb-7 group-hover:bg-[#8FD14F] group-hover:text-[#0B1220] transition-colors">
                  06
                </div>

                <h3 className="text-[#0B1220] text-[22px] font-bold mb-3">
                  School Success Support
                </h3>

                <p className="text-[#8FD14F] font-semibold italic mb-4">
                  A programme supported beyond the playground.
                </p>

                <p className="text-gray-600 leading-7">
                  Our school success team works closely with school leaders
                  and coordinators to support smooth implementation, regular
                  communication and a consistent programme experience.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= MORE THAN SPORTS ================= */}
        <section className=" py-15 mb-1">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <p className="text-[#0B1220] text-sm font-bold uppercase tracking-[3px] mb-5">
              Beyond Sports
            </p>

            <h2 className="text-[#8FD14F] text-[38px] md:text-[50px] font-bold mb-8">
              More Than Sports Sessions
            </h2>

            <p className="text-[#0B1220]  text-[18px] md:text-[21px] leading-9 max-w-4xl mx-auto font-bold">
              ActiveStart Kids gives schools a complete system for delivering
              structured and inclusive movement education—helping every child
              participate with greater skill, confidence and joy.
            </p>


            {/* Bottom accent */}
            <div className="flex justify-center mt-10">
              <div className="w-20 h-1 bg-[#8FD14F] rounded-full" />
            </div>

          </div>

        </section>

      </div>
    </>
  );
};

export default ActiveStart;