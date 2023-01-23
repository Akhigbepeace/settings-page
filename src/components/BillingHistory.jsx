import React from "react";
import download from "../assets/images/download.png";
import arrowDown from "../assets/images/arrow-down.png";
import badge from "../assets/images/badge.png";
import decPlan from "../assets/images/dec-plan.png";
import novPlan from "../assets/images/nov-plan.png";
import octPlan from "../assets/images/oct-plan.png";
import sepPlan from "../assets/images/sep-plan.png";
import augPlan from "../assets/images/aug-plan.png";
import julyPlan from "../assets/images/july-plan.png";
import junePlan from "../assets/images/june-plan.png";

const BillingHistory = () => {
  const tableHeads = ["Amount", "Date", "Status", "Users on plan"];

  const tableDatas = [
    {
      invoiceTitle: "Basic Plan - Dec 2022",
      amt: "USD $10.00",
      date: "Dec 1, 2022",
      status: badge,
      userPlan: decPlan,
    },
    {
      invoiceTitle: "Basic Plan - Nov 2022",
      amt: "USD $10.00",
      date: "Nov 1, 2022",
      status: badge,
      userPlan: novPlan,
    },
    {
      invoiceTitle: "Basic Plan - Oct 2022",
      amt: "USD $10.00",
      date: "Oct 1, 2022",
      status: badge,
      userPlan: octPlan,
    },
    {
      invoiceTitle: "Basic Plan - Sept 2022",
      amt: "USD $10.00",
      date: "Sept 1, 2022",
      status: badge,
      userPlan: sepPlan,
    },
    {
      invoiceTitle: "Basic Plan - Aug 2022",
      amt: "USD $10.00",
      date: "Aug 1, 2022",
      status: badge,
      userPlan: augPlan,
    },
    {
      invoiceTitle: "Basic Plan - July 2022",
      amt: "USD $10.00",
      date: "July 1, 2022",
      status: badge,
      userPlan: julyPlan,
    },
    {
      invoiceTitle: "Basic Plan - June 2022",
      amt: "USD $10.00",
      date: "June 1, 2022",
      status: badge,
      userPlan: junePlan,
    },
  ];

  return (
    <div>
      <div className="flex items-center mt-[32px] mb-[24px]">
        <h1 className="font-inter font-[600] text-[18px] text-[#101828] w-[840px] ">
          Billing History
        </h1>

        <a
          href="#!"
          className="flex items-center bg-white p-[10px_16px] rounded-[8px] shadow-[0px_1px_2px_rgba(16,2,40,0.05)] border-[1px] border-[#D0D5DD] "
        >
          <img
            src={download}
            alt="download"
            className="w-[20px] h-[20px] mr-[8px] "
          />
          <p className="font-inter font-[500] text-[14px] text-[#344054] ">
            Download all
          </p>
        </a>
      </div>

      <table class="table-fixed shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.1),0px_2px_4px_-2px_rgba(16,24,40,0.06)] border-[1px] border-[#EAECF0]  bg-white rounded-[8px] ">
        <thead className=" bg-[#F9FAFB] ">
          <tr>
            <th className="grid grid-flow-col items-center w-[400px]">
              <div className="flex items-center p-[12px_24px] ">
                <input type="checkbox" />
                <p className="font-inter text-[13px] font-[500] ml-[12px] text-[#667085] ">
                  Invoice
                </p>
                <img
                  src={arrowDown}
                  alt="arrow-down"
                  className="w-[16px] h-[16px]"
                />
              </div>
            </th>

            {tableHeads.map((tableHead, index) => (
              <th
                key={index}
                className="font-inter text-[13px] font-[500] p-[12px_24px] text-left text-[#667085] "
              >
                {tableHead}
              </th>
            ))}

            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableDatas.map((tableData, index) => (
            <tr key={index} className="border-t-[1px] border-t-[#EAECF0] ">
              <td className="flex  py-[26px] pl-[24px] ">
                <input type="checkbox" />
                <p className="font-inter text-[14px] font-[500] ml-[12px] text-[#101828] ">
                  {tableData.invoiceTitle}
                </p>
              </td>

              <td className="p-[26px_24px] text-[#667085] font-inter font-[400] text-[14px] m-auto  ">
                {tableData.amt}
              </td>
              <td className="p-[26px_24px] text-[#667085] font-inter font-[400] text-[14px] m-auto  ">
                {tableData.date}
              </td>
              <td className="p-[26px_24px]">
                <img src={badge} alt="badge" />
              </td>
              <td className="p-[26px_24px]">
                <img src={tableData.userPlan} alt="users-plan" />
              </td>
              <td className="p-[16px]">
                <a href="#!">
                  <img
                    src={download}
                    alt="download"
                    className="w-[20px] h-[20px] mr-[8px] "
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingHistory;
