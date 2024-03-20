"use client";

import { z } from "zod";

export const loginSchema = z.object({
  login: z.string().min(2).max(50),
  password: z.string().max(50),
});

export const passwordRecoverySchema = z.object({
  email: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(2).max(50),
    confirmPassword: z.string().min(9).max(50),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export const currencySchema = z.object({
  quantity: z.number().min(1).max(1000000),
  total: z.number().min(0).max(1000000),
});

export const registerSchema = z
  .object({
    email: z.string().email().min(2).max(50),
    password: z.string().min(9).max(50),
    username: z.string().min(2).max(50),
    telegram: z.string().min(2).max(50),
    confirmPassword: z.string().min(9).max(50),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });
