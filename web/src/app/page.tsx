'use client'

import { useState, useEffect } from 'react';
import { getAllPosts } from '@/lib/api';
import Link from 'next/link';

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">All Posts</h1>
      {loading && <p className="text-lg">Loading posts...</p>}
      {error && <p className="text-red-500 text-lg">{error}</p>}
      {!loading && !error && posts.length === 0 && <p className="text-lg">No posts found.</p>}
      {!loading && !error && posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/posts/${post.slug.current}`} key={post._id}>
              <div className="p-4 cursor-pointer hover:bg-gray-100 transition-colors">
              <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
              <p className="text-gray-600 text-sm">By: {post.author}</p>
            </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
