"use client";

import { useEffect, useRef, useState } from "react";
import { IPost } from "@/util/types";
import Link from "next/link";
import PostCard from "@/components/PostCard/PostCard";

const BATCH_SIZE = 6;
const INITIAL_SIZE = 12;

export default function WallClient({ allPosts }: { allPosts: IPost[] }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_SIZE);
  const [hasMounted, setHasMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const observerRef = useRef<HTMLDivElement | null>(null);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = "scroll";

    return () => {
      document.body.style.overflowY = "";
    };
  }, []);

  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  
  useEffect(() => {
    if (!hasMounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isInitialLoad.current) {
          isInitialLoad.current = false;
          return;
        }

        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + BATCH_SIZE, filteredPosts.length)
          );
        }
      },
      { rootMargin: "192px" }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasMounted, visibleCount, filteredPosts.length]);

  useEffect(() => {
    setVisibleCount(INITIAL_SIZE);
  }, [searchTerm, filteredPosts.length]);

  if (!hasMounted) return null;

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-5xl font-header font-extrabold mb-8">All Posts</h1>

      <input
        type="search"
        placeholder="Search by title or topic..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-8 w-full rounded-md border border-gray-300 px-4 py-2 text-lg font-body focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search posts"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visiblePosts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No posts match your search.
          </p>
        )}
        {visiblePosts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <div className="p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between cursor-pointer">
              <PostCard {...post} />
            </div>
          </Link>
        ))}
      </div>

      {visibleCount < filteredPosts.length && (
        <div ref={observerRef} className="h-16 bg-red-500" />
      )}
    </div>
  );
}
