import Image from "next/image";
import "./card.css";
import PropTypes from "prop-types";

export default function UpCard({ img }: { img: string }) {
  return (
    <>
      <div className="upcoming-card flex flex-col items-center justify-center">
        <div className="upcoming-card-head flex flex-col items-center justify-center">
          <Image
            unoptimized={true}
            width={300}
            height={300}
            className="upcoming-card-img"
            src={img}
            alt="upcoming image"
          />
        </div>
        <p className="upcoming-card-text">CryptoPunks NFT</p>
        <span className="upcoming-card-sub">23 ETH in Total</span>
      </div>
    </>
  );
}

UpCard.propTypes = {
  img: PropTypes.string.isRequired,
};
