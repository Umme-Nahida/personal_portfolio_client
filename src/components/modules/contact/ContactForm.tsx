"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent} from "@/components/ui/card";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Card className="w-full py-12 mx-auto border border-[#0690E3] bg-blue-400/5 backdrop-blur-2xl ">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="type your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex-1 w-[100%] bg-blue-400/10 backdrop-blur-xl rounded text-white p-5 border border-[#0690E3] focus:text-[#0690E3] "
          />

          <Input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 w-[100%] bg-blue-400/10 backdrop-blur-xl rounded text-white p-5 border border-[#0690E3] focus:text-[#0690E3]"
          />

          <Textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="flex-1 w-[100%] bg-blue-400/10 backdrop-blur-xl rounded text-white p-5 border border-[#0690E3] focus:text-[#0690E3]"
          />

          <Button
            type="submit"
            className="w-full bg-gradient-to-br from-sky-400 via-[#0690E3] "
          >
            Send
          </Button>

          {sent && (
            <p className="text-green-500 text-sm text-center mt-2">
              ✅ Message sent (demo)
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
