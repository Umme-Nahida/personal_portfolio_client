"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { register } from "@/action/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type RegisterFormValues = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export default function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const router = useRouter()
  const onSubmit =async (values: RegisterFormValues) => {
    try{
      
      const user = await register(values)
      
      if((user as any).success || (user as any).id ){
        toast.success("user has registerd successfully")
        router.push("/login")
      }
    }catch(err:any){
      console.log("err:",err)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full max-w-md border border-[#0690E3] bg-blue-400/5 backdrop-blur-2xl p-8 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-center">Register Now</h2>
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl className="flex-1 w-[100%] bg-blue-400/10 backdrop-blur-xl rounded text-white p-5 border border-[#0690E3] focus:text-[#0690E3]">
                  <Input placeholder="Enter your name"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl className="flex-1 w-[100%] bg-blue-400/10 backdrop-blur-xl rounded text-white p-5 border border-[#0690E3] focus:text-[#0690E3]">
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl className="flex-1 w-[100%] bg-blue-400/10 backdrop-blur-xl rounded text-white p-5 border border-[#0690E3] focus:text-[#0690E3]">
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl className="flex-1 w-[100%] bg-blue-400/10 backdrop-blur-xl rounded text-white p-5 border border-[#0690E3] focus:text-[#0690E3]">
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-gradient-to-br from-sky-400 via-[#0690E3] ">
            Register
          </Button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}