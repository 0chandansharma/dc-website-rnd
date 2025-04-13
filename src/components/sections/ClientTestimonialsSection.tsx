import React from "react";
import Link from "next/link";

const ClientTestimonialsSection = () => {
  return (
    <section className="what-our-clients bg-[#6e6e731f] [padding-top:_clamp(14px,4vw,84px)] [padding-bottom:_clamp(14px,4vw,84px)]">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <div className="flex justify-center">
          <div className="basis-full md:basis-11/12">
            <div>
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                Testimonials
              </span>
              <div className="flex [margin-bottom:_clamp(11px,2vw,26px)] [margin-top:_clamp(12px,2vw,28px)] flex-row flex-wrap lg:flex-nowrap items-start">
                <div className="grow">
                  <h2 className="[font-size:_clamp(17px,2vw,48px)] text-[#000000] leading-[1.2] font-normal">
                    <span>What our</span>{" "}
                    <span className="heading-orange">Clients</span> Say
                  </h2>
                  <p className="Helvetica-400 [margin-top:_clamp(12px,2vw,26px)] font-normal leading-[1.2] [font-size:_clamp(8px,2vw,22px)] lg:max-w-[518px] text-[#000000BF]">
                    Discover what our clients say about the transformative
                    impact of DeeCogs Technologies' AI solutions
                  </p>
                </div>
                <div className="shrink-1 lg:shrink-0 mt-[15px] lg:mt-0 lg:text-end">
                  <p className="[font-size:_clamp(6px,2vw,22px)] leading-[1.2] [margin-bottom:_clamp(8px,2vw,35px)] font-normal lg:max-w-[545px] text-[#0000007d]">
                    Our clients are at the heart of everything we do.
                    <span className="hidden lg:block">
                      Here's what they have to say about partnering with us.
                    </span>
                  </p>
                  <div className="flex mb-[23px] lg:justify-end flex-wrap items-center">
                    <div>
                      <img
                        src="/image/client-1.png"
                        className="max-w-full [width:_clamp(17px,4vw,64px)] [height:_clamp(17px,4vw,64px)] object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div className="-ms-3 lg:-ms-5">
                      <img
                        src="/image/client-2.png"
                        className="max-w-full [width:_clamp(17px,4vw,64px)] [height:_clamp(17px,4vw,64px)] object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div className="-ms-3 lg:-ms-5">
                      <img
                        src="/image/client-3.png"
                        className="max-w-full [width:_clamp(17px,4vw,64px)] [height:_clamp(17px,4vw,64px)] object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div className="-ms-3 lg:-ms-5">
                      <img
                        src="/image/client-4.png"
                        className="max-w-full [width:_clamp(17px,4vw,64px)] [height:_clamp(17px,4vw,64px)] object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div className="-ms-3 lg:-ms-5 rounded-[100%] bg-white [width:_clamp(17px,4vw,64px)] [height:_clamp(17px,4vw,64px)] flex justify-center items-center">
                      <span className="[font-size:_clamp(6px,3vw,22px)] font-normal text-[#000000db]">
                        +24
                      </span>
                    </div>
                  </div>
                  
                    <a className="text-[#FE6623] [font-size:_clamp(8px,3vw,22px)] font-normal"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="grid place-items-end grid-cols-1 md:grid-cols-3 lg:gap-x-[56px] gap-x-[15px] gap-y-[20px] lg:gap-y-[29px]">
                <div>
                  <div className="rounded-[24px] bg-white [padding:_clamp(15px,3vw,40px)]">
                    <p className="[font-size:_clamp(9px,3vw,22px)] font-normal text-[#000000bf]">
                      I highly recommend DeeCogs' fintech solutions. Their bank
                      statement analyzer, CIBIL report parser, and invoice
                      parser are precise, efficient, and have streamlined our
                      processes significantly. These tools save time, enhance
                      decision-making, and improve productivity, making them
                      invaluable for our organization aiming for operational
                      excellence.
                    </p>
                    <div className="[margin-top:_clamp(10px,3vw,43px)] flex flex-wrap flex-row items-center">
                      <div className="shrink-0 me-[15px]">
                        <img
                          src="/image/r-1.png"
                          className="max-w-full [width:_clamp(21px,4vw,55px)] [height:_clamp(21px,4vw,55px)] object-cover object-center"
                          alt=""
                        />
                      </div>
                      <div className="flex-grow">
                        <img
                          src="/image/jumio.png"
                          className="max-w-full [height:_clamp(11px,4vw,30px)]"
                          alt=""
                        />
                        <span className="[font-size:_clamp(9px,3vw,16px)] font-normal text-[#000000cc]">
                          Akshay Kila
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rounded-[24px] mb-[29px] bg-white [padding:_clamp(15px,3vw,40px)]">
                    <p className="[font-size:_clamp(9px,3vw,22px)] font-normal text-[#000000bf]">
                      We partnered with DeeCogs' to customize their triage tool
                      to fit our unique needs. The AI-powered triage system has
                      significantly reduced our doctors' workload while
                      improving patient care efficiency. This solution has been
                      a game-changer for our business.
                    </p>

                    <div className="[margin-top:_clamp(10px,3vw,43px)] flex flex-wrap flex-row items-center">
                      <div className="shrink-0 me-[15px]">
                        <img
                          src="/image/madhur-srivastava.png"
                          className="max-w-full [width:_clamp(21px,4vw,55px)] [height:_clamp(21px,4vw,55px)] object-cover object-center"
                          alt=""
                        />
                      </div>
                      <div className="flex-grow">
                        <img
                          src="/image/real.png"
                          className="max-w-full h-[25px]"
                          alt=""
                        />
                        <span className="[font-size:_clamp(9px,3vw,16px)] font-normal text-[#000000cc]">
                          Madhur Srivastava
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[24px] bg-white [padding:_clamp(15px,3vw,40px)]">
                    <p className="[font-size:_clamp(9px,3vw,22px)] font-normal text-[#000000bf]">
                      The Smart Note Tab has streamlined patient history
                      summaries, reducing interaction time and workload,
                      allowing me to focus more on diagnoses.
                    </p>

                    <div className="[margin-top:_clamp(10px,3vw,43px)] flex flex-wrap flex-row items-center">
                      <div className="flex-grow">
                        <span className="[font-size:_clamp(9px,3vw,16px)] font-bold italic block text-[#000000cc]">
                          Fateh Physiotherapy Clinic
                        </span>
                        <span className="[font-size:_clamp(9px,3vw,16px)] block font-normal text-[#000000cc]">
                          Dr. Chetan
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rounded-[24px] mb-[29px] bg-white [padding:_clamp(15px,3vw,40px)]">
                    <p className="[font-size:_clamp(9px,3vw,22px)] font-normal text-[#000000bf]">
                      The Smart Note Tab from DeeCogs' has revolutionized my
                      teaching by providing clear, structured, and engaging
                      notes that enhance student learning.
                    </p>

                    <div className="[margin-top:_clamp(10px,3vw,43px)] flex flex-wrap flex-row items-center">
                      <div className="shrink-0 me-[15px]">
                        <img
                          src="/image/Bhagwan-Sharma-c.png"
                          className="max-w-full [width:_clamp(21px,4vw,55px)] [height:_clamp(21px,4vw,55px)] object-cover object-center"
                          alt=""
                        />
                      </div>
                      <div className="flex-grow">
                        <img
                          src="/image/Bhagwan-Sharma.png"
                          className="max-w-full h-[21px]"
                        />
                        <span className="[font-size:_clamp(9px,3vw,16px)] font-normal text-[#000000cc]">
                          Dr. Bhagwan Sharma
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[24px] bg-white [padding:_clamp(15px,3vw,40px)]">
                    <p className="[font-size:_clamp(9px,3vw,22px)] font-normal text-[#000000bf]">
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                      dignissim, metus nec fringilla accumsan, risus sem
                      sollicitudin lacus, ut interdum tellus elit sed risus.
                    </p>

                    <div className="[margin-top:_clamp(10px,3vw,43px)] flex flex-wrap flex-row items-center">
                      <div className="flex-grow">
                        <span className="[font-size:_clamp(9px,3vw,16px)] font-bold italic block text-[#000000cc]">
                          Shobha Engineering Workshop
                        </span>
                        <span className="[font-size:_clamp(9px,3vw,16px)] block font-normal text-[#000000cc]">
                          Mr. Rudal Sharma
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
    </section>
  );
};

export default ClientTestimonialsSection;