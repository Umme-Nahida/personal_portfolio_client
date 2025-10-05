"use server"

import { redirect } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const register = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json(); 
  console.log("result:",result)

  if (!res.ok) {
    console.log("User Registration Failed:", result);
    console.error(result.message || "Registration failed");
  }

  return result;
};

export const login = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json(); 
  console.log(result)


  if(result?.success){
    toast.success("user login successfully")
    redirect("/")
  }

  if (!res.ok) {
    console.error("User Login Failed:", result);
    // throw new Error(result.message || "Login failed");
  }

  return result;
};