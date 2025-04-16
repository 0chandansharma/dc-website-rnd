// src/app/blog/[slug]/head.tsx
import { blogPosts } from '@/data/blogData';

export default function Head({ params }) {
  const { slug } = params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <>
        <title>Blog Post Not Found | DeeCogs</title>
        <meta name="description" content="The blog post you are looking for doesn't exist." />
      </>
    );
  }
  
  return (
    <>
      <title>{post.title} | DeeCogs Blog</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={post.featuredImage} />
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={new Date(post.date).toISOString()} />
      <meta property="article:author" content={post.author.name} />
      {post.categories.map(category => (
        <meta key={category} property="article:tag" content={category} />
      ))}
    </>
  );
}