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
import {Link} from 'react-router-dom';

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Must be more than 8 characters" }),
});

export default function Login() {
  // 1. Define the form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 w-full max-w-md border-solid border-2 border-slate-100 rounded-md">
        <h1 className="text-xl text-center font-bold  mb-3">Sign into your account</h1>
        <p>If you are new, <Link to ="/register" className="font-semibold">sign up</Link> </p><br/>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex">Email address:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                    <FormItem>
                        <FormLabel className="flex">Password:</FormLabel>
                            <FormControl>
                                <Input 
                                type="password"
                                placeholder="Enter password"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                    </FormItem>
                )}
                />
            <Button type="submit" className="w-full">Sign In</Button>
            <div className="flex items-center mb-4">
              <div className="flex-grow h-px bg-gray-300" />
              <span className=" text-sm text-gray-500 ">or continue with</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>
            <div className="flex justify-center">
              <Button className="w-full">
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <span> Google</span>
                </Button>
              </div>
              <p className="text-sm text-center">
              By clicking continue, you agree to our{" "}
              <a href="#" className="font-bold">
                Terms of
                <br />
                Service
              </a>{" "}
              and <a href="#">Privacy Policy</a>
            </p>
          </form>
        </Form>
      </div>
      </div>
  );
}
