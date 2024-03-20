import Image from "next/image";
import "./footer.css";
import Bl from "/images/black.svg";
import S from "/images/s.png";
import T from "/images/t.png";
import Link from "next/link";
import { currencies } from "@/app/(homepage)/shop/page";

export default function Footer() {
  return (
    <footer className="p-8 w-full items-center flex justify-center">
      <div className="w-full max-w-[1500px]">
        <div className="flex items-center border-b-[1px] py-8 border-t-[1px]">
          <Image
            unoptimized={true}
            width={250}
            height={250}
            src="/static/images/krypdraw_footer.png"
            alt="site logo"
          />
        </div>
        <div className="pt-5 flex items-center justify-between gap-5 flex-wrap">
          <div>
            <span className="footer-bottom-text block">© 2024 KRYPDRAW</span>
          </div>
          <div className="footer-bottom-support flex items-center">
            <p className="footer-bottom-text mr-5 mr-md-2">
              Supported Payments
            </p>
            {currencies.map((item, index) => (
              <Image
                unoptimized={true}
                key={index}
                width={40}
                height={40}
                className="footer-bottom-img mr-2 rounded-full"
                src={item.img}
                alt="bitcoin"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
