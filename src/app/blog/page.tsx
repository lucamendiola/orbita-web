import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Órbita Centro de Neurodesarrollo",
  description:
    "Historias, tips y acompañamiento para familias. Artículos sobre neurodesarrollo, crianza y bienestar infantil.",
};

export default function Blog() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <Nav activePage="blog" />

      {/* HEADER */}
      <section className="blog-index">
        <FadeIn>
          <h1>Historias, tips y acompa&ntilde;amiento para ti y tu familia</h1>
        </FadeIn>

        {/* Tag filters */}
        {tags.length > 0 && (
          <FadeIn delay={0.15}>
            <div className="blog-filters">
              {tags.map((tag) => (
                <span key={tag} className="blog-filter">{tag}</span>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Posts grid */}
        <StaggerChildren className="blog-index-grid" staggerDelay={0.1}>
          {posts.map((post) => {
            const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            return (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="blog-index-card">
                  <div className="blog-index-card-body">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                  </div>
                  <div className="blog-index-card-meta">
                    {post.tags[0] && <span className="blog-m-tag">{post.tags[0]}</span>}
                    <span className="blog-m-date">{dateFormatted}</span>
                  </div>
                  <div className="blog-index-card-img">
                    {post.coverImage ? (
                      <img
                        src={post.coverImage}
                        alt={post.coverImageAlt || post.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <span style={{ fontSize: 14, color: "#888" }}>Imagen</span>
                    )}
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </section>

      <Footer />
    </>
  );
}
