import { getAllPostSlugs } from '@/lib/api';

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
