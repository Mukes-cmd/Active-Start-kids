import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(false);

  return (
    <nav className="w-full h-20 bg-white flex items-center shadow-md relative z-50">

      {/* ================= LOGO ================= */}
      <Link
        to="/"
        className="
          h-full
          w-[240px]
          min-w-[240px]
          bg-gray-100
          flex
          items-center
          justify-center
          border-r
          border-gray-200
          shadow-[4px_0_12px_rgba(0,0,0,0.12)]
          
          /* Medium / small laptop */
          lg:w-[190px]
          lg:min-w-[190px]

          /* Large laptop and desktop */
          xl:w-[240px]
          xl:min-w-[240px]

          /* Mobile */
          max-lg:flex-1
          max-lg:w-auto
          max-lg:min-w-0
          max-lg:justify-start
          max-lg:px-5
        "
      >
        <img
          src="/logo4.jpeg"
          alt="ActiveStart Kids Logo"
          className="
            h-10
            object-contain
            lg:h-9
            xl:h-10
            max-lg:h-9
          "
        />
      </Link>


      {/* ================= DESKTOP NAVIGATION ================= */}
      <div
        className="
          flex-1
          h-full
          flex
          items-center
          justify-between

          px-8
          lg:px-3
          xl:px-8

          max-lg:justify-end
          max-lg:px-4
          max-lg:relative
        "
      >

        {/* ================= DESKTOP LINKS ================= */}
        <div className="hidden lg:flex items-center gap-8 lg:gap-3 xl:gap-8">

          {/* ================= HOME ================= */}
          <Link
            to="/"
            className="
              group
              relative
              text-[#0B1220]
              text-[15px]
              lg:text-[12px]
              xl:text-[15px]
              font-semibold
              whitespace-nowrap
              hover:text-[#8FD14F]
              transition-colors
              duration-300
            "
          >
            Home

            <span
              className="
                absolute
                left-0
                -bottom-2
                w-0
                h-[2px]
                rounded-full
                bg-[#8FD14F]
                group-hover:w-full
                transition-all
                duration-300
              "
            />
          </Link>


          {/* ================= ACTIVE START APPROACH ================= */}
          <div className="relative group">

            <Link
              to="/activestart"
              className="
                group
                relative
                text-[#0B1220]
                text-[15px]
                lg:text-[12px]
                xl:text-[15px]
                font-semibold
                whitespace-nowrap
                flex
                items-center
                gap-2
                hover:text-[#8FD14F]
                transition-colors
                duration-300
              "
            >
              ActiveStarts Kids Approach

              {/* Arrow */}
              <span
                className="
                  text-xs
                  transition-transform
                  duration-300
                  group-hover:rotate-180
                "
              >
                ▼
              </span>

              {/* Underline */}
              <span
                className="
                  absolute
                  left-0
                  -bottom-2
                  w-0
                  h-[2px]
                  rounded-full
                  bg-[#8FD14F]
                  group-hover:w-full
                  transition-all
                  duration-300
                "
              />
            </Link>


            {/* ================= DROPDOWN ================= */}
            <div
              className="
                absolute
                top-full
                left-0
                mt-5
                w-[280px]
                bg-white
                border
                border-gray-100
                rounded-b-md
                shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                overflow-hidden
                opacity-0
                invisible
                translate-y-2
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                transition-all
                duration-300
                z-50
              "
            >

              {/* Item 1 */}
              <Link
                to="/physical"
                className="
                  block
                  px-6
                  py-4
                  text-[#0B1220]
                  text-[16px]
                  font-semibold
                  hover:bg-[#0B1220]
                  hover:text-[#8FD14F]
                  transition-all
                  duration-200
                "
              >
                Physical Literacy
              </Link>


              {/* Item 2 */}
              <Link
                to="/partnership"
                className="
                  block
                  px-6
                  py-4
                  text-[#0B1220]
                  text-[16px]
                  font-semibold
                  hover:bg-[#0B1220]
                  hover:text-[#8FD14F]
                  transition-all
                  duration-200
                "
              >
                How Partnership Works
              </Link>


              {/* Item 3 */}
              <Link
                to="/benefits"
                className="
                  block
                  px-6
                  py-4
                  text-[#0B1220]
                  text-[16px]
                  font-semibold
                  hover:bg-[#0B1220]
                  hover:text-[#8FD14F]
                  transition-all
                  duration-200
                "
              >
                Benefits for Everyone
              </Link>


              {/* Item 4 */}
              <Link
                to="/trust"
                className="
                  block
                  px-6
                  py-4
                  text-[#0B1220]
                  text-[16px]
                  font-semibold
                  hover:bg-[#0B1220]
                  hover:text-[#8FD14F]
                  transition-all
                  duration-200
                "
              >
                See how it works
              </Link>


              {/* Item 5 */}
              <Link
                to="/about"
                className="
                  block
                  px-6
                  py-4
                  text-[#0B1220]
                  text-[16px]
                  font-semibold
                  hover:bg-[#0B1220]
                  hover:text-[#8FD14F]
                  transition-all
                  duration-200
                "
              >
                About us
              </Link>

            </div>
          </div>


          {/* ================= OUR PROGRAMS ================= */}
          <Link
            to="/sports"
            className="
              group
              relative
              text-[#0B1220]
              text-[15px]
              lg:text-[12px]
              xl:text-[15px]
              font-semibold
              whitespace-nowrap
              hover:text-[#8FD14F]
              transition-colors
              duration-300
            "
          >
            Our Programs

            <span
              className="
                absolute
                left-0
                -bottom-2
                w-0
                h-[2px]
                rounded-full
                bg-[#8FD14F]
                group-hover:w-full
                transition-all
                duration-300
              "
            />
          </Link>


          {/* ================= SCHOOL CONTACT ================= */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFadbxKjNCOOpHe6T26kIfHXpN5EUigUktarQ9IJPPf0OO8A/viewform?usp=publish-editor"
            className="
              group
              relative
              text-[#0B1220]
              text-[15px]
              lg:text-[12px]
              xl:text-[15px]
              font-semibold
              whitespace-nowrap
              hover:text-[#8FD14F]
              transition-colors
              duration-300
            "
          >
            School{" "}
            <span className="text-[#0B1220] group-hover:text-[#8FD14F]">
              :
            </span>{" "}
            Contact us

            <span
              className="
                absolute
                left-0
                -bottom-2
                w-0
                h-[2px]
                rounded-full
                bg-[#8FD14F]
                group-hover:w-full
                transition-all
                duration-300
              "
            />
          </a>


          {/* ================= COACH ================= */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScEsm6OgKTNNYjC8nMgwxKQm-OFhuloN3vvxm4_1UxMFFHhqg/viewform?usp=publish-editor"
            className="
              group
              relative
              text-[#0B1220]
              text-[15px]
              lg:text-[12px]
              xl:text-[15px]
              font-semibold
              whitespace-nowrap
              hover:text-[#8FD14F]
              transition-colors
              duration-300
            "
          >
            Coach{" "}
            <span className="text-[#0B1220] group-hover:text-[#8FD14F]">
              :
            </span>{" "}
            Work with us

            <span
              className="
                absolute
                left-0
                -bottom-2
                w-0
                h-[2px]
                rounded-full
                bg-[#8FD14F]
                group-hover:w-full
                transition-all
                duration-300
              "
            />
          </a>

        </div>


        {/* ================= DESKTOP DEMO BUTTON ================= */}
        <div className="hidden lg:block flex-shrink-0 ml-3">

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdbGapyT761HjsvQF4XM7hWNPyyXmkJ4CxbGDS1Fn8akj9wLw/viewform?usp=publish-editor"
            className="
              bg-[#0B1220]
              hover:bg-[#8FD14F]
              text-white
              px-6
              py-3
              lg:px-3
              lg:py-2
              xl:px-6
              xl:py-3
              rounded-full
              text-[18px]
              lg:text-[12px]
              xl:text-[18px]
              font-bold
              whitespace-nowrap
              shadow-[0_6px_18px_rgba(212,160,23,0.25)]
              hover:shadow-[0_8px_22px_rgba(212,160,23,0.40)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              active:translate-y-0
            "
          >
            Book a Free Demo
          </a>

        </div>


        {/* ================= MOBILE / SMALL LAPTOP MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            text-[#0B1220]
            text-3xl
            font-bold
            p-2
            rounded-lg
            hover:bg-gray-200
            transition
            duration-300
          "
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>


        {/* ================= MOBILE / SMALL LAPTOP MENU ================= */}
        {menuOpen && (
          <div
            className="
              absolute
              top-20
              left-0
              w-full
              bg-white
              border-t
              border-gray-200
              shadow-[0_10px_25px_rgba(0,0,0,0.12)]
              lg:hidden
              max-h-[calc(100vh-5rem)]
              overflow-y-auto
            "
          >

            <div className="flex flex-col py-3">

              {/* ================= HOME ================= */}
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="
                  px-6
                  py-4
                  text-[#0B1220]
                  text-[17px]
                  font-semibold
                  hover:bg-[#0B1220]
                  hover:text-[#8FD14F]
                  transition
                  duration-300
                "
              >
                Home
              </Link>


              {/* ================= ACTIVE START APPROACH ================= */}
              <div>

                <button
                  onClick={() => setMobileSubMenu(!mobileSubMenu)}
                  className="
                    w-full
                    px-6
                    py-4
                    flex
                    items-center
                    justify-between
                    text-left
                    text-[#0B1220]
                    text-[17px]
                    font-semibold
                    hover:bg-[#0B1220]
                    hover:text-[#8FD14F]
                    transition
                    duration-300
                  "
                >
                  <span>ActiveStarts Kids Approach</span>

                  <span
                    className={`
                      text-xs
                      transition-transform
                      duration-300
                      ${mobileSubMenu ? "rotate-180" : ""}
                    `}
                  >
                    ▼
                  </span>
                </button>


                {/* Mobile Dropdown */}
                {mobileSubMenu && (
                  <div className="bg-gray-50">

                    <Link
                      to="/trust"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-10
                        py-3
                        text-[#0B1220]
                        text-[16px]
                        font-medium
                        hover:bg-[#0B1220]
                        hover:text-[#8FD14F]
                        transition
                      "
                    >
                      Trust & Credibility
                    </Link>


                    <Link
                      to="/partnership"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-10
                        py-3
                        text-[#0B1220]
                        text-[16px]
                        font-medium
                        hover:bg-[#0B1220]
                        hover:text-[#8FD14F]
                        transition
                      "
                    >
                      How Partnership Works
                    </Link>


                    <Link
                      to="/benefits"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-10
                        py-3
                        text-[#0B1220]
                        text-[16px]
                        font-medium
                        hover:bg-[#0B1220]
                        hover:text-[#8FD14F]
                        transition
                      "
                    >
                      Benefits for Everyone
                    </Link>


                    <Link
                      to="/physical"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-10
                        py-3
                        text-[#0B1220]
                        text-[16px]
                        font-medium
                        hover:bg-[#0B1220]
                        hover:text-[#8FD14F]
                        transition
                      "
                    >
                      Physical Literacy
                    </Link>


                    <Link
                      to="/activestart"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-10
                        py-3
                        text-[#0B1220]
                        text-[16px]
                        font-medium
                        hover:bg-[#0B1220]
                        hover:text-[#8FD14F]
                        transition
                      "
                    >
                      ActiveStart Kids Approach
                    </Link>

                  </div>
                )}

              </div>


              {/* ================= OUR PROGRAMS ================= */}
              <Link
                to="/sports"
                onClick={() => setMenuOpen(false)}
                className="
                  px-6
                  py-4
                  text-[#0B1220]
                  text-[17px]
                  font-semibold
                  hover:bg-[#0B1220]
                  hover:text-[#8FD14F]
                  transition
                  duration-300
                "
              >
                Our Programs
              </Link>


              {/* ================= SCHOOL CONTACT ================= */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfFadbxKjNCOOpHe6T26kIfHXpN5EUigUktarQ9IJPPf0OO8A/viewform?usp=publish-editor"
                onClick={() => setMenuOpen(false)}
                className="
                  px-6
                  py-4
                  text-[#0B1220]
                  text-[17px]
                  font-semibold
                  hover:bg-[#0B1220]
                  hover:text-[#8FD14F]
                  transition
                  duration-300
                "
              >
                School : Contact us
              </a>


              {/* ================= COACH ================= */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScEsm6OgKTNNYjC8nMgwxKQm-OFhuloN3vvxm4_1UxMFFHhqg/viewform?usp=publish-editor"
                onClick={() => setMenuOpen(false)}
                className="
                  px-6
                  py-4
                  text-[#0B1220]
                  text-[17px]
                  font-semibold
                  hover:bg-[#0B1220]
                  hover:text-[#8FD14F]
                  transition
                  duration-300
                "
              >
                Coach : Work with us
              </a>


              {/* ================= MOBILE DEMO BUTTON ================= */}
              <div className="px-6 py-4">

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdbGapyT761HjsvQF4XM7hWNPyyXmkJ4CxbGDS1Fn8akj9wLw/viewform?usp=publish-editor"
                  onClick={() => setMenuOpen(false)}
                  className="
                    block
                    w-full
                    text-center
                    bg-[#0B1220]
                    hover:bg-[#8FD14F]
                    text-white
                    px-6
                    py-3
                    rounded-full
                    text-[17px]
                    font-bold
                    transition-all
                    duration-300
                  "
                >
                  Book a Free Demo
                </a>

              </div>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
};

export default Navbar;