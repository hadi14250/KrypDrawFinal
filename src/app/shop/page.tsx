import SupCard from "@/components/SupCard/SupCard";
import React from "react";
import "../home.css";
import { currencies } from "@/lib/utils";

const ShopPage = () => {
  return (
    <section className="w-full flex justify-center items-center pt-20 pb-10">
      <div className="supported-container max-w-[1000px] container flex flex-col justify-center items-center gap-10">
        <h3 className="supported-title">Supported Currencies</h3>
        <div className="flex items-center justify-center flex-wrap gap-8">
          {currencies.map((item, index) => (
            <SupCard key={index} button={true} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
