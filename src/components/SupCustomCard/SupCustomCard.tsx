import Link from "next/link";
import "../SupCard/style.css";
import Image from "next/image";

export default function SupCard(props: any) {
  const { button } = props;
  return (
    <>
      <div className="support-card flex flex-col items-center justify-center">
        <h1 className="text-[18px] pb-3">15% discount using KRYP</h1>
        <div className="support-card-head flex flex-col items-center justify-center">
          <Image
            unoptimized={true}
            width={65}
            height={65}
            className="support-card-img rounded-full"
            src="/static/images/kryp.png"
            alt="support image"
          />
        </div>
        <p className="support-card-text">
          Input Ticket Quantity and see the conversion
        </p>
        <div className="support-stat flex items-center justify-between">
          <span className="support-stat-before">20 Tickets</span>
          <Image
            unoptimized={true}
            width={20}
            height={20}
            className="support-img"
            src="/static/icons/arrow.svg"
            alt="arrow icon"
          />
          <div>
            <h1>
              <span className="line-through">{(20 * 10) / 0.02 + 2000}</span>{" "}
              KRYP
            </h1>
            <span className="support-stat-after">{(20 * 10) / 0.02} KRYP</span>
          </div>
        </div>
        <div className="support-card-bottom flex items-center">
          <p className="support-card-bottom-text flex items-center">
            KRYP price:
            <span className="support-card-bottom-price">$0.02</span>
          </p>
          <p className="support-card-bottom-text flex items-center">
            Ticket Price: <span className="support-card-bottom-price">$10</span>
          </p>
        </div>
        {button && (
          <Link
            href={`/shop/5`}
            className="support-card-button text-center inline-block uppercase center mt-5"
          >
            BUY WITH KRYP
          </Link>
        )}
      </div>
    </>
  );
}
