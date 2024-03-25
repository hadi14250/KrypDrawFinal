"use client";
import Link from "next/link";
import "./style.css";
import Image from "next/image";
import { Input } from "../ui/input";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SupCard(props: any) {
  const { item, button } = props;
  const [total, setTotal] = useState(0);
  return (
    <div
      style={{
        height: button ? "250px" : "200px",
      }}
      className={`${
        button ? "draw-card-button" : "draw-card"
      } h-[200px] w-[264px] relative p-[3px]`}
    >
      <Image
        unoptimized={true}
        width={70}
        height={70}
        src="/static/images/top_card_image.png"
        alt="top card image"
        className="absolute top-0 right-20"
      />
      <Image
        unoptimized={true}
        width={70}
        height={70}
        src="/static/images/bottom_card_image.png"
        alt="top card image"
        className="absolute z-[999] -bottom-[1px] -left-[2px]"
      />
      <div
        style={{
          clipPath: button
            ? "polygon(0 0, 88% 0, 100% 16%, 100% 100%, 12% 100%, 0 93%)"
            : "polygon(0 0, 88% 0, 100% 16%, 100% 100%, 12% 100%, 0 91%)",
        }}
        className="w-full h-full flex items-center justify-center bg-[#15112C]"
      >
        <div className="p-6 flex gap-4 flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Image
              unoptimized={true}
              width={30}
              height={30}
              className="max-h-[40px]"
              src={item.img}
              alt="support image"
            />
          </div>
          <p className="text-[14px]">
            Input Ticket Quantity and see the conversion
          </p>
          <div className="flex items-center justify-center gap-3">
            <Input
              style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
              className="text-black text-[10px] w-[80px] h-[30px]"
              type="number"
              onChange={(e: any) =>
                setTotal(
                  (e.target.valueAsNumber * item.ticketPrice) / item.tokenPrice
                )
              }
              placeholder="Quantity"
            />
            <FontAwesomeIcon icon={faArrowRight} color="white" />
            <Input
              style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
              className="cursor-default text-black text-[10px] w-[80px] h-[30px]"
              type="number"
              value={total}
              readOnly
            />
          </div>
          {button && (
            <Link
              href={`/shop/${item.id}`}
              className="uppercase p-3 glow-on-hover"
            >
              BUY WITH {item.name}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
