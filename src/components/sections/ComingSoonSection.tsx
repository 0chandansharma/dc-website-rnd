import React from "react";
import Link from "next/link";

const ComingSoonSection = () => {
  return (
    <section className="bg-[url('https://dcmedvectorstore.blob.core.windows.net/website-videos/coming-soon.gif')] overflow-auto py-[10px] md:py-[59px] px-[10px] md:px-[92px] bg-center bg-cover bg-no-repeat h-screen">
      <div className="container px-[10px] h-full mx-auto">
        <div className="flex-wrap relative bg-cooming overflow-hidden flex-row flex items-center justify-center h-full">
          <div className="relative z-10">
            <div className="text-center">
              <svg
                width={77}
                height={74}
                className="inline-block mb-[30px]"
                viewBox="0 0 77 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths */}
              </svg>
            </div>
            <div className="text-center">
              <h1 className="leading-normal">
                <span className="text-[#3A4447] block mb-[18px] [font-size:_clamp(15px,4vw,48px)] leading-normal">
                  Unlock the Future of Innovation
                </span>
                <span className="text-[#000000] block [font-size:_clamp(15px,4vw,48px)] mb-[30px] leading-normal">
                  Our AI Products & Tools Are Coming Soon!
                </span>
              </h1>
              <p className="text-[#161A1B] text-[20px] leading-normal">
                Get Ahead of the Curve – Get in Touch!
              </p>
            </div>
            <div>
              <form className="mt-[30px] mx-auto max-w-[556px] lg:mt-[80px]">
                <div className="w-full group">
                  <input
                    type="email"
                    id="floating_email"
                    className="block arrow-bg-input pe-[35px] bg-no-repeat py-2.5 px-0 w-full text-[#000] bg-transparent border-0 border-b-2 border-p[#000000bf] appearance-none focus:outline-none focus:ring-0 placeholder:text-[#000000bf] text-[20px] focus:border-[#FE6623E3] peer"
                    placeholder="Enter your email address.."
                    required
                    name="floating_email"
                  />
                </div>
              </form>
            </div>
            <div className="text-center mt-[50px] md:mt-[120px]">
              <Link href="/">
                <svg
                  width={31}
                  height={41}
                  className="inline-block"
                  viewBox="0 0 31 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG paths */}
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;