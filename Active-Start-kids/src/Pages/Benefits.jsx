import React from "react";
import Navbar from "../Components/Navbar";

const Benefits = () => {
  return (
    <>
      <Navbar />

      <div className=" bg-[#F5F8F6] min-h-screen">

        {/* =====================================================
            HERO SECTION
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#0B1220]">

          {/* Decorative shapes */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#03A64B]/10" />

          <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-[#03A64B]/10" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Hero Content */}
              <div>

                <div className="flex items-center gap-3 mb-6">

                  <span className="w-12 h-[2px] bg-[#8FD14F]" />

                  <span className="text-[#8FD14F] text-sm font-bold uppercase tracking-[3px]">
                    The Benefits
                  </span>

                </div>

                <h1 className="text-white text-[46px] md:text-[60px] lg:text-[68px] font-extrabold leading-tight">

                  Benefits

                  <span className="block text-[#8FD14F]">
                    for Everyone
                  </span>

                </h1>

                <p className="mt-7 text-white text-[20px] md:text-[24px] leading-relaxed max-w-2xl">
                  When children move with confidence, everyone sees the
                  difference.
                </p>

                <p className="mt-6 text-white text-[17px] leading-8 max-w-2xl">
                  ActiveStart Kids creates value beyond the playground.
                  Children enjoy learning through movement, parents can
                  recognise meaningful progress, and schools strengthen their
                  commitment to whole-child development.
                </p>

              </div>


              {/* Hero Visual */}
              <div className="relative flex justify-center lg:justify-end">

                <div className="relative w-[330px] h-[330px] md:w-[390px] md:h-[390px]">

                  {/* Outer Circle */}
                  <div className="absolute inset-0 rounded-full border border-[#03A64B]/20" />

                  {/* Middle Circle */}
                  <div className="absolute inset-8 rounded-full border border-[#03A64B]/30" />

                  {/* Main Circle */}
                  <div className="absolute inset-16 rounded-full bg-[#8FD14F] flex items-center justify-center shadow-2xl">

                    <div className="text-center px-8">

                      <div className="text-[#0B1220] text-6xl font-extrabold">
                        3
                      </div>

                      <p className="text-[#0B1220] text-xl font-bold mt-2">
                        Communities
                      </p>

                      <p className="text-[#0B1220]/70 text-sm mt-2">
                        Children • Parents • Schools
                      </p>

                    </div>

                  </div>

                  {/* Decorative dots */}
                  <div className="absolute top-10 right-8 w-4 h-4 bg-[#8FD14F] rounded-full" />

                  <div className="absolute bottom-12 left-6 w-3 h-3 bg-white/60 rounded-full" />

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOR CHILDREN
        ====================================================== */}
        <section className="bg-white py-20">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            {/* Section Header */}
            <div className="max-w-3xl mb-12">

              <div className="flex items-center gap-3 mb-5">

                <span className="text-[#0B1220] text-sm font-bold uppercase tracking-[2px]">
                  For Children
                </span>

                <span className="h-px w-16 bg-[#8FD14F]" />

              </div>

              <h2 className="text-[#0B1220] text-[38px] md:text-[48px] font-bold leading-tight">

                Helping children

                <span className="text-[#8FD14F]">
                  {" "}move with confidence
                </span>

              </h2>

            </div>


            {/* Children Cards */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Card 1 */}
              <div className="group bg-[#F5F8F6] rounded-3xl p-8 border border-[#D4EBDD] hover:bg-[#0B1220] transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-[#8FD14F] flex items-center justify-center text-[#0B1220] font-bold text-xl mb-7">
                  01
                </div>

                <h3 className="text-[#0B1220] group-hover:text-white text-2xl font-bold mb-3 transition-colors">
                  Confidence to Participate
                </h3>

                <p className="text-gray-600 group-hover:text-white/65 leading-7 transition-colors">
                  Children feel more comfortable joining games, trying new
                  movements and learning at their own pace.
                </p>

              </div>


              {/* Card 2 */}
              <div className="group bg-[#F5F8F6] rounded-3xl p-8 border border-[#D4EBDD] hover:bg-[#0B1220] transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-[#8FD14F] flex items-center justify-center text-[#0B1220] font-bold text-xl mb-7">
                  02
                </div>

                <h3 className="text-[#0B1220] group-hover:text-white text-2xl font-bold mb-3 transition-colors">
                  Strong Movement Foundations
                </h3>

                <p className="text-gray-600 group-hover:text-white/65 leading-7 transition-colors">
                  Running, jumping, balancing, throwing, catching and
                  coordination prepare children for different sports and
                  everyday physical activity.
                </p>

              </div>


              {/* Card 3 */}
              <div className="group bg-[#F5F8F6] rounded-3xl p-8 border border-[#D4EBDD] hover:bg-[#0B1220] transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-[#8FD14F] flex items-center justify-center text-[#0B1220] font-bold text-xl mb-7">
                  03
                </div>

                <h3 className="text-[#0B1220] group-hover:text-white text-2xl font-bold mb-3 transition-colors">
                  Joyful, Pressure-Free Learning
                </h3>

                <p className="text-gray-600 group-hover:text-white/65 leading-7 transition-colors">
                  Age-appropriate activities make every session engaging,
                  inclusive and achievable—not only for children who are
                  naturally sporty.
                </p>

              </div>


              {/* Card 4 */}
              <div className="group bg-[#F5F8F6] rounded-3xl p-8 border border-[#D4EBDD] hover:bg-[#0B1220] transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-[#8FD14F] flex items-center justify-center text-[#0B1220] font-bold text-xl mb-7">
                  04
                </div>

                <h3 className="text-[#0B1220] group-hover:text-white text-2xl font-bold mb-3 transition-colors">
                  Skills That Go Beyond Sport
                </h3>

                <p className="text-gray-600 group-hover:text-white/65 leading-7 transition-colors">
                  Through movement, children also develop motivation,
                  teamwork, resilience and self-belief.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOR PARENTS
        ====================================================== */}
        <section className="bg-[#EAF7EF] py-20">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="grid lg:grid-cols-[320px_1fr] gap-14 items-start">

              {/* Side Heading */}
              <div className="lg:sticky lg:top-28">

                <div className="w-16 h-1 bg-[#0B1220] rounded-full mb-6" />

                <p className="text-[#0B1220] text-sm font-bold uppercase tracking-[2px] mb-4">
                  For Parents
                </p>

                <h2 className="text-[#0B1220] text-[38px] md:text-[46px] font-bold leading-tight">

                  Confidence you

                  <span className="block text-[#8FD14F]">
                    can see.
                  </span>

                </h2>

              </div>


              {/* Parent Cards */}
              <div className="grid md:grid-cols-2 gap-5">

                {/* Card 1 */}
                <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">

                  <span className="text-[#8FD14F] text-sm font-bold">
                    01
                  </span>

                  <h3 className="text-[#0B1220] text-xl font-bold mt-4 mb-3">
                    Meaningful Progress They Can See
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Parents can better understand how their child’s movement
                    skills, participation and confidence are developing over
                    time.
                  </p>

                </div>


                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">

                  <span className="text-[#8FD14F] text-sm font-bold">
                    02
                  </span>

                  <h3 className="text-[#0B1220] text-xl font-bold mt-4 mb-3">
                    Reassurance in Every Session
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Structured activities, trained coaches and an
                    age-appropriate approach give parents confidence in their
                    child’s experience.
                  </p>

                </div>


                {/* Card 3 */}
                <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">

                  <span className="text-[#8FD14F] text-sm font-bold">
                    03
                  </span>

                  <h3 className="text-[#0B1220] text-xl font-bold mt-4 mb-3">
                    Healthy Habits from the Start
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Positive early experiences help children enjoy movement
                    and build a lasting connection with an active lifestyle.
                  </p>

                </div>


                {/* Card 4 */}
                <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">

                  <span className="text-[#8FD14F] text-sm font-bold">
                    04
                  </span>

                  <h3 className="text-[#0B1220] text-xl font-bold mt-4 mb-3">
                    More Than Playtime
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Every activity is thoughtfully planned to help children
                    move, learn and grow with purpose.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOR SCHOOLS
        ====================================================== */}
        <section className="bg-white py-20">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="max-w-3xl mb-12">

              <div className="flex items-center gap-3 mb-5">

                <span className="text-[#0B1220] text-sm font-bold uppercase tracking-[2px]">
                  For Schools
                </span>

                <span className="h-px w-16 bg-[#8FD14F]" />

              </div>

              <h2 className="text-[#0B1220] text-[38px] md:text-[48px] font-bold leading-tight">

                Strengthening the

                <span className="text-[#8FD14F]">
                  {" "}whole-child approach
                </span>

              </h2>

            </div>


            {/* School Features */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* School Card 1 */}
              <div className="bg-[#0B1220] rounded-3xl p-8">

                <span className="text-[#8FD14F] font-bold">
                  01
                </span>

                <h3 className="text-white text-2xl font-bold mt-5 mb-4">
                  A Stronger Early-Years Programme
                </h3>

                <p className="text-white/65 leading-7">
                  A structured physical literacy curriculum adds meaningful
                  value to the school’s whole-child development approach.
                </p>

              </div>


              {/* School Card 2 */}
              <div className="bg-[#EAF7EF] rounded-3xl p-8">

                <span className="text-[#8FD14F] font-bold">
                  02
                </span>

                <h3 className="text-[#0B1220] text-2xl font-bold mt-5 mb-4">
                  Greater Parent Trust
                </h3>

                <p className="text-gray-600 leading-7">
                  Visible progress and purposeful sessions help parents
                  recognise the school’s commitment to their child’s
                  development.
                </p>

              </div>


              {/* School Card 3 */}
              <div className="bg-[#EAF7EF] rounded-3xl p-8">

                <span className="text-[#8FD14F] font-bold">
                  03
                </span>

                <h3 className="text-[#0B1220] text-2xl font-bold mt-5 mb-4">
                  A Clear Point of Difference
                </h3>

                <p className="text-gray-600 leading-7">
                  A well-delivered physical literacy programme strengthens
                  the school’s positioning with both current and prospective
                  parents.
                </p>

              </div>


              {/* School Card 4 */}
              <div className="bg-[#0B1220] rounded-3xl p-8">

                <span className="text-[#8FD14F] font-bold">
                  04
                </span>

                <h3 className="text-white text-2xl font-bold mt-5 mb-4">
                  Consistent, Supported Delivery
                </h3>

                <p className="text-white/65 leading-7">
                  Trained coaches, progress tracking and dedicated school
                  success support make implementation smooth and reliable.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL MESSAGE
        ====================================================== */}
        <section className="bg-white py-15 mb-1">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <div className="w-16 h-1 bg-[#0B1220] rounded-full mx-auto mb-8" />

            <p className="text-[#0B1220] text-sm font-bold uppercase tracking-[3px] mb-5">
              Shared Progress
            </p>

            <h2 className="text-[#0B1220] text-[38px] md:text-[52px] font-bold leading-tight">

              One Programme.

              <span className="block text-[#8FD14F]">
                Shared Progress.
              </span>

            </h2>

            <p className="text-[#0B1220] text-[18px] md:text-[21px] leading-9 max-w-4xl mx-auto mt-7 font-bold">
              ActiveStart Kids brings children, parents and schools together
              around one simple goal: helping every child move confidently,
              participate joyfully and build an active foundation for life.
            </p>

          </div>

        </section>

      </div>
    </>
  );
};

export default Benefits;