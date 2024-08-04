"use client"
import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { z } from "zod"
 
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Must be more than 8 characters" }),
})


export default function Login(){
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