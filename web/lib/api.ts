import { client } from './client';

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: string;
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const post: Post = await client.fetch(
      `*[_type == "post" && slug.current == "${slug}"][0]`
    );
    return post;
  } catch (err) {
    console.error("Failed to fetch post:", err);
    return null;
  }
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  try {
    const posts: Post[] = await client.fetch('*[_type == "post"]');
    return posts.map((post) => ({
      slug: post.slug.current,
    }));
  } catch (err) {
    console.error("Failed to fetch all post slugs:", err);
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const posts: Post[] = await client.fetch('*[_type == "post"]');
    return posts;
  } catch (err) {
    console.error("Failed to fetch all posts:", err);
    return [];
  }
}
