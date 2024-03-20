import "./hero.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div
      style={{
        background:
          "linear-gradient(305.32deg, #1B0229 3.07%, #4A066F 47.68%, #65188E 89.86%)",
      }}
      className="w-full pt-30 h-[100vh] flex items-center justify-center"
    >
      <div className="grid h-full grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center text-center max-w-[1500px] px-5 md:px-10 lg:px-20">
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-[500px] flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <Image
                unoptimized={true}
                style={{
                  filter: "drop-shadow(-5px 14px 4px rgba(0, 0, 0, 0.30))",
                }}
                src="/static/images/krypdraw_text.png"
                width={500}
                height={500}
                alt="krypdraw text"
              />
              <p className="font-[700] text-[14px] text-white uppercase text-justify">
                Win big or go home with our crypto lottery. Use your favorite
                cryptocurrencies or use the krypdraw token to get exclusive
                discounts. explore our shop for tickets, discover the current
                and upcoming draws or checkout our winners.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <Link
                href="/shop"
                style={{
                  background:
                    "linear-gradient(99.35deg, #A252E5 4.49%, #1F33EC 95.51%)",
                }}
                className="h-[53px] glow-on-hover flex items-center justify-center text-white font-[700] text-[15px]"
              >
                Explore Shop
              </Link>
              <Link
                href="/draws"
                style={{
                  background:
                    "linear-gradient(99.35deg, #A252E5 4.49%, #1F33EC 95.51%)",
                }}
                className="h-[53px] glow-on-hover flex items-center justify-center text-white font-[700] text-[15px]"
              >
                Explore Draws
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            unoptimized={true}
            src="/static/images/hero.gif"
            width={600}
            height={600}
            className="pb-26"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
