import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-white">

      {/* ================= CONTACT SECTION ================= */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

            {/* Question */}
            <div>
              <h6 className="text-lg font-semibold">
                Have a question? Call us now!
              </h6>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <span className="text-gray-400 text-sm mb-1">
                Call Us
              </span>

              <a
                href="tel:+917302483334"
                className="text-lg font-semibold hover:text-[#D4A017] transition break-words"
              >
                +91 7302483334
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <span className="text-gray-400 text-sm mb-1">
                Email Support
              </span>

              <a
                href="mailto:info@activestartkids.com"
                className="text-lg font-semibold hover:text-[#D4A017] transition break-all"
              >
                info@activestartkids.com
              </a>
            </div>

          </div>

        </div>
      </div>


      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center">

          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-5">

            <a
              href="/terms-conditions"
              className="text-gray-400 text-sm hover:text-[#D4A017] transition"
            >
              Terms & Conditions
            </a>

            <a
              href="/privacy-policy"
              className="text-gray-400 text-sm hover:text-[#D4A017] transition"
            >
              Privacy Policy
            </a>

            <a
              href="/refund-cancellation-policy"
              className="text-gray-400 text-sm hover:text-[#D4A017] transition"
            >
              Refund/Cancellation Policy
            </a>

          </div>


          {/* Terms Text */}
          <p className="text-gray-500 text-sm mb-2 leading-6">
            Use of this Site is subject to express terms of use.
            By using this site, you signify that you agree to be bound
            by these Universal Terms of Services.
          </p>


          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2020 info@activestartkids.com. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;