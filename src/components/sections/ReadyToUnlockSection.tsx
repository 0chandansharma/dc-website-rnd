import React from "react";
import Link from "next/link";

interface ReadyToUnlockSectionProps {
  onBookDemo: () => void;
}

const ReadyToUnlockSection = ({ onBookDemo }: ReadyToUnlockSectionProps) => {
  return (
    <section className="redy-to-unlock flex justify-center items-center flex-wrap [padding-top:_clamp(54px,4vw,122px)] [padding-bottom:_clamp(54px,4vw,122px)] bg-[url('/image/image-bg-gradient.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <div className="flex justify-center flex-wrap">
          <div className="basis-full md:basis-8/12">
            <div className="relative z-10 [padding-top:_clamp(52px,11vw,202px)] [padding-bottom:_clamp(42px,11vw,188px)]">
              <h2 className="Helvetica-400 [font-size:_clamp(10px,3vw,36px)] text-[#000] leading-normal">
                <span className="text-[#5B5958] block">
                  Ready to unlock the power of AI for your business?
                </span>
                Let's start the journey today!
              </h2>
              <img
                src="/image/d.png"
                className="[max-width:_clamp(126px,30vw,508px)] z-0 w-full absolute right-[20%] md:right-0 top-0 bottom-0"
                alt=""
              />
              <div>
                <Link
                  className="bg-[#FE6623E3] leading-[1.2] [margin-top:_clamp(21px,2vw,80px)] [padding-left:_clamp(2px,2vw,20px)] [padding-right:_clamp(2px,2vw,20px)] [padding-top:_clamp(1px,2vw,7px)] [padding-bottom:_clamp(1px,2vw,7px)] [font-size:_clamp(8px,2vw,22px)] border border-[#FE6623] rounded-[32px] inline-block text-[#ffffffe6]"
                  href="#"
                  onClick={onBookDemo}
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToUnlockSection;