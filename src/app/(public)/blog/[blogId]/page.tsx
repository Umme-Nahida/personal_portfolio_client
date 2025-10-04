import BlogDetailsCard from '@/components/modules/blog/BlogDetails';
import { IBlogPost } from '@/types/types';
import React from 'react';


export const generateStaticParams = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`)
  const {data:blogs} = await res.json()

  return blogs.slice(0,5).map((blog:IBlogPost)=>({
    blogId: String(blog.id)
  }))
}


const BlogDetails = async({params}:{params: Promise<{blogId:string}>}) => {

    const {blogId} = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`)
    const {data} = await res.json()
    console.log(data)

    return (
        <div>
           this is blog id details route  {blogId}
           <BlogDetailsCard blog={data} ></BlogDetailsCard>
        </div>
    );
};

export default BlogDetails;