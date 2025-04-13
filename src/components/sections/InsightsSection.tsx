import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/common/SectionHeading";

const InsightsSection = () => {
  return (
    <section className="[padding-top:_clamp(53px,4vw,193px)] [padding-bottom:_clamp(47px,4vw,196px)] latest-insights">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <div className="text-center">
          <SectionHeading
            tag="Newsroom"
            title={
              <>
                <span>Latest</span>{" "}
                <span className="heading-orange">Insights</span>
              </>
            }
          />
        </div>
        <div className="flex justify-center">
          <div className="basis-full md:basis-10/12">
            <div className="grid mt-[30px] md:mt-[100px] md:grid-cols-2 md:gap-x-[41px] gap-y-[15px] place-items-stretch">
              <div>
                <div className="relative rounded-[24px] overflow-hidden">
                  <img src="/image/Insights-1.png" className="w-full" alt="" />
                  <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                    <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] py-[15px] lg:py-[28px] px-[15px] lg:px-[36px] flex justify-between flex-wrap">
                      <div className="flex-grow">
                        <span className="[font-size:_clamp(10px,2vw,16px)] text-[#c7c5d4] mb-[3px]">
                          13th December 2024 | Blog
                        </span>
                        <h3 className="text-white [font-size:_clamp(14px,2vw,32px)] font-normal">
                          Enhancing Cancer Care
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        <Link href="#">
                          <img
                            src="/image/arrow-btn.png"
                            className="max-w-full [width:_clamp(26px,2vw,76px)]"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative rounded-[24px] overflow-hidden">
                  <img src="/image/Insights-2.png" className="w-full" alt="" />
                  <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                    <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] py-[15px] lg:py-[28px] px-[15px] lg:px-[36px] flex justify-between flex-wrap">
                      <div className="flex-grow">
                        <span className="[font-size:_clamp(10px,2vw,16px)] text-[#c7c5d4] mb-[3px]">
                          11th December 2024 | Blog
                        </span>
                        <h3 className="text-white [font-size:_clamp(14px,2vw,32px)] font-normal">
                          Streamlining Healthcare
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        <Link href="#">
                          <img
                            src="/image/arrow-btn.png"
                            className="max-w-full [width:_clamp(26px,2vw,76px)]"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-[30px] lg:mt-[64px]">
              <Link
                href="#"
                className="hover:bg-[#fe6623e3] [font-size:_clamp(8px,3vw,22px)] border border-[#fe6623] rounded-[32px] py-[8px] px-[26px] inline-block text-[#fe6623] hover:text-[#ffffffe6]"
              >
                View more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;