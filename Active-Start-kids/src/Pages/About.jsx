import React from "react";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
    <Navbar/>
      <div className=" min-h-screen bg-white">

        {/* ================= HERO ================= */}
        <section className="bg-[#0B1220] text-white relative overflow-hidden">

          {/* Decorative shapes */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#8FD14F]/10" />
          <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-[#8FD14F]/10" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Hero Text */}
              <div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-[3px] bg-[#8FD14F]" />

                  <span className="text-[#8FD14F] text-sm font-bold uppercase tracking-[3px]">
                    About ActiveStart Kids
                  </span>
                </div>

                <h1 className="text-[46px] md:text-[60px] lg:text-[68px] font-extrabold leading-tight">
                  Helping children
                  <span className="block text-[#8FD14F]">
                    move with confidence.
                  </span>
                </h1>

                <p className="mt-7 text-white text-xl md:text-2xl leading-relaxed max-w-2xl">
                  Learn with joy. Grow for life.
                </p>

              </div>


              {/* Visual */}
              <div className="flex justify-center lg:justify-end">

                <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">

                  <div className="absolute inset-0 rounded-full border border-[#8FD14F]/20" />

                  <div className="absolute inset-8 rounded-full border border-[#8FD14F]/30" />

                  <div className="absolute inset-16 rounded-full bg-[#8FD14F] flex items-center justify-center">

                    <div className="text-center px-8">

                      <div className="text-[#0B1220] text-5xl md:text-6xl font-extrabold">
                        MOVE
                      </div>

                      <div className="text-[#0B1220] text-xl font-bold mt-2">
                        LEARN
                      </div>

                      <div className="text-[#0B1220] text-xl font-bold">
                        GROW
                      </div>

                    </div>

                  </div>

                  <div className="absolute top-8 right-5 w-4 h-4 rounded-full bg-[#8FD14F]" />

                  <div className="absolute bottom-10 left-5 w-3 h-3 rounded-full bg-white/60" />

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= INTRO ================= */}
        <section className="py-20 bg-white">

          <div className="max-w-6xl mx-auto px-6 md:px-10">

            <div className="max-w-4xl">

              <h2 className="text-[#0B1220] text-3xl md:text-4xl font-bold leading-tight">
                Children are naturally curious, energetic and eager to move.
              </h2>

              <div className="w-16 h-1 bg-[#8FD14F] rounded-full my-8" />

              <p className="text-gray-600 text-lg leading-8">
                But developing the right movement skills requires more than
                simply giving them time to play—it needs thoughtful guidance,
                encouragement and age-appropriate experiences.
              </p>

              <p className="text-[#0B1220] text-2xl md:text-3xl font-bold mt-10">
                That is where ActiveStart Kids comes in.
              </p>

            </div>

          </div>

        </section>


        {/* ================= PHYSICAL LITERACY ================= */}
        <section className="bg-[#8FD14F] py-20">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <p className="text-[#0B1220] text-sm font-bold uppercase tracking-[3px] mb-5">
                  Our Purpose
                </p>

                <h2 className="text-[#0B1220] text-4xl md:text-5xl font-extrabold leading-tight">
                  Building physical literacy for life.
                </h2>

              </div>


              <div>

                <p className="text-[#0B1220]/80 text-lg leading-8">
                  We partner with preschools and early-years schools to help
                  children build physical literacy: the confidence, competence
                  and motivation to enjoy movement and remain active throughout
                  life.
                </p>

                <p className="text-[#0B1220]/80 text-lg leading-8 mt-6">
                  Through joyful games, guided play and multi-sport activities,
                  children learn to run, jump, balance, throw, catch and move
                  with greater control. Along the way, they also develop
                  teamwork, communication, resilience and belief in their own
                  abilities.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= OUR APPROACH ================= */}
        <section className="bg-[#F7F9F5] py-20">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="max-w-4xl mb-12">

              <p className="text-[#8FD14F] bg-[#0B1220] inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                Our Approach
              </p>

              <h2 className="text-[#0B1220] text-4xl md:text-5xl font-bold mt-6">
                More than conventional sports classes.
              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-6">
                Our programme goes beyond conventional sports classes.
                Instead of focusing on a single sport, we build the essential
                movement foundation every child needs before progressing into
                sports and more complex physical activities.
              </p>

            </div>


            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-[#0B1220] rounded-3xl p-8">
                <div className="text-[#8FD14F] text-4xl font-extrabold">
                  01
                </div>

                <h3 className="text-white text-xl font-bold mt-6">
                  Age-Appropriate Curriculum
                </h3>

                <p className="text-white/60 leading-7 mt-4">
                  Designed around how young children learn, move and develop.
                </p>
              </div>


              <div className="bg-white rounded-3xl p-8 border border-gray-200">
                <div className="text-[#8FD14F] text-4xl font-extrabold">
                  02
                </div>

                <h3 className="text-[#0B1220] text-xl font-bold mt-6">
                  Trained Coaches
                </h3>

                <p className="text-gray-600 leading-7 mt-4">
                  Delivered by trained coaches in a safe, inclusive and
                  encouraging environment.
                </p>
              </div>


              <div className="bg-[#0B1220] rounded-3xl p-8">
                <div className="text-[#8FD14F] text-4xl font-extrabold">
                  03
                </div>

                <h3 className="text-white text-xl font-bold mt-6">
                  Long-Term Development
                </h3>

                <p className="text-white/60 leading-7 mt-4">
                  Guided by Long-Term Athlete Development principles to build
                  strong foundations.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= FOR SCHOOLS ================= */}
        <section className="bg-white py-20">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <p className="text-[#8FD14F] text-sm font-bold uppercase tracking-[3px] mb-5">
                  For Schools
                </p>

                <h2 className="text-[#0B1220] text-4xl md:text-5xl font-extrabold leading-tight">
                  A complete physical literacy programme.
                </h2>

              </div>


              <div className="bg-[#0B1220] rounded-3xl p-8 md:p-10">

                <p className="text-white/70 text-lg leading-8">
                  For schools, we provide a complete physical literacy
                  programme—from structured curriculum and lesson planning to
                  trained coaches, progress tracking and ongoing support.
                </p>

                <div className="mt-8 h-px bg-white/10" />

                <p className="text-[#8FD14F] text-lg font-semibold leading-8 mt-7">
                  This helps schools strengthen child-development outcomes,
                  earn greater parent trust and offer a meaningful point of
                  difference.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CLOSING ================= */}
        <section className=" py-15 mb-1">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <div className="w-16 h-1 bg-[#8FD14F] mx-auto rounded-full mb-8" />

            <h2 className="text-[#0B1220] text-4xl md:text-5xl font-extrabold leading-tight">
              Every child deserves the opportunity to
              <span className="text-[#8FD14F]">
                {" "}enjoy movement.
              </span>
            </h2>

            <p className="text-[#0B1220]text-lg md:text-xl leading-8 max-w-4xl mx-auto mt-7">
              At ActiveStart Kids, we believe every child deserves the
              opportunity to enjoy movement, discover their potential and grow
              with an active mind and body.
            </p>

          

          </div>

        </section>

      </div>
    </>
  );
};

export default About;