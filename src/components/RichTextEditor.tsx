"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function RichTextEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Type something here...</p>",
    immediatelyRender: false, // SSR সমস্যা এড়ানোর জন্য
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Rich Text Editor (Tiptap)</h2>

      {/* Toolbar */}
      <div className="flex gap-2 mb-2 border p-2 rounded bg-gray-500">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("bold") ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          Bold
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          Italic
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("heading", { level: 2 })
              ? "bg-blue-500 text-white"
              : "bg-white"
          }`}
        >
          H2
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("bulletList") ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          • List
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("orderedList") ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          1. List
        </button>
      </div>

      {/* Editor Area */}
      <div className="border p-2 rounded min-h-[150px] bg-white">
        <EditorContent editor={editor} />
      </div>

      {/* Preview */}
      <div className="mt-4 p-2 border rounded">
        <h3 className="font-semibold">Preview (HTML):</h3>
        <div>{editor.getHTML()}</div>
      </div>
    </div>
  );
}
