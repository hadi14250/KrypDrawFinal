"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

const TransactionHistoryWrapper = (props: any) => {
  const { session, children } = props;
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default TransactionHistoryWrapper;
