import React from "react";
import { Button, Modal } from "flowbite-react";

interface ContactModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const ContactModal = ({ openModal, setOpenModal }: ContactModalProps) => {
  return (
    <Modal
      show={openModal}
      size="xxl"
      popup
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header />

      <Modal.Body className="lg:px-[200px] lg:pb-[80px] relative">
        <div className="space-y-6 h-full flex items-center flex-wrap">
          <div className="w-full">
            <h3 className="text-[#000] text-[28px] lg:text-[56px] leading-normal">
              <span className="text-[#454545] block">
                Get in touch with Us.
              </span>{" "}
              We are here to Assist you.
            </h3>

            <form action="" className="!mt-[30px] lg:!mt-[80px]">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-[48px] gap-y-[20px] gap-x-[15px] md:gap-x-[32px]">
                <div>
                  <input
                    type="text"
                    id="floating_name"
                    className="block min-h-[56px] md:min-h-[78px] p-[10px] w-full text-[#000] bg-transparent border-0 border-b-2 border-p[#000000bf] appearance-none focus:outline-none focus:ring-0 placeholder:text-[#000000] text-[20px] focus:border-[#FE6623E3] peer"
                    placeholder="Your Name"
                    required
                    name="floating_name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="floating_email"
                    className="block min-h-[56px] md:min-h-[78px] p-[10px] w-full text-[#000] bg-transparent border-0 border-b-2 border-p[#000000bf] appearance-none focus:outline-none focus:ring-0 placeholder:text-[#000000] text-[20px] focus:border-[#FE6623E3] peer"
                    placeholder="Email Address"
                    required
                    name="floating_email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="floating_phone"
                    className="block min-h-[56px] md:min-h-[78px] p-[10px] w-full text-[#000] bg-transparent border-0 border-b-2 border-p[#000000bf] appearance-none focus:outline-none focus:ring-0 placeholder:text-[#000000] text-[20px] focus:border-[#FE6623E3] peer"
                    placeholder="Phone Number (optional)"
                    name="floating_phone"
                  />
                </div>
                <div className="md:col-span-3">
                  <textarea
                    id="floating_message"
                    className="block min-h-[110px] md:min-h-[146px] p-[10px] w-full text-[#000] bg-transparent border-0 border-b-2 border-p[#000000bf] appearance-none focus:outline-none focus:ring-0 placeholder:text-[#000000] text-[20px] focus:border-[#FE6623E3] peer"
                    placeholder="Message"
                    required
                    name="floating_message"
                  ></textarea>
                </div>

                <div className="md:col-span-3">
                  <Button className="bg-[#fe6623e3] !outline-0 hover:!bg-[#fe6623e3] !shadow-none !text-[16px] xl:!text-[22px] border border-[#fe6623] hover:!bottom-[#fff] leading-[] rounded-[32px] py-[8px] px-[62px] inline-block text-[#ffffffe6]">
                    <span className="!text-[16px] xl:!text-[22px]">
                      Send
                    </span>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <img
            src="/image/d-overlay.png"
            className="max-w-[360px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[700px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            alt=""
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;