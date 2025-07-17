'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getPost } from '@/lib/api'

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: string;
}

export default function PostPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';

  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!slug) {
      setError("Slug not found in URL.");
      setLoading(false);
      return;
    }

    async function fetchPost() {
      try {
        const fetchedPost = await getPost(slug);
        setPost(fetchedPost);
      } catch (err) {
        console.error("Failed to fetch post:", err);
        setError("Failed to load post. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <p className="text-lg">Loading post...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <Link href="/">
          <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Back to all posts</button>
        </Link>
        <p className="text-red-500 text-lg">{error}</p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <Link href="/">
          <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Back to all posts</button>
        </Link>
        <p className="text-lg">Post not found</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center pt-24 px-16 md:pt-32 md:px-24 lg:pt-40 lg:px-32 max-w-4xl mx-auto min-h-screen">
      <Link href="/">
        <button className="self-start mb-8 px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors text-sm">← Back to all posts</button>
      </Link>
      <h1 className="text-5xl font-extrabold text-center mb-6 leading-tight">{post.title}</h1>
      <p className="text-lg text-gray-600 mb-12">By: {post.author}</p>
      {/* Add more post details here as needed */}
      <div className="prose lg:prose-xl text-gray-800 leading-relaxed">
        <p>This is the detail page for {post.title}.</p>
        <p>You can add more content here, such as the full post body, images, and other rich media from Sanity.</p>
        <p>The layout is designed to be minimalistic and readable.</p>
      </div>
    </main>
  );
}


