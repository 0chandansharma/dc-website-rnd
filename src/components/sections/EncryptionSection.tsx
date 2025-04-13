import React from "react";

const EncryptionSection = () => {
  return (
    <section className="ensuring-sec relative bg-[#FFFAF8] [padding-top:_clamp(17px,4vw,71px)] [padding-bottom:_clamp(17px,4vw,128px)]">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <div className="flex justify-center">
          <div className="basis-full md:basis-11/12">
            <div className="text-center">
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                Privacy & Security
              </span>
              <h2 className="[font-size:_clamp(15px,2vw,48px)] [margin-top:_clamp(8px,2vw,39px)] text-[#000000CC] leading-[1.3] font-normal">
                <span>Ensuring</span>{" "}
                <span className="heading-orange">End-to-End</span> Encryption
              </h2>
            </div>

            {/* Updated grid to display two rows */}
            <div className="grid grid-cols-2 gap-4 [margin-top:_clamp(40px,2vw,107px)]">
              {/* Card 1 */}
              <div className="bg-[#FE66232E] flex flex-row rounded-[12px] p-[10px] transition-all duration-300 ease-in-out hover:bg-[#FE6623] hover:text-white">
                <div className="shrink-0">
                  <svg
                    className="h-[40px]"
                    viewBox="0 0 63 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.875 79.3984C5.70938 79.3984 3.85547 78.6617 2.31328 77.1883C0.771094 75.7149 0 73.9437 0 71.8746V34.2556C0 32.1865 0.771094 30.4153 2.31328 28.9419C3.85547 27.4685 5.70938 26.7318 7.875 26.7318H11.8125V19.208C11.8125 14.004 13.732 9.56808 17.5711 5.90022C21.4102 2.23237 26.0531 0.398438 31.5 0.398438C36.9469 0.398438 41.5898 2.23237 45.4289 5.90022C49.268 9.56808 51.1875 14.004 51.1875 19.208V26.7318H55.125C57.2906 26.7318 59.1445 27.4685 60.6867 28.9419C62.2289 30.4153 63 32.1865 63 34.2556V71.8746C63 73.9437 62.2289 75.7149 60.6867 77.1883C59.1445 78.6617 57.2906 79.3984 55.125 79.3984H7.875ZM7.875 71.8746H55.125V34.2556H7.875V71.8746ZM31.5 60.5889C33.6656 60.5889 35.5195 59.8522 37.0617 58.3788C38.6039 56.9054 39.375 55.1342 39.375 53.0651C39.375 50.9961 38.6039 49.2248 37.0617 47.7514C35.5195 46.278 33.6656 45.5413 31.5 45.5413C29.3344 45.5413 27.4805 46.278 25.9383 47.7514C24.3961 49.2248 23.625 50.9961 23.625 53.0651C23.625 55.1342 24.3961 56.9054 25.9383 58.3788C27.4805 59.8522 29.3344 60.5889 31.5 60.5889ZM19.6875 26.7318H43.3125V19.208C43.3125 16.073 42.1641 13.4084 39.8672 11.2139C37.5703 9.01947 34.7812 7.92225 31.5 7.92225C28.2188 7.92225 25.4297 9.01947 23.1328 11.2139C20.8359 13.4084 19.6875 16.073 19.6875 19.208V26.7318Z"
                      fill="black"
                      fillOpacity="0.85"
                    />
                  </svg>
                </div>
                <div className="grow pl-[16px]">
                  <h3 className="text-[#0E1A36] mb-[8px] text-[16px] leading-[1.3]">
                    Data Encryption & Storage
                  </h3>
                  <p className="text-[#000000BF] text-[12px] leading-[1.3]">
                    We use data-encryption to protect sensitive data, ensuring compliance with international standards.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FE66232E] flex flex-row rounded-[12px] p-[10px] transition-all duration-300 ease-in-out hover:bg-[#FE6623] hover:text-white">
                <div className="shrink-0">
                  <svg
                    className="h-[40px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/>
                  </svg>
                </div>
                <div className="grow pl-[16px]">
                  <h3 className="text-[#0E1A36] mb-[8px] text-[16px] leading-[1.3]">
                    Policies and Consent
                  </h3>
                  <p className="text-[#000000BF] text-[12px] leading-[1.3]">
                    We use data policies, obtain consent from users, and use anonymization for maximum privacy.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FE66232E] flex flex-row rounded-[12px] p-[10px] transition-all duration-300 ease-in-out hover:bg-[#FE6623] hover:text-white">
                <div className="shrink-0">
                  <svg
                    className="h-[40px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/>
                  </svg>
                </div>
                <div className="grow pl-[16px]">
                  <h3 className="text-[#0E1A36] mb-[8px] text-[16px] leading-[1.3]">
                    Real-Time Monitoring
                  </h3>
                  <p className="text-[#000000BF] text-[12px] leading-[1.3]">
                    We have deployed AI monitoring to detect and neutralize real-time cyber threats.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#FE66232E] flex flex-row rounded-[12px] p-[10px] transition-all duration-300 ease-in-out hover:bg-[#FE6623] hover:text-white">
                <div className="shrink-0">
                  <svg
                    className="h-[40px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M509.1 247.7L394.5 133.1c-10.7-10.7-23.8-16.9-38.1-16.9H61.8c-14.3 0-27.4 6.2-38.1 16.9L2.9 247.7c-10.7 10.7-10.7 27.9 0 38.6L117.5 394.5c10.7 10.7 23.8 16.9 38.1 16.9h294.6c14.3 0 27.4-6.2 38.1-16.9L509.1 286.3c10.7-10.7 10.7-27.9 0-38.6zM314.1 357.3H197.9c-11.4 0-21.4-9.3-21.4-21.4s9.3-21.4 21.4-21.4h116.2c11.4 0 21.4 9.3 21.4 21.4s-9.3 21.4-21.4 21.4z"/>
                  </svg>
                </div>
                <div className="grow pl-[16px]">
                  <h3 className="text-[#0E1A36] mb-[8px] text-[16px] leading-[1.3]">
                    Secure Messaging
                  </h3>
                  <p className="text-[#000000BF] text-[12px] leading-[1.3]">
                    All messages are securely encrypted end-to-end to prevent unauthorized access.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-[#FE66232E] flex flex-row rounded-[12px] p-[10px] transition-all duration-300 ease-in-out hover:bg-[#FE6623] hover:text-white">
                <div className="shrink-0">
                  <svg
                    className="h-[40px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M291.2 32C278.3 32 264.3 43.9 256.6 57.9C247.9 71.9 234.7 80 221.5 80H88C73.7 80 64 89.7 64 104V408C64 422.3 73.7 432 88 432H221.5C234.7 432 247.9 423.9 256.6 409.9C264.3 395.9 278.3 384 291.2 384C318.8 384 336 366.8 336 340C336 314.1 318.8 296 291.2 296C274.6 296 261.7 306.4 255.7 318.5C250.3 327.8 238.2 333.5 228.6 328.9C218.9 324.3 213.2 312.3 213.2 302.2V149.3L57.1 156.6C43.9 157.2 32 169.9 32 184.3C32 196.3 40.9 207.8 54.6 211.3L216.2 278.6L157.9 319.7C143.2 329.6 143.1 350.2 155.9 358.9C168.8 367.5 189.6 357.8 192.9 346.1L245.2 318.7C246.8 316.6 249.9 314.9 252.4 313.8C254.4 312.9 257.3 312.7 259.9 313.3L420.7 347.9C426.1 349.5 432.4 347.2 436.3 343.1C440.1 339.1 441.6 332.5 441.6 325.5C441.6 321.9 438.7 317.5 435.3 315.2C432.7 312.6 424.5 312.2 416.3 314.4L337.9 327.5L306.2 299.8C311.2 292.6 316.9 282.9 321.4 272.1C332.7 248.8 328.6 225.1 316.8 207.9C303.5 188.3 285.1 176 259.9 176C231.5 176 207.8 192.9 191.5 211.3C169.2 238.3 164.4 257.6 168.4 281.2L368 281.3C370.1 281.3 372.4 281.8 374.1 283.1L512 443C524.8 460.6 522.7 482.7 508.4 496.4C494.1 510.2 473 507.7 455.8 489.2L291.2 32Z"/>
                  </svg>
                </div>
                <div className="grow pl-[16px]">
                  <h3 className="text-[#0E1A36] mb-[8px] text-[16px] leading-[1.3]">
                    Secure Cloud
                  </h3>
                  <p className="text-[#000000BF] text-[12px] leading-[1.3]">
                    We store all your files securely in the cloud with encryption ensuring maximum data protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EncryptionSection;
