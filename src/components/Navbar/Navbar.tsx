"use client";
import React, { useEffect } from "react";
import Header from "../Header/Header";
import { SessionProvider } from "next-auth/react";

const Navbar = (props: any) => {
  const { session } = props;
  return (
    <SessionProvider
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true}
      session={session}
    >
      <Header />
    </SessionProvider>
  );
};

export default Navbar;
