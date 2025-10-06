"use client"

import { revalidatePosts } from '@/action/revalidates';
import { BlogPost, IBlogParams } from '@/types/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'sonner';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"


const BlogTableInfo = ({ posts }: IBlogParams) => {

    //   const [posts, setPosts] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editPost, setEditPost] = useState<BlogPost | null>(null);

    const handleDelete = async (id: number) => {
        console.log(id)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`, {
            method: "DELETE"
        })
        const result = await res.json()

        if (result?.id || result.success) {
            toast.success("post has been updated successfully")
            revalidatePosts()
        }

    };

    const handleEdit = (post: BlogPost) => {
        setIsModalOpen(true)
        setEditPost(post)
    };

    const handleUpdate = async () => {
        if (!editPost) return;

        const { id, author, ...restData } = editPost;

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${editPost.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(restData)
        })

        const result = await res.json()

        if (result?.id || result.success) {
            toast.success("post has been updated successfully")
            revalidatePosts()
            setIsModalOpen(false);
        }

    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 shadow-sm rounded-lg">
                    <thead className="bg-sky-400/20 text-left text-sm font-semibold">
                        <tr>
                            <th className="p-3">Thumbnail</th>
                            <th className="p-3">Title</th>
                            <th className="p-3">Author</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Date</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {posts.map((post: BlogPost) => (
                            <tr key={post.id} className="border-t">
                                <td className="p-3">
                                    <Image src={post.image} alt={post.title} width={100} height={100} className="w-20 h-14 object-cover rounded border border-sky-400" />
                                </td>
                                <td className="p-3">{post.title}</td>
                                <td className="p-3">{post.author.name}</td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 text-xs rounded-full ${post.published ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                                            }`}
                                    >
                                        {post.published ? "Published" : "Draft"}
                                    </span>
                                </td>
                                <td className="p-3">{new Date(post.date).toLocaleDateString()}</td>
                                <td className="p-3 text-center flex gap-2 justify-center">
                                    <button
                                        onClick={() => handleEdit(post)}
                                        className="px-3 py-1 text-sm border border-cyan-400 bg-gradient-to-br from-cyan-400 via-sky-400 text-white rounded hover:bg-sky-600"
                                    >
                                        ✏️ Edit
                                    </button>

                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button className="px-3 py-1 text-sm border border-cyan-400 bg-gradient-to-br from-cyan-400 via-sky-400 text-white rounded hover:bg-red-600" variant="outline">🗑 Delete</Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent className='bg-blue-400/5 backdrop-blur-2xl border border-sky-400'>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle className='text-sky-500'>Are you absolutely sure to delete the post?</AlertDialogTitle>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className="px-3 py-1 text-sm border border-cyan-400 bg-gradient-to-br from-cyan-400 via-sky-400 text-white rounded hover:bg-sky-600">Cancel</AlertDialogCancel>
                                                <AlertDialogAction className="px-3 py-1 text-sm border border-cyan-400 bg-gradient-to-br from-cyan-400 via-sky-400 text-white rounded hover:bg-sky-600" onClick={() => handleDelete(post.id)}>Continue</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && editPost && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-blue-400/10 backdrop-blur-xl text-white w-full max-w-lg p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Update Blog Post</h3>
                        <div className="space-y-3">
                            <input
                                type="text"
                                value={editPost.title}
                                onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                                className="w-full border border-sky-500 bg-blue-400/10 backdrop-blur-xl rounded p-2 "
                                placeholder="Title"
                            />
                            <textarea
                                value={editPost.content}
                                onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
                                className="w-full border border-sky-400 bg-blue-400/10 rounded p-2"
                                placeholder="Content"
                                rows={4}
                            />
                            <input
                                type="text"
                                value={editPost.image}
                                onChange={(e) => setEditPost({ ...editPost, image: e.target.value })}
                                className="w-full border rounded p-2 border-sky-400 bg-blue-400/10"
                                placeholder="Image URL"
                            />
                            <div className="flex items-center gap-2">
                                <label className="font-medium text-sm">Published:</label>
                                <input
                                    type="checkbox"
                                    checked={editPost.published}
                                    onChange={(e) => setEditPost({ ...editPost, published: e.target.checked })}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-5">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gradient-to-br via-sky-400 from-cyan-400 rounded hover:bg-sky-700 transition-colors duration-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdate}
                                className="px-4 py-2 bg-gradient-to-br via-sky-400 from-cyan-400 text-white rounded hover:bg-green-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogTableInfo;