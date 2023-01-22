import React from "react";

const HeaderButtons = () => {
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
    <div className=" flex mt-[24px] drop-shadow-[0px_1px_2px_rgba(16_24_40_0.05)] border-[1px] rounded-[8px] bg-white  border-[#D0D5DD] divide-x-2 w-[798px] ">
      {sections.map((section, index) => (
        <a href="#!" key={index} className="p-[10px_16px] hover:bg-[#edf2f7] ">
          {section}
        </a>
      ))}
    </div>
  );
};

export default HeaderButtons;
