import { type ClassValue, clsx } from "clsx";
import { ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const baseUrl = "http://localhost:3000";

export const formatBalance = (rawBalance: string) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
  return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
  const chainIdNum = parseInt(chainIdHex);
  return chainIdNum;
};

export const formatAddress = (addr: string | undefined) => {
  return `${addr?.substring(0, 8)}...`;
};

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const currencies = [
  {
    id: "krypdraw",
    name: "KRYPDRAW",
    tickets: 20,
    amount: "2",
    ticketPrice: 10,
    tokenPrice: 0.02,
    img: "/static/images/kryp.svg",
  },
  {
    id: "btc",
    name: "BTC",
    tickets: 20,
    amount: "0.00076",
    ticketPrice: 10,
    tokenPrice: 57635,
    img: "/static/images/bitcoin.svg",
  },
  {
    id: "eth",
    name: "ETH",
    tickets: 200,
    amount: "0.56",
    ticketPrice: 10,
    tokenPrice: 2948,
    img: "/static/images/black.svg",
  },
  {
    id: "sol",
    name: "SOL",
    tickets: 20,
    amount: "2",
    ticketPrice: 10,
    tokenPrice: 100,
    img: "/static/images/s.png",
  },
  {
    id: "usdt",
    name: "USDT",
    tickets: 20,
    amount: "2",
    ticketPrice: 10,
    tokenPrice: 1.0002,
    img: "/static/images/t.png",
  },
];
