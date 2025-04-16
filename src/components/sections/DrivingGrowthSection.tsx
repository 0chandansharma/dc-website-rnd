import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/common/Button";
interface DrivingGrowthSectionProps {
  onBookDemo: () => void;
}

const DrivingGrowthSection = ({ onBookDemo }: DrivingGrowthSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);
  const [isHoveredFour, setIsHoveredFour] = useState(false);

  return (
    <section className="driving-growth-sec relative [padding-top:_clamp(54px,4vw,192px)] [padding-bottom:_clamp(54px,4vw,192px)]">
      <div className="container max-w-[90rem] mx-auto px-[10px] relative z-10">
        <div className="flex justify-center">
          <div className="basis-full md:basis-11/12">
            <div className="flex flex-wrap items-center flex-row">
              <div className="basis-full md:basis-6/12">
                <div>
                  <div>
                    <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                      What Sets us Apart
                    </span>
                    <h2 className="[font-size:_clamp(16px,2vw,46px)] [padding-top:_clamp(8px,4vw,41px)] [padding-bottom:_clamp(20px,4vw,30px)] leading-[1.3] text-[#000]">
                      Driving Growth and Shaping a{" "}
                      <span className="heading-orange">Smarter Future </span>
                      for Our Clients
                    </h2>
                  </div>
                  <p className="[font-size:_clamp(16px,2vw,22px)] mb-[30px] lg:mb-[57px] leading-normal text-gray-800">
                    From enhancing decision-making with advanced analytics to
                    streamlining operations through intelligent automation.
                  </p>
                </div>
                <div className="grid grid-cols-2 place-items-stretch gap gap-x-[9px] gap-y-[8px] lg:gap-x-[32px]">
                  <div
                    className={`min-h-[120px] [padding:_clamp(13px,2vw,30px)] bordern-nn-1 rounded-xl bg-[#292C3305] ${
                      isHovered ? "cardHover" : ""
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="flex flex-row">
                      <div className="shrink-0">
                        <img
                          src="/image/v-1.png"
                          className="[height:_clamp(14px,2vw,36px)] mt-[18px]"
                          alt=""
                        />
                      </div>
                      <div className="grow [padding-left:_clamp(12px,3vw,30px)]">
                        <span className="heading-orange-two mb-[8px] [font-size:_clamp(12px,2vw,32px)] leading-normal font-bold">
                          +10
                        </span>
                        <p className="text-[#646464] text-[12px] leading-normal">
                          Empowering Businesses to unlock limitless possibilities & achieve unparalleled success.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`min-h-[120px] [padding:_clamp(13px,2vw,30px)] bordern-nn-1 rounded-xl bg-[#292C3305] ${
                      isHoveredTwo ? "cardHover" : ""
                    }`}
                    onMouseEnter={() => setIsHoveredTwo(true)}
                    onMouseLeave={() => setIsHoveredTwo(false)}
                  >
                    <div className="flex flex-row">
                      <div className="shrink-0">
                        <img
                          src="/image/v-2.png"
                          className="[height:_clamp(14px,2vw,36px)] mt-[18px]"
                          alt=""
                        />
                      </div>
                      <div className="grow [padding-left:_clamp(12px,3vw,30px)]">
                        <span className="heading-orange-two mb-[8px] [font-size:_clamp(12px,2vw,32px)] leading-normal font-bold">
                          +5
                        </span>
                        <p className="text-[#646464] text-[12px] leading-normal">
                          Successfully delivered impactful solutions globally, meeting diverse customer needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`min-h-[120px] [padding:_clamp(13px,2vw,30px)] bordern-nn-1 rounded-xl bg-[#292C3305] ${
                      isHoveredFour ? "cardHover" : ""
                    }`}
                    onMouseEnter={() => setIsHoveredFour(true)}
                    onMouseLeave={() => setIsHoveredFour(false)}
                  >
                    <div className="flex flex-row">
                      <div className="shrink-0">
                        <img
                          src="/image/v-3.png"
                          className="[height:_clamp(14px,2vw,36px)] mt-[18px]"
                          alt=""
                        />
                      </div>
                      <div className="grow [padding-left:_clamp(12px,3vw,30px)]">
                        <span className="heading-orange-two mb-[8px] [font-size:_clamp(12px,2vw,32px)] leading-normal font-bold">
                          +3
                        </span>
                        <p className="text-[#646464] text-[12px] leading-normal">
                          Providing transformative AI solutions across healthcare, finance, fintech, defense, and security.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`min-h-[120px] [padding:_clamp(13px,2vw,30px)] bordern-nn-1 flex flex-col justify-center rounded-xl bg-[#292C3305] ${
                      isHoveredThree ? "cardHover" : ""
                    }`}
                    onMouseEnter={() => setIsHoveredThree(true)}
                    onMouseLeave={() => setIsHoveredThree(false)}
                  >
                    <div className="flex flex-row">
                      <div className="shrink-0">
                        <img
                          src="/image/v-4.png"
                          className="[height:_clamp(14px,4vw,36px)]"
                          alt=""
                        />
                      </div>
                      <div className="grow [padding-left:_clamp(12px,3vw,30px)]">
                        <p className="text-[#646464] text-[12px] leading-normal">
                          Stay informed with our newsroom updates, delivering insights straight to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Button 
                        onClick={onBookDemo}
                        text="Book a Demo"
                        variant="primary"
                        size="md"
                      /> */}
              </div>
              <div className="basis-full hidden md:block mt-[30px] md:mt-0 md:basis-6/12">
                <div>
                  <div
                    className={`main-circle common-border ${isHovered ? "borderHover" : ""}`}
                  >
                    <div className="circle-4-1">
                      <div className="flex s4 items-center flex-wrap">
                        <span
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          className="bg-[#004A7C40] btnhover mx-[12px] btn py-[3px] px-[15px] lg:py-[8px] lg:px-[30px] text-white [font-size:_clamp(15px,2vw,20px)] text-center rounded-[12px] border border-[#004A7C]"
                        >
                          Growth
                        </span>
                        <span className="dot">
                          <svg
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="9"
                              cy="9.56958"
                              r="9"
                              fill="url(#paint0_linear_2637_182)"
                            />
                            <circle
                              cx="9"
                              cy="9.56958"
                              r="8.5"
                              stroke="white"
                              strokeOpacity="0.6"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2637_182"
                                x1="9"
                                y1="0.56958"
                                x2="9"
                                y2="18.5696"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#F9763C" />
                                <stop offset="1" stopColor="#934623" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className={`circle-2 common-border ${isHoveredTwo ? "borderHover" : ""}`}>
                      <div className="circle-4-1">
                        <div className="flex s3 items-center flex-wrap">
                          <span
                            onMouseEnter={() => setIsHoveredTwo(true)}
                            onMouseLeave={() => setIsHoveredTwo(false)}
                            className="bg-[#004A7C40] btn btnhover mx-[12px] btn py-[3px] px-[15px] lg:py-[8px] lg:px-[30px] text-white [font-size:_clamp(15px,2vw,20px)] text-center rounded-[12px] border border-[#004A7C]"
                          >
                            Insights
                          </span>
                          <span className="dot">
                            <svg
                              width="18"
                              height="19"
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="9"
                                cy="9.56958"
                                r="9"
                                fill="url(#paint0_linear_2637_182)"
                              />
                              <circle
                                cx="9"
                                cy="9.56958"
                                r="8.5"
                                stroke="white"
                                strokeOpacity="0.6"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2637_182"
                                  x1="9"
                                  y1="0.56958"
                                  x2="9"
                                  y2="18.5696"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#F9763C" />
                                  <stop offset="1" stopColor="#934623" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`circle-3 common-border ${isHoveredFour ? "borderHover" : ""}`}>
                      <div className="circle-4-1">
                        <div className="flex s2 items-center flex-wrap">
                          <span className="dot">
                            <svg
                              width="18"
                              height="19"
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="9"
                                cy="9.56958"
                                r="9"
                                fill="url(#paint0_linear_2637_182)"
                              />
                              <circle
                                cx="9"
                                cy="9.56958"
                                r="8.5"
                                stroke="white"
                                strokeOpacity="0.6"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2637_182"
                                  x1="9"
                                  y1="0.56958"
                                  x2="9"
                                  y2="18.5696"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#F9763C" />
                                  <stop offset="1" stopColor="#934623" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                          <span
                            onMouseEnter={() => setIsHoveredFour(true)}
                            onMouseLeave={() => setIsHoveredFour(false)}
                            className="bg-[#004A7C40] btn btnhover mx-[12px] btn py-[3px] px-[15px] lg:py-[8px] lg:px-[30px] text-white [font-size:_clamp(15px,2vw,20px)] text-center rounded-[12px] border border-[#004A7C]"
                          >
                            Industries
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`circle-4 common-border ${isHoveredThree ? "borderHover" : ""}`}>
                      <div className="circle-4-1">
                        <div className="flex s1 items-center flex-wrap">
                          <span className="dot">
                            <svg
                              width="18"
                              height="19"
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="9"
                                cy="9.56958"
                                r="9"
                                fill="url(#paint0_linear_2637_182)"
                              />
                              <circle
                                cx="9"
                                cy="9.56958"
                                r="8.5"
                                stroke="white"
                                strokeOpacity="0.6"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2637_182"
                                  x1="9"
                                  y1="0.56958"
                                  x2="9"
                                  y2="18.5696"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#F9763C" />
                                  <stop offset="1" stopColor="#934623" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                          <span
                            onMouseEnter={() => setIsHoveredThree(true)}
                            onMouseLeave={() => setIsHoveredThree(false)}
                            className="bg-[#004A7C40] btn btnhover mx-[12px] btn py-[3px] px-[15px] lg:py-[8px] lg:px-[30px] text-white [font-size:_clamp(15px,2vw,20px)] text-center rounded-[12px] border border-[#004A7C]"
                          >
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/image/svgf.svg"
        className="w-full hidden lg:block absolute z-0 max-w-[300px] right-0 top-[100px]"
        alt=""
      />
    </section>
  );
};

export default DrivingGrowthSection;
