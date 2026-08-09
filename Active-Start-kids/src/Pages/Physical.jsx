import React from "react";
import Navbar from "../Components/Navbar";

const Physical = () => {
  return (
    <>
      <Navbar />

      <div className=" bg-[#F8F9FA] min-h-screen">

        {/* =====================================================
            HERO SECTION
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#0B1220]">

          {/* Decorative circles */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D4A017]/10" />
          <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-[#D4A017]/10" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* Left */}
              <div>

                <div className="flex items-center gap-3 mb-6">

                  <span className="w-12 h-[2px] bg-[#8FD14F]" />

                  <span className="text-[#8FD14F] text-sm font-bold uppercase tracking-[3px]">
                    Physical Literacy
                  </span>

                </div>

                <h1 className="text-white text-[44px] md:text-[58px] lg:text-[64px] font-extrabold leading-tight">
                  Why Physical
                  <span className="block text-[#8FD14F]">
                    Literacy Matters
                  </span>
                </h1>

                <p className="mt-7 text-white text-[20px] md:text-[24px] leading-relaxed max-w-2xl">
                  Every child deserves to feel confident when they move.
                </p>

              </div>


              {/* Right Visual */}
              <div className="relative flex justify-center lg:justify-end">

                <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px]">

                  {/* Outer circle */}
                  <div className="absolute inset-0 rounded-full border border-[#D4A017]/30" />

                  {/* Middle circle */}
                  <div className="absolute inset-8 rounded-full border border-[#D4A017]/40" />

                  {/* Inner */}
                  <div className="absolute inset-16 rounded-full bg-[#8FD14F] flex items-center justify-center shadow-2xl">

                    <div className="text-center px-8">

                      <div className="text-[#0B1220] text-5xl font-extrabold">
                        01
                      </div>

                      <p className="text-[#0B1220] font-bold text-lg mt-2">
                        Move
                      </p>

                      <p className="text-[#0B1220]/70 text-sm mt-1">
                        Learn • Explore • Grow
                      </p>

                    </div>

                  </div>

                  {/* Decorative dots */}
                  <div className="absolute top-8 right-10 w-4 h-4 bg-[#8FD14F] rounded-full" />
                  <div className="absolute bottom-10 left-8 w-3 h-3 bg-white/60 rounded-full" />

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRODUCTION
        ====================================================== */}
        <section className="bg-white py-20">

          <div className="max-w-6xl mx-auto px-6 md:px-10">

            <div className="grid lg:grid-cols-[1fr_280px] gap-14 items-start">

              {/* Content */}
              <div>

                <div className="flex items-center gap-3 mb-5">

                  <span className="text-[#8FD14F] text-sm font-bold uppercase tracking-[2px]">
                    Why It Matters
                  </span>

                  <span className="h-px w-16 bg-[#8FD14F]" />

                </div>

                <p className="text-gray-600 text-[18px] leading-8">
                  The early years are when children begin discovering what
                  their bodies can do. Yet modern routines often provide
                  fewer opportunities to run, jump, balance, throw, catch
                  and play with confidence. Without the right movement
                  foundation, some children may hesitate to participate—not
                  because they lack ability, but because they have not yet
                  had enough opportunities to develop these essential skills.
                </p>

              </div>


              {/* Visual Card */}
              <div className="bg-[#0B1220] rounded-3xl p-8 shadow-xl">

                <div className="text-[#8FD14F] text-5xl font-bold">
                  5+
                </div>

                <p className="text-white text-lg font-semibold mt-3">
                  Essential movement patterns
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  <span className="px-3 py-2 rounded-full bg-white/10 text-white/70 text-sm">
                    Run
                  </span>

                  <span className="px-3 py-2 rounded-full bg-white/10 text-white/70 text-sm">
                    Jump
                  </span>

                  <span className="px-3 py-2 rounded-full bg-white/10 text-white/70 text-sm">
                    Balance
                  </span>

                  <span className="px-3 py-2 rounded-full bg-white/10 text-white/70 text-sm">
                    Throw
                  </span>

                  <span className="px-3 py-2 rounded-full bg-white/10 text-white/70 text-sm">
                    Catch
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MOVEMENT IS A LANGUAGE
        ====================================================== */}
        <section className="bg-[#F8F8F6] py-20">

          <div className="max-w-6xl mx-auto px-6 md:px-10">

            <div className="max-w-4xl mb-12">

              <p className="text-[#8FD14F] text-sm font-bold uppercase tracking-[2px] mb-4">
                Building The Foundation
              </p>

              <h2 className="text-[#0B1220] text-[36px] md:text-[46px] font-bold leading-tight">
                Movement is a language
                <span className="text-[#8FD14F]">
                  {" "}children learn
                </span>
              </h2>

              <p className="text-gray-600 text-[18px] leading-8 mt-5">
                Just as children first learn letters and sounds before they
                can read, they need to develop basic movement skills before
                they can participate confidently in games, sports and
                everyday physical activity.
              </p>

            </div>


            {/* Foundation Visual */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Foundation */}
              <div className="group bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider">
                      The Foundation
                    </p>

                    <h3 className="text-[#0B1220] text-3xl font-bold mt-2">
                      Letters
                    </h3>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-[#0B1220] text-[#8FD14F] flex items-center justify-center text-2xl font-bold">
                    A
                  </div>

                </div>

                <div className="mt-8 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-[#8FD14F] rounded-full" />
                </div>

              </div>


              {/* Outcome */}
              <div className="group  rounded-3xl p-8 shadow-xl hover:-translate-y-1 transition-all duration-300">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-black text-sm uppercase tracking-wider">
                      The Outcome
                    </p>

                    <h3 className="text-black text-3xl font-bold mt-2">
                      Reading
                    </h3>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-[#8FD14F] text-[#0B1220] flex items-center justify-center text-2xl font-bold">
                    ✓
                  </div>

                </div>

                <div className="mt-8 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-[#8FD14F] rounded-full" />
                </div>

              </div>

            </div>


            {/* Movement → Confidence */}
            <div className="mt-6 bg-[#8FD14F] rounded-3xl border border-gray-200     shadow-sm p-8">

              <div className="grid md:grid-cols-3 items-center gap-6">

                <div>
                  <p className="text-[#0B1220] text-sm uppercase tracking-wider">
                    Foundation
                  </p>

                  <h3 className="text-[#0B1220] text-2xl font-bold mt-2">
                    Movement Skills
                  </h3>
                </div>


                <div className="flex justify-center">

                  <div className="w-14 h-14 rounded-full bg-[#8FD14F] flex items-center justify-center text-[#0B1220] text-xl font-bold">
                    →
                  </div>

                </div>


                <div>
                  <p className="text-[#0B1220] text-sm uppercase tracking-wider">
                    Outcome
                  </p>

                  <h3 className="text-[#0B1220] text-2xl font-bold mt-2">
                    Confident Participation
                  </h3>
                </div>

              </div>

            </div>


            {/* Definition */}
            <div className="mt-10 bg-[#0B1220] rounded-3xl p-8 md:p-10">

              <div className="flex gap-5">

                <div className="hidden md:block w-1 bg-[#8FD14F] rounded-full" />

                <p className="text-white/75 text-[18px] leading-8">
                  Physical literacy means having the{" "}
                  <span className="text-[#8FD14F] font-bold">
                    skills, confidence, motivation and understanding
                  </span>{" "}
                  to move well and enjoy being active. It gives every
                  child—not only the naturally sporty ones—a positive and
                  inclusive starting point.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOUNDATION BEHIND EVERY SPORT
        ====================================================== */}
        <section className="bg-white py-20">

          <div className="max-w-6xl mx-auto px-6 md:px-10">

            <div className="max-w-4xl mb-12">

              <p className="text-[#8FD14F] text-sm font-bold uppercase tracking-[2px] mb-4">
                Beyond One Sport
              </p>

              <h2 className="text-[#0B1220] text-[36px] md:text-[46px] font-bold leading-tight">
                The foundation behind
                <span className="text-[#8FD14F]">
                  {" "}every sport
                </span>
              </h2>

              <p className="text-gray-600 text-[18px] leading-8 mt-5">
                Conventional sports classes introduce children to the
                techniques and rules of a particular sport. Physical literacy
                begins one step earlier by developing the movement abilities
                that help children participate successfully across many
                sports and activities.
              </p>

            </div>


            {/* Comparison */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">

              {/* Header */}
              <div className="grid grid-cols-2 bg-[#0B1220] text-white">

                <div className="p-6 font-bold text-lg border-r border-white/10">
                  Conventional Sports Classes
                </div>

                <div className="p-6 font-bold text-lg">
                  Physical Literacy
                </div>

              </div>


              {/* Row 1 */}
              <div className="grid grid-cols-2 border-t border-gray-200">

                <div className="p-6 text-gray-600 bg-gray-50">
                  Often focus on one sport
                </div>

                <div className="p-6 text-[#0B1220] font-medium">
                  Builds a broad movement foundation
                </div>

              </div>


              {/* Row 2 */}
              <div className="grid grid-cols-2 border-t border-gray-200">

                <div className="p-6 text-gray-600 bg-gray-50">
                  Teach sport-specific techniques
                </div>

                <div className="p-6 text-[#0B1220] font-medium">
                  Develops running, jumping, balancing, throwing, catching
                  and coordination
                </div>

              </div>


              {/* Row 3 */}
              <div className="grid grid-cols-2 border-t border-gray-200">

                <div className="p-6 text-gray-600 bg-gray-50">
                  May focus on performance or competition
                </div>

                <div className="p-6 text-[#0B1220] font-medium">
                  Encourages confidence, progress and participation
                </div>

              </div>


              {/* Row 4 */}
              <div className="grid grid-cols-2 border-t border-gray-200">

                <div className="p-6 text-gray-600 bg-gray-50">
                  Helps children learn a sport
                </div>

                <div className="p-6 text-[#0B1220] font-medium">
                  Prepares children for different sports and an active life
                </div>

              </div>

            </div>


            {/* Final paragraph */}
            <div className="mt-10 max-w-5xl">

              <p className="text-gray-600 text-[18px] leading-8">
                Physical literacy does not replace sports—it helps children
                get more from them. When children feel capable and confident
                in movement, they are more willing to participate, try new
                activities and enjoy being active.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA / MESSAGE
        ====================================================== */}
        <section className="bg-white  py-10 mb-1">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <div className="w-16 h-1 bg-[#8FD14F] rounded-full mx-auto mb-8" />

            <h2 className="text-bg-[#8FD14F] text-[38px] md:text-[50px] font-bold leading-tight">
              Give every child the confidence
              <span className="block text-[#8FD14F]">
                to move.
              </span>
            </h2>

            <p className="text-white/65 text-[18px] md:text-[20px] leading-8 max-w-3xl mx-auto mt-6">
              Physical literacy creates a positive and inclusive starting
              point for children to participate, explore and enjoy being
              active.
            </p>

          </div>

        </section>

      </div>
    </>
  );
};

export default Physical;