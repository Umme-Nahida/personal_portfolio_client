"use client"
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { IBlogPost } from "@/types/types";



interface GlassCardProps {
  post: IBlogPost;
}

export default function GlassCard({ post }: GlassCardProps) {
  const formattedDate = new Date(post.date).toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const initials = post.author.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto"
    >
      <Card className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
        {/* Image */}
        <div className="w-full h-48">
          <img
            src="https://media.istockphoto.com/id/2210205147/photo/ux-ui-web-design-that-provides-a-good-user-experience-is-easy-to-use-and-modern-business.jpg?s=2048x2048&w=is&k=20&c=9zyVj9e2paqhMGPBbYAJFA3fbLGApo5QXfC-Waly6So="
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <CardContent className="flex-1 p-4 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <CardHeader className="p-0">
              <CardTitle className="text-lg md:text-xl leading-snug line-clamp-2 text-cyan-400">
                {post.title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground mt-1 line-clamp-3">
                {post.content}
              </CardDescription>
            </CardHeader>

            <div className="flex items-center justify-between mt-2">
              {post.published ? (
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-400/10">
                  Published
                </span>
              ) : (
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-400/10">
                  Draft
                </span>
              )}
              <Button variant="ghost" size="sm" aria-label="more">
                <MoreHorizontal />
              </Button>
            </div>
          </div>

          {/* meta */}
          <div className="mt-4 flex items-center gap-3">
            <Avatar className="h-10 w-10">
              {post.author.image ? (
                <AvatarImage src={post.author.image} alt={post.author.name} />
              ) : (
                <AvatarFallback>{initials}</AvatarFallback>
              )}
            </Avatar>

            <div className="text-sm">
              <p className="font-medium leading-none text-cyan-500">{post.author.name}</p>
              <p className="text-border text-xs">{formattedDate} · {post.author.role}</p>
            </div>
          </div>

          {/* actions */}
          <div className="mt-6 flex items-center justify-start gap-x-3">
            <Link href={`/blog/${post.id}`}><Button size="sm" className="bg-sky-500 hover:bg-cyan-500">Read Post</Button></Link>
            <Button variant="outline" size="sm" className="text-white bg-sky-500 hover:bg-cyan-500  border-2 border-sky-500 ">Share</Button>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}