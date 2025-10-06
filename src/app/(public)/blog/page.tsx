import GlassCard from '@/components/modules/blog/BlogCard';
import Container from '@/components/shared/Container';
import { IBlogPost } from '@/types/types';
import React from 'react';

const Blog = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
       next:{
       tags:["refetchBlogs"]
     }
    })
    const { data } = await res.json()

    // console.log(data)
    return (
        <Container>
            <div id='blog' className='min-h-screen mt-28'>
                <h1 className='text-4xl text-center font-medium'>All Blogs</h1>

                <div className='grid grid-cols-3 gap-5 items-center justify-items-center my-10'>
                    {
                        data.data.map((blog: IBlogPost) => (
                            <GlassCard key={blog.id} post={blog}></GlassCard>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
};

export default Blog;