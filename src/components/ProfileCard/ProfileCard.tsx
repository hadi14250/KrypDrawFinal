import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";

const ProfileCard = (props: any) => {
  const { user } = props;
  return (
    <div className="draw-card h-[290px] w-[350px] relative p-[3px]">
      <Image
        unoptimized={true}
        width={90}
        height={90}
        src="/static/images/top_card_image.png"
        alt="top card image"
        className="absolute z-[999] top-[2px] right-25"
      />
      <Image
        unoptimized={true}
        width={90}
        height={90}
        src="/static/images/bottom_card_image.png"
        alt="top card image"
        className="absolute z-[999] bottom-[0px] -left-[0px]"
      />
      <div
        style={{
          clipPath: "polygon(0 0, 88% 0, 100% 16%, 100% 100%, 12% 100%, 0 91%)",
        }}
        className="w-full px-3 py-5 flex flex-col items-center justify-between h-full bg-[#15112C]"
      >
        <div className="text-center">
          <h1 className="text-[#B9B9B9] text-[14px]">Ticket Balance</h1>
          <p className="text-[28px]">{user?.tickets}</p>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-1 bg-[#000] p-2 text-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <h1 className="text-[15px] truncate">{user?.username}</h1>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{user?.username}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <h1 className="text-[#B9B9B9] text-[11px]">Username</h1>
          </div>
          <div className="col-span-2 bg-[#000] p-2 text-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <h1 className="text-[15px] truncate">{user?.email}</h1>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{user?.email}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <h1 className="text-[#B9B9B9] text-[11px]">Email</h1>
          </div>
          <div className="col-span-1 bg-[#000] p-2 text-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <h1 className="text-[15px] truncate">{user?.telegram}</h1>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{user?.telegram}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <h1 className="text-[#B9B9B9] text-[11px]">Telegram</h1>
          </div>
        </div>
        <Link href="/shop" className="p-4 glow-on-hover uppercase">
          Buy more tickets
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
