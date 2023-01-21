import React from "react";
import logo from "../assets/images/Logo.png";
import search from "../assets/images/search.png";
import imageWrap from "../assets/images/image-wrap.png";
import avatar from "../assets/images/avatar.png";
import logout from "../assets/images/logout.png";
import { navigations } from "../data";
import settings from "../assets/images/settings.png";
import support from "../assets/images/support.png";

const Sidebar = () => {
  return (
    <div className="sidebar w-[280px] min-h-[100vh] py-[32px] border-r-[1px] border-r-[#EAECF0;] ">
      <div className="nav  ">
        <div className="header px-[24px]">
          <img src={logo} alt="logo" />
        </div>

        <div className="search mx-[24px] flex items-center w-[231px] rounded-[8px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[1px] border-[#D0D5DD] py-[6px] mt-[24px]  ">
          <img src={search} alt="search" className="pl-[14px] " />
          <input
            type="search"
            placeholder="Search"
            className=" m-auto outline-none "
          />
        </div>

        <div className="navigation px-[16px]  mt-[24px] flex flex-col items-start gap-[4px] ">
          {navigations.map((navigation, index) => (
            <a
              href="#!"
              key={index}
              className="flex p-[8px] w-[247px] hover:bg-[#F9FAFB]"
            >
              <img
                src={navigation.icon}
                alt="icon"
                className="pr-[12px] pl-[4px] h-[24px] "
              />
              <h2>{navigation.title}</h2>
            </a>
          ))}
        </div>
      </div>

      <div className="footer ">
        <div className="navigation px-[16px] mt-[24px] flex flex-col items-start gap-[4px]">
          <a
            href="#!"
            className="flex p-[8px] rounded-[6px] h-[40px] w-[247px] hover:bg-[#F9FAFB]"
          >
            <img
              src={support}
              alt="icon"
              className="pr-[12px] pl-[4px] h-[24px]"
            />
            <h2>Support</h2>
          </a>

          <a
            href="#!"
            className="flex p-[8px] rounded-[6px] h-[40px]  w-[247px] bg-[#F9FAFB]"
          >
            <img
              src={settings}
              alt="icon"
              className="pr-[12px] pl-[4px] h-[24px]"
            />
            <h2>Settings</h2>
          </a>
        </div>

        <div className="image-wrap bg-[#F9FAFB] mx-[16px] mt-[24px] rounded-[8px] p-[20px_16px_20px_16px] ">
          <h3 className="mb-[4px] font-[inter] font-[600] text-[14px] text-[#101828] ">
            New features available!
          </h3>
          <p className="font-[inter] text-[14px] text-[#667085] leading-[20px] ">
            Check out the new dashboard view. Pages now load faster.
          </p>

          <img src={imageWrap} alt="wrap" className="my-[16px]   " />

          <div className="flex items-center ">
            <p className="font-inter mr-[6px] font-[500] text-[14px] text-[#667085] ">
              Dismiss
            </p>
            <a
              href="#!"
              className="font-inter ml-[6px] font-[500] text-[14px] text-[#6941C6] "
            >
              What's new?
            </a>
          </div>
        </div>

        <div className=" h-[1px] bg-[#EAECF0] w-[86%]  mx-auto my-[24px] " />

        <div className="grid grid-flow-col ">
          <div className="flex pl-[24px] ">
            <img
              src={avatar}
              alt="avatar"
              className="object-cover w-[40px] h-[40px] mr-[12px] "
            />
            <div>
              <h2 className="text-[#101828] font-[600] text-[14px] font-inter ">
                Olivia Rhye
              </h2>
              <p className="text-[#667085] font-[400] text-[14px] font-inter">
                olivia@untitledui.com
              </p>
            </div>
          </div>

          <a href="#!">
            <img src={logout} alt="logout" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
