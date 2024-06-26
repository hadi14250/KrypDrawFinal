import Link from "next/link";
import React from "react";
import CustomWalletButton from "../CustomWalletButton/CustomWalletButton";

const TotalDraws = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div
        style={{
          boxShadow: "-3px 8px 4px 0px rgba(0, 0, 0, 0.30)",
        }}
        className="bg-[#15112C] col-span-2 p-1 flex flex-col items-center justify-center"
      >
        <h1 className="text-sm font-bold text-white">Total Draws</h1>
        <h1 className="text-sm font-bold text-white">20</h1>
      </div>
      <div
        style={{
          boxShadow: "-3px 8px 4px 0px rgba(0, 0, 0, 0.30)",
        }}
        className="bg-[#15112C] col-span-1 flex p-[2px] flex-col items-center justify-center"
      >
        <h1 className="text-sm font-bold text-white">Current Draws</h1>
        <h1 className="text-sm font-bold text-white">5</h1>
      </div>
      <div
        style={{
          boxShadow: "-3px 8px 4px 0px rgba(0, 0, 0, 0.30)",
        }}
        className="bg-[#15112C] col-span-1 flex p-[2px] flex-col items-center justify-center"
      >
        <h1 className="text-sm font-bold text-white">Previous Draws</h1>
        <h1 className="text-sm font-bold text-white">5</h1>
      </div>
      <div className="col-span-2">
        <Link
          style={{
            boxShadow: "-3px 8px 4px 0px rgba(0, 0, 0, 0.30)",
          }}
          className="after:!rounded-[2px] !rounded-[2px] p-[9.15px] md:p-[6.5px] h-full flex items-center justify-center glow-on-hover col-span-2 uppercase"
          href="/"
        >
          check transaction history
        </Link>
      </div>
      <div className="col-span-2">
        <Link
          style={{
            boxShadow: "-3px 8px 4px 0px rgba(0, 0, 0, 0.30)",
          }}
          className="after:!rounded-[2px] h-full p-[9.15px] md:p-[6.5px] !rounded-[2px] flex items-center justify-center glow-on-hover col-span-2 uppercase"
          href="/draws"
        >
          go to draws
        </Link>
      </div>
      <CustomWalletButton />
    </div>
  );
};

export default TotalDraws;
