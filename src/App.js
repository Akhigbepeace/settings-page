import React from "react";
import Sidebar from "./components/Sidebar";
import mail from "./assets/images/mail.png";

const App = () => {
  const sections = [
    "My details",
    "Profile",
    "Password",
    "Team",
    "Plan",
    "Billing",
    "Notifications",
    "Integrations",
    "API",
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="bg-[#F9FAFB] w-screen p-[32px]">
        <div>
          <div>
            <h1 className=" font-inter text-[30px] font-[600] text-[#101828]  ">
              Settings
            </h1>
            <p className="font-inter text-[16px] font-[400] text-[#667085] ">
              Manage your team and preferences here.
            </p>
          </div>

          <div className=" flex mt-[24px] drop-shadow-[0px_1px_2px_rgba(16_24_40_0.05)] border-[1px] rounded-[8px] bg-white  border-[#D0D5DD] divide-x-2 w-[798px] ">
            {sections.map((section, index) => (
              <a
                href="#!"
                key={index}
                className="p-[10px_16px] hover:bg-[#edf2f7] "
              >
                {section}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className=" mt-[32px] mb-[25px] ">
            <h1 className=" text-[#101828] font-inter font-[600] text-[18px] mb-[4px] ">
              Payment Method
            </h1>
            <p className=" text-[#667085] font-inter font-[400] text-[14px] mb-[22px] border-b-[1px] border-b-[#D0D5DD] divide-y-2 pb-[20px] ">
              Update your billing details and address.
            </p>
          </div>

          <div>
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

            <div className="flex mt-[20px]">
              <div>
                <h2 className="text-[#344054] font-inter font-[600] text-[14px] mb-[4px]">
                  Card details
                </h2>
                <p className="text-[#667085] font-inter font-[400] text-[14px] ">
                  Select default payment method.
                </p>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
