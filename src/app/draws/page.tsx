import ActiveDraws from "@/components/ActiveDraws/ActiveDraws";
import CryptCard from "@/components/CryptCard/CryptCard";
import PreviousDraws from "@/components/PreviousDraws/PreviousDraws";
import UpCard from "@/components/UpCard/UpCard";
import React from "react";

const DrawsPage = () => {
  const draws = [
    {
      title: "1,000,000 USDT Draw",
      price: "5 Tickets",
      tickets: 2000,
    },
  ];
  return (
    <div className="pt-20">
      <ActiveDraws />
      <PreviousDraws />
      <section className="w-full flex items-center justify-center py-20">
        <div className="max-w-[1200px]">
          <h3 className="supported-title mb-10">Upcoming Draws</h3>
          <div className="upcoming-wrapper px-8  flex items-center justify-between flex-wrap gap-10">
            <UpCard img="/static/images/anime1.png" />
            <UpCard img="/static/images/anime2.png" />
            <UpCard img="/static/images/anime4.png" />
            <UpCard img="/static/images/anime3.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrawsPage;
