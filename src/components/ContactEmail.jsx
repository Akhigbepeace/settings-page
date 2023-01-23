import React from "react";
import mail from "../assets/images/mail.png";

const ContactEmail = () => {
  return (
    <div className="flex items-start border-b-[1px] border-b-[#D0D5DD] pb-[20px] ">
      <div>
        <h2 className="text-[#344054] font-inter font-[600] text-[14px] mb-[4px]">
          Contact email
        </h2>
        <p className="text-[#667085] font-inter font-[400] text-[14px] ">
          Where should invoices be sent?
        </p>
      </div>

      <div className="ml-[96px] ">
        <div className="flex ">
          <input type="radio" className=" mr-[8px] mt-[-18px] " />
          <div>
            <h2 className="text-[#344054] font-inter font-[600] text-[14px]">
              Send to my account email
            </h2>
            <p className="text-[#667085] font-inter font-[400] text-[14px] ">
              olivia@untitledui.com
            </p>
          </div>
        </div>

        <div className="flex mt-[16px] items-start ">
          <input type="radio" className=" mr-[8px] mt-[6px] " checked />
          <div>
            <h2 className="text-[#344054] font-inter font-[600] mb-[12px] text-[14px]">
              Send to an alternative email
            </h2>
            <div className="search flex  w-[448px] rounded-[8px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[1px] border-[#D0D5DD] py-[6px] mt-[12px]  ">
              <img src={mail} alt="search" className="pl-[14px] " />
              <input
                type="search"
                placeholder="billing@untitledui.com"
                className=" m-auto outline-none w-[448px] bg-transparent ml-[10px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactEmail;
