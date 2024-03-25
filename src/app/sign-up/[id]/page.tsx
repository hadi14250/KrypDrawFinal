"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/utils/schema";
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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const VerifyEmail = (props: any) => {
  const { params } = props;
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const response = await signIn("verify-email", {
        username: data.login,
        password: data.password,
        id: params.id,
        redirect: false,
      });
      if (response?.status === 401) {
        setError("Wrong email or password. Please try again.");
      } else {
        router.replace("/");
      }
    } catch (err) {
      setError("Wrong email or password. Please try again.");
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
            name="login"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username or Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username or email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                {error && <p>{error}</p>}
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default VerifyEmail;
