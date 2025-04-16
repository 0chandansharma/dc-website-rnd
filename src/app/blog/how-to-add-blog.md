# Adding a New Blog Post to Your Website

To add a new blog post to your website, you need to follow these steps:

## Step 1: Add the blog data to your data file

First, add your new blog post to the `blogData.ts` file located at `src/data/blogData.ts`. For each new blog post, you'll add an entry to the `blogPosts` array with all the necessary information.

Here's an example of how to add a new blog post:

```typescript
// In src/data/blogData.ts
export const blogPosts = [
  // Existing blog posts...

  // Add your new blog post here
  {
    title: "Your New Blog Post Title",
    slug: "your-new-blog-post-slug", // URL-friendly version of the title
    author: {
      name: "Author Name",
      title: "Author Title/Position",
      avatar: "/image/avatars/author-image.jpg", // Path to author's profile image
      bio: "Brief bio of the author with relevant experience and expertise.",
      socials: [
        { platform: "twitter", url: "https://twitter.com/authorhandle" },
        { platform: "linkedin", url: "https://linkedin.com/in/authorname" },
      ],
    },
    date: "April 25, 2025", // Publication date
    excerpt:
      "A brief summary of your blog post that will appear in previews and search results.",
    content: `
      <p>The full HTML content of your blog post goes here. You can use HTML tags for formatting.</p>
      
      <h2>First Section Heading</h2>
      <p>Content of your first section...</p>
      
      <h2>Second Section Heading</h2>
      <p>Content of your second section...</p>
      
      <!-- More content as needed -->
    `,
    featuredImage: "/image/blog/your-featured-image.jpg", // Path to the main image
    categories: ["category1", "category2"], // Categories the post belongs to
    tags: ["tag1", "tag2", "tag3"], // More specific tags
    readTime: "7 min read", // Estimated reading time
  },
];
```

## Step 2: Create a dedicated page for your blog post

For better SEO and performance, you should create a dedicated page for each blog post. Create a new file at `src/app/blog/your-new-blog-post-slug/page.tsx`.

Here's an example:

```typescript
// src/app/blog/your-new-blog-post-slug/page.tsx
"use client";
import React from "react";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/utils/theme";

export default function YourNewBlogPost() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <BlogPostLayout slug="your-new-blog-post-slug">
        {/* For simple posts, you can use the content from blogData.ts */}
        {/* Or for more complex posts, you can write the content directly here */}
        <section id="introduction">
          <h2>Introduction</h2>
          <p>Introduction paragraph goes here...</p>
        </section>

        <section id="section-1">
          <h2>First Main Section</h2>
          <p>Content for your first main section...</p>
        </section>

        <section id="section-2">
          <h2>Second Main Section</h2>
          <p>Content for your second main section...</p>
        </section>

        <section id="conclusion">
          <h2>Conclusion</h2>
          <p>Concluding thoughts go here...</p>
        </section>
      </BlogPostLayout>
    </Flowbite>
  );
}
```

## Step 3: Add SEO metadata for your blog post

Create a `head.tsx` file alongside your blog post page to define metadata for SEO:

```typescript
// src/app/blog/your-new-blog-post-slug/head.tsx
import { blogPosts } from "@/data/blogData";

export default function Head() {
  const post = blogPosts.find((p) => p.slug === "your-new-blog-post-slug");

  return (
    <>
      <title>{post.title} | DeeCogs Blog</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={post.featuredImage} />
      <meta property="og:type" content="article" />
      <meta
        property="article:published_time"
        content={new Date(post.date).toISOString()}
      />
      <meta property="article:author" content={post.author.name} />
      {post.categories.map((category) => (
        <meta key={category} property="article:tag" content={category} />
      ))}
    </>
  );
}
```

## Step 4: Add images for your blog post

Make sure to upload any images your blog post needs:

1. Featured image (main image for your blog post)
2. Author avatar (if it's a new author)
3. Any additional images used within the blog content

Place these in the appropriate folders:

- Featured images: `/public/image/blog/`
- Author avatars: `/public/image/avatars/`
- Content images: `/public/image/blog/content/`

## Step 5: Test your new blog post

1. Start your development server: `npm run dev`
2. Visit your blog list page to ensure your new post appears
3. Click through to your blog post to make sure it displays correctly
4. Test the responsiveness on different screen sizes
5. Check that related posts are displaying correctly
6. Verify that category filtering works with your new post

That's it! Your new blog post should now be part of your website. Repeat these steps for each new blog post you want to add.
