import SupCard from "@/components/SupCard/SupCard";
import React from "react";
import "../home.css";
import SupCustomCard from "@/components/SupCustomCard/SupCustomCard";

export const currencies = [
  {
    id: "1",
    name: "KRYPDRAW",
    tickets: 20,
    amount: "2",
    ticketPrice: 10,
    tokenPrice: 0.02,
    img: "/static/images/kryp.png",
  },
  {
    id: "2",
    name: "BTC",
    tickets: 20,
    amount: "0.00076",
    ticketPrice: 10,
    tokenPrice: 57635,
    img: "/static/images/bitcoin.svg",
  },
  {
    id: "3",
    name: "ETH",
    tickets: 200,
    amount: "0.56",
    ticketPrice: 10,
    tokenPrice: 2948,
    img: "/static/images/black.svg",
  },
  {
    id: "4",
    name: "SOL",
    tickets: 20,
    amount: "2",
    ticketPrice: 10,
    tokenPrice: 100,
    img: "/static/images/s.png",
  },
  {
    id: "5",
    name: "USDT",
    tickets: 20,
    amount: "2",
    ticketPrice: 10,
    tokenPrice: 1.0002,
    img: "/static/images/t.png",
  },
];

const ShopPage = () => {
  return (
    <section className="w-full pt-30 flex justify-center items-center pt-10 pb-20">
      <div className="supported-container max-w-[1000px] container flex flex-col justify-center items-center gap-10">
        <h3 className="supported-title !text-[24px]">Supported Currencies</h3>
        <div
          style={{
            gridAutoRows: "1fr",
          }}
          className="flex items-center justify-center flex-wrap gap-8"
        >
          {currencies.map((item, index) => (
            <SupCard key={index} button={true} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
