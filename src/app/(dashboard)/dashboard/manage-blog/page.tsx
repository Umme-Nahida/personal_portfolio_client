"use client";
import React, { useState } from "react";

interface Author {
  name: string;
  email?: string;
  role?: string;
}

interface BlogPost {
  id: number;
  title: string;
  image: string;
  content: string;
  published: boolean;
  date: string;
  author: Author;
}

const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mastering Responsive Web Design",
    image: "https://picsum.photos/seed/webdev1/200/120",
    content: "Responsive Web Design ensures your website looks great on all devices.",
    published: true,
    date: "2025-10-05T14:30:00.000Z",
    author: { name: "Nahida Akther", email: "mysuccessmission@gmail.com", role: "admin" },
  },
  {
    id: 2,
    title: "Deploying Node.js Apps on Vercel",
    image: "https://picsum.photos/seed/webdev2/200/120",
    content: "Learn how to deploy a Node.js application on Vercel step by step.",
    published: false,
    date: "2025-09-20T12:15:00.000Z",
    author: { name: "John Doe", email: "johndoe@mail.com", role: "editor" },
  },
];

export default function BlogPostTable() {
  const [posts, setPosts] = useState(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editPost, setEditPost] = useState<BlogPost | null>(null);

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleEdit = (post: BlogPost) => {
    setEditPost(post);
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    if (!editPost) return;
    setPosts(posts.map((p) => (p.id === editPost.id ? editPost : p)));
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl font-bold mb-4">Manage Blog Posts</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 shadow-sm rounded-lg">
          <thead className="bg-sky-400 text-left text-sm font-semibold">
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
            {posts.map((post) => (
              <tr key={post.id} className="border-t">
                <td className="p-3">
                  <img src={post.image} alt={post.title} className="w-20 h-14 object-cover rounded" />
                </td>
                <td className="p-3">{post.title}</td>
                <td className="p-3">{post.author.name}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      post.published ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {post.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="p-3">{new Date(post.date).toLocaleDateString()}</td>
                <td className="p-3 text-center flex gap-2 justify-center">
                  <button
                    onClick={() => handleEdit(post)}
                    className="px-3 py-1 text-sm bg-sky-500 text-white rounded hover:bg-sky-600"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && editPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-black/50 w-full max-w-lg p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Update Blog Post</h3>
            <div className="space-y-3">
              <input
                type="text"
                value={editPost.title}
                onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                className="w-full border rounded p-2"
                placeholder="Title"
              />
              <textarea
                value={editPost.content}
                onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
                className="w-full border rounded p-2"
                placeholder="Content"
                rows={4}
              />
              <input
                type="text"
                value={editPost.image}
                onChange={(e) => setEditPost({ ...editPost, image: e.target.value })}
                className="w-full border rounded p-2"
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
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
