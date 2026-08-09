import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const PageOne = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Navbar />

      {/* ================= SIDEBAR ================= */}

      <div
        className="
          absolute
          left-0
          top-20
          bottom-0
          w-1/5
          min-w-[250px]
          bg-gradient-to-b
          from-[#0B1220]
          to-[#080E1A]
          overflow-y-auto
          sidebar-scroll
          shadow-[6px_0_25px_rgba(0,0,0,0.12)]

          max-md:w-[70px]
          max-md:min-w-[70px]
          max-md:overflow-y-auto
        "
      >

        {/* ================= BOX 1 ================= */}

        <div
          className="
            relative
            p-12
            border-b
            border-white/10
            group
            cursor-pointer
            overflow-hidden
            transition-all
            duration-300
            hover:bg-white/[0.04]

            max-md:p-0
            max-md:h-[75px]
            max-md:flex
            max-md:items-center
            max-md:justify-center
          "
        >
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-[3px]
              bg-[#D4A017]
              scale-y-0
              origin-bottom
              group-hover:scale-y-100
              transition-transform
              duration-300
            "
          />

          <Link
            to="/physical"
            title="Why Physical Literacy Matters"
            className="
              relative
              text-white
              font-semibold
              group-hover:text-[#D4A017]
              transition-colors
              duration-300

              max-md:text-2xl
              max-md:w-full
              max-md:h-full
              max-md:flex
              max-md:items-center
              max-md:justify-center
            "
          >
            <span className="hidden md:inline">
              Why Physical Literacy Matters
            </span>

            <span className="md:hidden">
              🏃
            </span>
          </Link>
        </div>


        {/* ================= BOX 2 ================= */}

        <div
          className="
            relative
            p-12
            border-b
            border-white/10
            group
            cursor-pointer
            overflow-hidden
            transition-all
            duration-300
            hover:bg-white/[0.04]

            max-md:p-0
            max-md:h-[75px]
            max-md:flex
            max-md:items-center
            max-md:justify-center
          "
        >
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-[3px]
              bg-[#D4A017]
              scale-y-0
              origin-bottom
              group-hover:scale-y-100
              transition-transform
              duration-300
            "
          />

          <Link
            to="/activestart"
            title="The ActiveStart Kids approach"
            className="
              relative
              text-white
              font-semibold
              group-hover:text-[#D4A017]
              transition-colors
              duration-300

              max-md:text-2xl
              max-md:w-full
              max-md:h-full
              max-md:flex
              max-md:items-center
              max-md:justify-center
            "
          >
            <span className="hidden md:inline">
              The ActiveStart Kids approach
            </span>

            <span className="md:hidden">
              ⭐
            </span>
          </Link>
        </div>


        {/* ================= BOX 3 ================= */}

        <div
          className="
            relative
            p-12
            border-b
            border-white/10
            group
            cursor-pointer
            overflow-hidden
            transition-all
            duration-300
            hover:bg-white/[0.04]

            max-md:p-0
            max-md:h-[75px]
            max-md:flex
            max-md:items-center
            max-md:justify-center
          "
        >
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-[3px]
              bg-[#D4A017]
              scale-y-0
              origin-bottom
              group-hover:scale-y-100
              transition-transform
              duration-300
            "
          />

          <Link
            to="/benefits"
            title="Benefits for everyone"
            className="
              relative
              text-white
              font-semibold
              group-hover:text-[#D4A017]
              transition-colors
              duration-300

              max-md:text-2xl
              max-md:w-full
              max-md:h-full
              max-md:flex
              max-md:items-center
              max-md:justify-center
            "
          >
            <span className="hidden md:inline">
              Benefits for everyone
            </span>

            <span className="md:hidden">
              👨‍👩‍👧
            </span>
          </Link>
        </div>


        {/* ================= BOX 4 ================= */}

        <div
          className="
            relative
            p-12
            border-b
            border-white/10
            group
            cursor-pointer
            overflow-hidden
            transition-all
            duration-300
            hover:bg-white/[0.04]

            max-md:p-0
            max-md:h-[75px]
            max-md:flex
            max-md:items-center
            max-md:justify-center
          "
        >
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-[3px]
              bg-[#D4A017]
              scale-y-0
              origin-bottom
              group-hover:scale-y-100
              transition-transform
              duration-300
            "
          />

          <Link
            to="/sports"
            title="Seven Sports, One Complete Foundation"
            className="
              relative
              text-white
              font-semibold
              group-hover:text-[#D4A017]
              transition-colors
              duration-300

              max-md:text-2xl
              max-md:w-full
              max-md:h-full
              max-md:flex
              max-md:items-center
              max-md:justify-center
            "
          >
            <span className="hidden md:inline">
              Seven Sports, One Complete Foundation
            </span>

            <span className="md:hidden">
              ⚽
            </span>
          </Link>
        </div>


        {/* ================= BOX 5 ================= */}

        <div
          className="
            relative
            p-12
            border-b
            border-white/10
            group
            cursor-pointer
            overflow-hidden
            transition-all
            duration-300
            hover:bg-white/[0.04]

            max-md:p-0
            max-md:h-[75px]
            max-md:flex
            max-md:items-center
            max-md:justify-center
          "
        >
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-[3px]
              bg-[#D4A017]
              scale-y-0
              origin-bottom
              group-hover:scale-y-100
              transition-transform
              duration-300
            "
          />

          <Link
            to="/partnership"
            title="How the Partnership Works"
            className="
              relative
              text-white
              font-semibold
              group-hover:text-[#D4A017]
              transition-colors
              duration-300

              max-md:text-2xl
              max-md:w-full
              max-md:h-full
              max-md:flex
              max-md:items-center
              max-md:justify-center
            "
          >
            <span className="hidden md:inline">
              How the Partnership Works
            </span>

            <span className="md:hidden">
              🤝
            </span>
          </Link>
        </div>


        {/* ================= BOX 6 ================= */}

        <div
          className="
            relative
            p-12
            border-b
            border-white/10
            group
            cursor-pointer
            overflow-hidden
            transition-all
            duration-300
            hover:bg-white/[0.04]

            max-md:p-0
            max-md:h-[75px]
            max-md:flex
            max-md:items-center
            max-md:justify-center
          "
        >
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-[3px]
              bg-[#D4A017]
              scale-y-0
              origin-bottom
              group-hover:scale-y-100
              transition-transform
              duration-300
            "
          />

          <Link
            to="/trust"
            title="Trust and Programme Credibility"
            className="
              relative
              text-white
              font-semibold
              group-hover:text-[#D4A017]
              transition-colors
              duration-300

              max-md:text-2xl
              max-md:w-full
              max-md:h-full
              max-md:flex
              max-md:items-center
              max-md:justify-center
            "
          >
            <span className="hidden md:inline">
              Trust and Programme Credibility
            </span>

            <span className="md:hidden">
              🛡️
            </span>
          </Link>
        </div>


        {/* ================= BOX 7 ================= */}

        <div
          className="
            relative
            p-12
            border-b
            border-white/10
            group
            cursor-pointer
            overflow-hidden
            transition-all
            duration-300
            hover:bg-white/[0.04]

            max-md:p-0
            max-md:h-[75px]
            max-md:flex
            max-md:items-center
            max-md:justify-center
          "
        >
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-[3px]
              bg-[#D4A017]
              scale-y-0
              origin-bottom
              group-hover:scale-y-100
              transition-transform
              duration-300
            "
          />

          <Link
            to="/about"
            title="About us"
            className="
              relative
              text-white
              font-semibold
              group-hover:text-[#D4A017]
              transition-colors
              duration-300

              max-md:text-2xl
              max-md:w-full
              max-md:h-full
              max-md:flex
              max-md:items-center
              max-md:justify-center
            "
          >
            <span className="hidden md:inline">
              About us
            </span>

            <span className="md:hidden">
              ℹ️
            </span>
          </Link>
        </div>

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <main
        className="
          ml-[20%]
          h-full
          flex
          items-center
          justify-center
          bg-white

          max-md:ml-[70px]
        "
      >

        <img
          src="/Logo.png"
          alt="Logo"
          className="
            w-[850px]
            opacity-20
            object-contain

            max-md:w-[90%]
          "
        />

      </main>

    </section>
  );
};

export default PageOne;