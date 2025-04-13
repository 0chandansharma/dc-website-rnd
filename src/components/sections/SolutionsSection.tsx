"use client";
import React from "react";
import Link from "next/link";
import { Tabs } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SolutionsSection = () => {
  return (
    <section className="delivering-ai-solutions [padding-top:_clamp(54px,4vw,192px)] [padding-bottom:_clamp(54px,4vw,160px)]">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <div>
          <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
            Solutions
          </span>
          <div className="flex [margin-bottom:_clamp(15px,2vw,38px)] [margin-top:_clamp(12px,2vw,53px)] flex-row flex-wrap items-start">
            <div className="flex-grow">
              <h2 className="[font-size:_clamp(15px,2vw,46px)] text-[#000000CC] leading-[1.3] font-normal">
                <span className="block">
                  Delivering AI solutions that are resilient
                </span>
                and{" "}
                <span className="heading-orange [font-size:_clamp(17px,2vw,48px)]">
                  Uncompromising
                </span>{" "}
                in achieving Excellence.
              </h2>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <Link
                href="#"
                className="text-[#FE6623] text-[18px] lg:text-[22px] explor-link flex items-center font-normal"
              >
                Explore All
                <svg className="arrow-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 16.5L16.075 15.1L18.175 13H3V11H18.175L16.1 8.9L17.525 7.5L22 12L17.5 16.5Z" fill="currentColor"/>
                </svg>
              </Link>
            </div>
          </div>
          <Tabs
            className="slider-tab-bar flex-nowrap whitespace-nowrap overflow-x-auto"
            aria-label="Pills"
            variant="pills"
          >
            <Tabs.Item className="custom-tab mt-[71px]" active title="Vision Tech">
              <Swiper
                slidesPerGroup={2}
                centeredSlides={false}
                observer={true}
                observeParents={true}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: { slidesPerView: 1.1, spaceBetween: 10 },
                  768: { slidesPerView: 2, spaceBetween: 30 },
                  1024: { slidesPerView: 2.4, spaceBetween: 71 },
                }}
                modules={[Pagination]}
                className="mySwiper mycustom-slider !pb-[56px] lg:!pb-[91px]"
              >
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-1.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Docurate
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Streamlining complex data and unstructured
                            information into actionable insights for
                            seamless...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-2.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            VisionTech
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Reforming visual data processing with our Vision
                            Tech platform and delivering unparalleled..
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-3.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Fusio
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Harnessing the Power of multimodal LLMs for
                            advanced data processing, seamlessly
                            integrating...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-4.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Canse{" "}
                            <span className="inline-block text-[#CED4D7] font-normal">
                              (Cancer Prognostic Tool)
                            </span>
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Transforming oncology with AI-powered cancer
                            prediction, enabling early detection,
                            personalized...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-5.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Notei
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Deciphering medical data processing with AI,
                            ensuring accurate analysis, seamless
                            integration...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
              </Swiper>
            </Tabs.Item>
            <Tabs.Item title="LLMs">
              <Swiper
                slidesPerGroup={2}
                centeredSlides={false}
                observer={true}
                observeParents={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 2.4,
                    spaceBetween: 71,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper mycustom-slider !pb-[56px] lg:!pb-[91px]"
              >
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-1.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Docurate
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Streamlining complex data and unstructured
                            information into actionable insights for
                            seamless...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-2.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            VisionTech
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Reforming visual data processing with our Vision
                            Tech platform and delivering unparalleled..
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-3.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Fusio
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Harnessing the Power of multimodal LLMs for
                            advanced data processing, seamlessly
                            integrating...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-4.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Canse{" "}
                            <span className="inline-block text-[#CED4D7] font-normal">
                              (Cancer Prognostic Tool)
                            </span>
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Transforming oncology with AI-powered cancer
                            prediction, enabling early detection,
                            personalized...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-5.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Notei
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Deciphering medical data processing with AI,
                            ensuring accurate analysis, seamless
                            integration...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
              </Swiper>
            </Tabs.Item>
            <Tabs.Item title="Edge Computing">
              <Swiper
                slidesPerGroup={2}
                centeredSlides={false}
                observer={true}
                observeParents={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 2.4,
                    spaceBetween: 71,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper mycustom-slider !pb-[56px] lg:!pb-[91px]"
              >
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-1.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Docurate
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Streamlining complex data and unstructured
                            information into actionable insights for
                            seamless...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-2.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            VisionTech
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Reforming visual data processing with our Vision
                            Tech platform and delivering unparalleled..
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-3.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Fusio
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Harnessing the Power of multimodal LLMs for
                            advanced data processing, seamlessly
                            integrating...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-4.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Canse{" "}
                            <span className="inline-block text-[#CED4D7] font-normal">
                              (Cancer Prognostic Tool)
                            </span>
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Transforming oncology with AI-powered cancer
                            prediction, enabling early detection,
                            personalized...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-5.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Notei
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Deciphering medical data processing with AI,
                            ensuring accurate analysis, seamless
                            integration...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
              </Swiper>
            </Tabs.Item>
            <Tabs.Item title="Prediction Models">
              <Swiper
                slidesPerGroup={2}
                centeredSlides={false}
                observer={true}
                observeParents={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 2.4,
                    spaceBetween: 71,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper mycustom-slider !pb-[56px] lg:!pb-[91px]"
              >
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-1.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Docurate
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Streamlining complex data and unstructured
                            information into actionable insights for
                            seamless...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-2.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            VisionTech
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Reforming visual data processing with our Vision
                            Tech platform and delivering unparalleled..
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-3.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Fusio
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Harnessing the Power of multimodal LLMs for
                            advanced data processing, seamlessly
                            integrating...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-4.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Canse{" "}
                            <span className="inline-block text-[#CED4D7] font-normal">
                              (Cancer Prognostic Tool)
                            </span>
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Transforming oncology with AI-powered cancer
                            prediction, enabling early detection,
                            personalized...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-column relative rounded-[24px] overflow-hidden">
                    <img
                      src="/image/llm-5.png"
                      className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                      alt=""
                    />
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between">
                        <div className="grow">
                          <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                            Notei
                          </h3>
                          <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                            Deciphering medical data processing with AI,
                            ensuring accurate analysis, seamless
                            integration...
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Link href="/coming-soon">
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
                </SwiperSlide>
              </Swiper>
            </Tabs.Item>
          </Tabs>

          <div className="text-center mt-[30px] lg:mt-[64px] md:hidden">
            <Link
              href="#"
              className="text-[#FE6623] explor-link text-[18px] lg:text-[22px] flex items-center font-normal"
            >
              Explore All
              <svg className="arrow-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 16.5L16.075 15.1L18.175 13H3V11H18.175L16.1 8.9L17.525 7.5L22 12L17.5 16.5Z" fill="currentColor"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;