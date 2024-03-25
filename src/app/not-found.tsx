import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(305deg, #5c088d 3.07%, #870bca 47.68%, #8a22c3 89.86%)",
      }}
      className="h-[100vh] w-full flex items-center justify-center"
    >
      <Image
        alt="404 not found image"
        src="/static/images/notFound.png"
        width={400}
        height={400}
      />
    </div>
  );
};

export default NotFoundPage;
