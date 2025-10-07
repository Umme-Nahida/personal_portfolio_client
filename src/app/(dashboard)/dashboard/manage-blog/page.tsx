

import BlogTableInfo from "@/components/modules/blog/BlogTableInfo";



export default async function BlogPostTable() {


 const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`)
 const {data} = await res.json();

 const posts = data.data;

 

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl font-bold mb-4">Manage Blog Posts</h2>
      <BlogTableInfo posts={posts}></BlogTableInfo>
     
    </div>
  );
}
