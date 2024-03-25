import Image from "next/image";
import "./footer.css";

const supportedCurrencies = [
  {
    alt: "KRYPDRAW",
    img: "/static/images/logo.svg",
  },
  {
    alt: "BTC",
    img: "/static/images/bitcoin.svg",
  },
  {
    alt: "ETHEREUM",
    img: "/static/images/black.svg",
  },
  {
    alt: "SOL",
    img: "/static/images/s.png",
  },
  {
    alt: "USDT",
    img: "/static/images/t.png",
  },
];

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
            {supportedCurrencies.map((item, index) => (
              <Image
                unoptimized={true}
                key={index}
                width={50}
                height={50}
                className="mr-2 max-h-[40px] object-contain"
                src={item.img}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
