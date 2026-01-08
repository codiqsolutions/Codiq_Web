import { blogPosts } from "@/app/blog/blogPosts"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params   // ✅ now safe

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <article className="bg-white">
      {/* Hero Image */}
      <div className="relative h-[420px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-sm text-slate-500 mb-4">
          <span className="text-blue-600 font-semibold">
            {post.category}
          </span>{" "}
          • {post.date}
        </div>

        <h1 className="text-4xl font-bold text-black mb-8">
          {post.title}
        </h1>

        <div className="prose prose-lg max-w-none">
          {post.content.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <Link
          href="/blog"
          className="inline-block mt-16 text-blue-600 font-medium hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  )
}
