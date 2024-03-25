import { fetchActiveCampaigns } from "@/utils/actions";
import React from "react";
import CryptCard from "../CryptCard/CryptCard";

const ActiveDraws = async () => {
  const draws = (await fetchActiveCampaigns(1)).data;
  if (draws.length > 0) {
    return (
      <section className="py-[60px] w-full flex items-center justify-center">
        <div className="max-w-[1200px]">
          <h3 className="supported-title mb-10">Active Draws</h3>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {draws.map((draw: any, index: number) => (
              <CryptCard
                isPrevious={false}
                key={index}
                title={draw.title}
                img={draw.img}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  return null;
};

export default ActiveDraws;
