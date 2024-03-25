import Link from "next/link";
import "./card.css";
import Image from "next/image";

export default function CryptCard(props: any) {
  const { title, img, isPrevious } = props;
  return (
    <div className="draw-card h-[225px] w-[324px] relative p-[3px]">
      <Image
        unoptimized={true}
        width={80}
        height={80}
        src="/static/images/top_card_image.png"
        alt="top card image"
        className="absolute top-0 right-20"
      />
      <Image
        unoptimized={true}
        width={80}
        height={80}
        src="/static/images/bottom_card_image.png"
        alt="top card image"
        className="absolute z-[999] -bottom-[1px] -left-[2px]"
      />
      <div
        style={{
          clipPath: "polygon(0 0, 88% 0, 100% 16%, 100% 100%, 12% 100%, 0 91%)",
        }}
        className="w-full h-full flex items-center justify-center bg-[#15112C] flex items-center"
      >
        <div className="absolute flex items-center justify-center gap-2 top-3 left-3 text-[8px]">
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="3.5"
              cy="3.5"
              r="3.5"
              fill={isPrevious ? "gray" : "#00FF66"}
            />
          </svg>
          <p className="text-[10px]">{isPrevious ? "Expired" : "Live"}</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            src={img}
            width={40}
            height={40}
            className="max-h-[40px]"
            alt="currency img"
          />
          <p className="title-text">{title}</p>
          {!isPrevious && (
            <Link href="/" className="p-3 rounded-[9px] glow-on-hover">
              Particpiate
            </Link>
          )}
        </div>
        <div className="absolute bottom-2 right-2 text-[10px]">
          <p>Price: 5 Tickets</p>
          <p>2,000 / 3,000 Tickets</p>
        </div>
      </div>
    </div>
  );
}
