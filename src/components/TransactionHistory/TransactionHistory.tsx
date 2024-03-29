"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { fetchTransactions } from "@/utils/actions";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";

const TransactionHistory = () => {
  const { data: session } = useSession();
  const { ref, inView } = useInView();
  const [isOpen, setIsOpen] = useState(false);

  const getTransactions = async (page: number) => {
    if (session?.token) {
      try {
        const transactions = await fetchTransactions(page, session.token);
        return transactions.data;
      } catch (error) {}
    }
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["transactions"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getTransactions(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      console.log(lastPage);
      console.log(allPages);
      const nextPage =
        lastPage?.length == 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <Dialog open={isOpen} onOpenChange={(e) => setIsOpen(e)}>
      <DialogTrigger asChild>
        <Button
          style={{
            boxShadow: "-3px 8px 4px 0px rgba(0, 0, 0, 0.30)",
          }}
          className="glow-on-hover uppercase w-full after:!rounded-[2px]"
        >
          check transaction history
        </Button>
      </DialogTrigger>
      <DialogContent className="z-[9999] bg-[black] bg-opacity-[0.8]">
        <DialogHeader>
          <DialogTitle>Transactions</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 h-[300px] overflow-y-auto p-4">
          {data?.pages &&
          (data?.pages?.length <= 0 ||
            (data?.pages?.length === 1 && data?.pages[0].length <= 0)) ? (
            <div className="h-full w-full flex items-center justify-center">
              You have not made any transactions yet.
            </div>
          ) : (
            data?.pages?.map((page) =>
              page.map((transaction: any, index: number) => {
                if (page.length == index + 1) {
                  return (
                    <div
                      ref={ref}
                      key={index}
                      className="flex flex-col border-b-[1px] py-3 border-[#fff]"
                    >
                      <div>Hash: {transaction.hash}</div>
                      <div>
                        Price: {transaction.paidPrice} {transaction.type}
                      </div>
                      <div>Tickets Purchased: {transaction.ticketAmount}</div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="flex flex-col border-b-[1px] py-3 border-[#fff]"
                    >
                      <div>Hash: {transaction.hash}</div>
                      <div>
                        Price: {transaction.paidPrice} {transaction.type}
                      </div>
                      <div>Tickets Purchased: {transaction.ticketAmount}</div>
                    </div>
                  );
                }
              })
            )
          )}
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionHistory;
