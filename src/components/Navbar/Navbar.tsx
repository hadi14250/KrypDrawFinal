"use client";
import React, { useEffect } from "react";
import Header from "../Header/Header";
import { SessionProvider } from "next-auth/react";

const Navbar = (props: any) => {
  const { session } = props;
  return (
    <SessionProvider session={session}>
      <Header />
    </SessionProvider>
  );
};

export default Navbar;
