import { fetchInActiveCampaigns } from "@/utils/actions";
import React, { useEffect, useState } from "react";
import CryptCard from "../CryptCard/CryptCard";

const PreviousDraws = async () => {
  // const draws = [
  //   {
  //     title: "1,000,000 USDT Draw",
  //     img: "/static/images/t.png",
  //     price: "5 Tickets",
  //     tickets: 2000,
  //   },
  //   {
  //     img: "/static/images/bitcoin.svg",
  //     title: "20 BTC Draw",
  //     price: "5 Tickets",
  //     tickets: 2000,
  //   },
  //   {
  //     img: "/static/images/black.svg",
  //     title: "200 ETH Draw",
  //     price: "5 Tickets",
  //     tickets: 2000,
  //   },
  //   {
  //     img: "/static/images/s.png",
  //     title: "1,000 SOL Draw",
  //     price: "5 Tickets",
  //     tickets: 2000,
  //   },
  // ];
  const draws = (await fetchInActiveCampaigns(1)).data;
  return (
    <>
      {draws.length > 0 && (
        <section className="py-[60px] w-full flex items-center justify-center">
          <div className="max-w-[1200px]">
            <h3 className="supported-title mb-10">Previous Draws</h3>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {draws.map((draw: any, index: number) => (
                <CryptCard
                  isPrevious={true}
                  key={index}
                  title={draw.title}
                  img={draw.img}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PreviousDraws;
