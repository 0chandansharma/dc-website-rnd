import React from "react";

const CollaboratorsSection = () => {
  return (
    <section className="our-collaborators-sec [padding-top:_clamp(36px,4vw,136px)] [padding-bottom:_clamp(36px,4vw,136px)]">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <div className="flex justify-center flex-row flex-wrap">
          <div className="basis-full lg:basis-8/12">
            <div className="text-center">
              <h2 className="leading-[1] [font-size:_clamp(26px,2vw,48px)] [margin-bottom:_clamp(15px,2vw,26px)] text-[#505050] font-normal">
                Our Collaborators
              </h2>
              <p className="[font-size:_clamp(16px,2vw,22px)] [margin-bottom:_clamp(12px,2vw,55px)] text-[#000000bf] font-normal">
                We bring together the best of our network to help your
                business gain the competitive edge.
              </p>
            </div>
            <div className="flex justify-center flex-wrap flex-row">
              <div className="basis-8/12">
                <div className="flex justify-between items-center flex-wrap flex-row">
                  <img
                    src="/image/our-collaborators-1.jpeg"
                    className="w-full [max-width:_clamp(41px,4vw,128px)] inline-block"
                    alt=""
                  />
                  <img
                    src="/image/our-collaborators-2.jpeg"
                    className="w-full inline-block [max-width:_clamp(48px,10vw,193px)]"
                    alt=""
                  />
                  <img
                    src="/image/our-collaborators-3.png"
                    className="w-full inline-block [max-width:_clamp(23px,4vw,72px)]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;