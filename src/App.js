import React from "react";
import Sidebar from "./components/Sidebar";
import ContactEmail from "./components/ContactEmail";
import CardDetails from "./components/CardDetails";
import HeaderButtons from "./components/HeaderButtons";
import BillingHistory from "./components/BillingHistory";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />

      {/* <div className="bg-[red] w-screen p-[32px]"> */}
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

          <HeaderButtons />
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
            <ContactEmail />

            <CardDetails />

            <BillingHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
