import Link from "next/link";

import Navbar from "@/components/Navbar/Navbar";
import PostCard from "@/components/PostCard/PostCard";
import { loadPosts } from "@/util/helper";
import { IPost } from "@/util/types";

export default function Home() {
  
  const posts: IPost[] = loadPosts();

  return (
    <div className="mt-12">
      
      <h1 className="text-5xl tracking-tighter font-header font-extrabold">Latest Posts</h1>
      <div className="grid grid-rows-3 grid-cols-3 gap-4 mt-4">
        {posts.slice(0, 6).map((p, idx) => (
          <Link
            key={idx}
            href={`/posts/${p.slug}`}
            className="p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <PostCard
              slug={p.slug}
              topic={p.topic}
              title={p.title}
              description={p.description}
              date={p.date}
              edited={p.edited ? p.edited : undefined}
            />
          </Link>
        ))}
      </div>

    </div>
  );
}
