"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";

const formSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Must be more than 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Must be more than 8 characters" }),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
