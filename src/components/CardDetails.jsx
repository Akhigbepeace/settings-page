import React from "react";
import mastercard from "../assets/images/mastercard.png";
import visa from "../assets/images/visa.png";
import add from "../assets/images/add.png";

const CardDetails = () => {
  const paymentMethods = [
    {
      image: visa,
      bg: "#F9F5FF",
      titleColor: "#53389E",
      expiringColor: "#7F56D9",
      title: "Visa ending in 1234",
      expiring: "Expiry 06/2024",
      setDefaultColor: "#9E77ED",
      editColor: "#6941C6",
      checked: true,
      borderColor: "#D6BBFB",
      checkboxColor: "#7F56D9",
    },
    {
      image: mastercard,
      bg: "#FFFFFF",
      titleColor: "#344054",
      expiringColor: "#667085",
      title: "Mastercard ending in 1234",
      expiring: "Expiry 06/2024",
      setDefaultColor: "#9E77ED",
      editColor: "#6941C6",
      checkboxColor: "#344054",
      borderColor: "#EAECF0",
    },
  ];
  return (
    <div className="flex mt-[20px]">
      <div>
        <h2 className="text-[#344054] font-inter font-[600] text-[14px] mb-[4px]">
          Card details
        </h2>
        <p className="text-[#667085] font-inter font-[400] text-[14px] ">
          Select default payment method.
        </p>
      </div>

      <div className="grid gap-[12px] ml-[96px] ">
        {paymentMethods.map((paymentMethod, index) => (
          <div
            key={index}
            className={`flex justify-between rounded-[8px] border-[2px] border-[${paymentMethod.borderColor}] min-w-[694px] p-[16px] bg-[${paymentMethod.bg}] `}
          >
            <div className="flex  ">
              <img
                src={paymentMethod.image}
                alt="payment-methods"
                className=" w-[46px] h-[32px] "
              />
              <div className="ml-[12px] ">
                <div className="font-inter ">
                  <h2
                    className={` font-[600] text-[14px] text-[${paymentMethod.titleColor}] `}
                  >
                    {paymentMethod.title}
                  </h2>
                  <p
                    className={` font-[400] text-[13px] text-[${paymentMethod.titleColor}] `}
                  >
                    {paymentMethod.expiring}
                  </p>
                </div>

                <div className="flex items-center mt-[4px] ">
                  <p className="font-inter mr-[6px] font-[500] text-[14px] text-[#667085] ">
                    Set as default
                  </p>
                  <a
                    href="#!"
                    className="font-inter ml-[12px] font-[500] text-[14px] text-[#6941C6] "
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
            <input
              type="checkbox"
              checked={paymentMethod.checked}
              className=" rounded-full "
            />
          </div>
        ))}

        <a href="#!" className="flex">
          <img src={add} alt="add" />
          <p className="font-inter font-[500] text-[14px] text-[#667085] pl-[8px] ">
            Add new payment methods
          </p>
        </a>
      </div>
    </div>
  );
};

export default CardDetails;
