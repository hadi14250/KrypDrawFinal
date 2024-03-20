"use client";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import Header from "../Header/Header";

const Navbar = () => {
  const { data: session } = useSession();
  useEffect(() => {
    if (session && session.error === "Session Expired") {
      signOut();
    }
  }, [session]);

  return <Header />;
};

export default Navbar;
