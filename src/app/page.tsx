import "./home.css";
import UpCard from "@/components/UpCard/UpCard";
import SupCard from "@/components/SupCard/SupCard";
import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import ActiveDraws from "@/components/ActiveDraws/ActiveDraws";
import PreviousDraws from "@/components/PreviousDraws/PreviousDraws";
import { currencies } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <Hero />
      <ActiveDraws />
      <PreviousDraws />
      <section className="w-full flex items-center justify-center py-20">
        <div className="max-w-[1200px]">
          <h3 className="supported-title mb-10">Upcoming Draws</h3>
          <div className="upcoming-wrapper px-8 flex items-center justify-between flex-wrap gap-10">
            <UpCard img="/static/images/anime1.png" />
            <UpCard img="/static/images/anime2.png" />
            <UpCard img="/static/images/anime4.png" />
            <UpCard img="/static/images/anime3.png" />
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center pt-10 pb-20">
        <div className="supported-container max-w-[1000px] container flex flex-col justify-center items-center gap-10">
          <h3 className="supported-title">Supported Currencies</h3>
          <div className="flex items-center justify-center flex-wrap gap-8">
            {currencies.map((item, index) => (
              <SupCard key={index} button={false} item={item} />
            ))}
          </div>
          <Link href="/shop" className="glow-on-hover p-5">
            Visit shop
          </Link>
        </div>
      </section>
    </>
  );
}
