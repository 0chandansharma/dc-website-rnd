import React from "react";

const SmartNoteTabSection = () => {
  return (
    <section className="smart-note-tab flex py-[88px] lg:py-0 items-center md:h-screen bg-[url('https://dcmedvectorstore.blob.core.windows.net/website-videos/End-to-End.gif')] bg-no-repeat bg-cover bg-cente">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <div className="text-center">
          <div>
            <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
              Upcoming
            </span>
            <h2 className="[font-size:_clamp(15px,2vw,56px)] [margin-top:_clamp(15px,2vw,36px)] [margin-bottom:_clamp(15px,2vw,28px)] text-[#000000CC] leading-[1] font-normal">
              <span>Explore the</span>{" "}
              <span className="heading-orange">Smart Note-Tab</span>
            </h2>
            <p className="text-[#707070] [font-size:_clamp(16px,2vw,28px)] leading-normal">
              Capture, Transform, Simplify—Smart Notes Redefined.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartNoteTabSection;