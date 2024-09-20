import React from "react";
import logo from "../Assets/org.jpg";
import { CiCalendar } from "react-icons/ci";
import { TbCashBanknote } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { PiClockClockwiseFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function JobCover({ title, company, salary, location, experience }) {
  return (
    <Link to="/job">
      <div className="border-[1px] p-[10px] flex flex-col justify-center w-[600px] rounded-md shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-1 text-left">
            <p className="text-[18px] font-medium">{title}</p>
            <p className="text-[14px] text-gray-500">{company}</p>
          </div>
          <img src={logo} alt="logo" className="h-[30px] w-[30px]" />
        </div>
        <div className="flex items-center text-gray-600 text-[15px] py-[10px] space-x-3">
          <div className="flex space-x-1 items-center ">
            <IoLocationOutline className="h-[18px] w-[18px]" />
            <p>{location}</p>
          </div>
          <div className="flex space-x-1 items-center">
            <CiCalendar className="h-[18px] w-[18px]" />
            <p>{experience}</p>
          </div>
          <div className="flex space-x-1 items-center">
            <TbCashBanknote className="h-[18px] w-[18px]" />
            <p>{salary}</p>
          </div>
        </div>
        <div className="py-[10px] flex space-x-5">
          <div className="bg-gray-200 rounded-md space-x-1 text-gray-600 w-fit flex items-center px-[5px]">
            <PiClockClockwiseFill className="w-[18px] h-[18px]" />
            <p className="text-[14px]">Posted 1 week ago</p>
          </div>
          <div className="bg-gray-200 rounded-md text-gray-600 w-fit px-[5px]">
            <p className="text-[14px]">Job</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default JobCover;
