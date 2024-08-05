"use client"
import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
 
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Must be more than 8 characters" }),
})


export default function Login(){
    // 1. Define the form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:  "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
    return(
        <div>
            <div className="login"> 
                <h1>Sign into your account</h1>
                <p>If you are new, {" "}</p>
                {/* <Link href="">sign up</Link> */}
                

            </div>
        </div>
    );
}