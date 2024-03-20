"use client";
import Image from "next/image";
import React from "react";
import { currencies } from "../page";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { currencySchema } from "@/utils/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SingleShopPage = (props: any) => {
  const { params } = props;
  const form = useForm<z.infer<typeof currencySchema>>({
    resolver: zodResolver(currencySchema),
  });
  const {
    data: hash,
    isPending,
    sendTransaction,
    error,
  } = useSendTransaction();

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const onSubmit = async (data: z.infer<typeof currencySchema>) => {
    sendTransaction({
      to: "0xDBA78eD60908Fd1a0a1c7394f7cd35bC4713E653",
      value: parseEther(data.total.toString()),
    });
    setIsDialogOpen(true);
  };

  const currency = currencies.find((item: any) => item.id === params.id);
  return (
    <div
      style={{
        background:
          "linear-gradient(305deg, #1B0229 3.07%, #4A066F 47.68%, #65188E 89.86%)",
      }}
      className="w-full pt-26 h-[100vh] p-10 flex justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1500px]">
        <div className="w-full rounded-[16px] p-16 bg-[#05012E] h-full max-h-[540px]">
          <Image
            unoptimized={true}
            alt={currency.name}
            width={540}
            height={540}
            className="object-contain"
            style={{
              width: "100%",
              height: "100%",
            }}
            src={currency.img}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[28px] pb-3">{currency.name} TICKET</h1>
          <p className="text-[17px]">
            Buckle up for one of it’s kind draw, are you ready to join the 21
            million club? Here’s your chance to join this prestigious club.{" "}
          </p>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full gap-8 flex flex-col items-start"
              >
                <div className="flex justify-between items-center gap-4">
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            className="text-black"
                            placeholder="Quantity"
                            value={field.value}
                            onChange={(e) => {
                              form.setValue(
                                "total",
                                (e.target.valueAsNumber *
                                  currency.ticketPrice) /
                                  currency.tokenPrice
                              );
                              field.onChange(e.target.valueAsNumber);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="total"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total {currency.name}</FormLabel>
                        <FormControl>
                          <Input
                            className="cursor-default text-black"
                            type="number"
                            readOnly
                            placeholder={`Total ${currency.name}`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {hash ? (
                  <p>Transaction Hash: {hash}</p>
                ) : isPending ? (
                  <p>Transaction is pending...</p>
                ) : (
                  <Button
                    className="bg-[#05012E] px-8 text-[#fff]"
                    type="submit"
                  >
                    Buy
                  </Button>
                )}
              </form>
            </Form>
            <Dialog
              onOpenChange={(open) => setIsDialogOpen(open)}
              open={!!error && isDialogOpen}
            >
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>An error has occured.</DialogTitle>
                  <DialogDescription>{error?.message}</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShopPage;
