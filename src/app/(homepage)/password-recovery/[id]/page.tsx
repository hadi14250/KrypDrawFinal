"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, resetPasswordSchema } from "@/utils/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/utils/actions";
import toast from "react-hot-toast";

const ResetPassword = (props: any) => {
  const { params } = props;
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
  });
  const [error, setError] = React.useState<any[]>([]);
  const router = useRouter();
  const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
    try {
      await resetPassword(data.password, params.id);
      router.replace("/login");
      toast("Password reset successfully", { icon: "👏" });
    } catch (err: any) {
      if (err.statusCode === 400) {
        if (err.message === "Bad Request") {
          setError(["The link has expired."]);
        } else setError(err.message?.length > 0 ? err.message : [err.message]);
      } else if (err.statusCode === 403) {
        setError(["The link is invalid."]);
      }
    }
  };
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 px-8 w-full max-w-lg"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Confirm your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                {error.length > 0 &&
                  error.map((item: any, index: number) => (
                    <p key={index}>{item}</p>
                  ))}
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetPassword;
