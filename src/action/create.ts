"use server"


import { getUserSession } from "@/utils/getUserSession"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const create = async(data:FormData)=>{
    const session = await getUserSession()
    // to conver the data in plain object
    const blogInfo = Object.fromEntries(data.entries())
    const modifyData = {
        title: blogInfo.title,
        content: blogInfo.content,
        image: blogInfo.image,
        authorId:session?.user?.id,
        published: Boolean(blogInfo.isFeatured)
    }
    
   
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body: JSON.stringify(modifyData)
    })
    
    const result = await res.json()
    if(result.id){
        revalidateTag("refetchBlogs")
        redirect("/dashboard/manage-blog")
    }
}