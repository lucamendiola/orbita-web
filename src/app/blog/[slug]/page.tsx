import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeRaw from "rehype-raw";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { getPost, getAllSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog — Órbita" };
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      ...(post.coverImage && { images: [{ url: post.coverImage, alt: post.coverImageAlt || post.title }] }),
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: "Órbita Centro de Neurodesarrollo",
      url: "https://orbitaclinica.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://orbitaclinica.com/blog/${slug}`,
    },
    ...(post.coverImage && { image: post.coverImage }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav activePage="blog" />

      {/* HERO */}
      <section className="blog-post-hero">
        <FadeIn>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </FadeIn>

        {/* Cover image */}
        <FadeIn delay={0.15}>
          <div className="blog-post-cover">
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.coverImageAlt || post.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
              />
            ) : (
              <span style={{ fontSize: 14, color: "#888" }}>Imagen del art&iacute;culo</span>
            )}
          </div>
        </FadeIn>

        {/* Floating meta bar */}
        <FadeIn delay={0.25}>
          <div className="blog-post-meta-bar">
            <div className="blog-meta-item">
              <p className="blog-meta-label">Author</p>
              <p className="blog-meta-value">{post.author}</p>
            </div>
            <div className="blog-meta-item">
              <p className="blog-meta-label">Date</p>
              <p className="blog-meta-value">{dateFormatted}</p>
            </div>
            <div className="blog-meta-item">
              <p className="blog-meta-label">Category</p>
              <p className="blog-meta-value">{post.tags[0] || "General"}</p>
            </div>
            <div className="blog-meta-item">
              <p className="blog-meta-label">Reading time</p>
              <p className="blog-meta-value">{post.readingTime}</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="blog-post-content">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              format: post.format,
              rehypePlugins: [rehypeRaw],
            },
          }}
        />
      </article>

      <Footer />
    </>
  );
}
