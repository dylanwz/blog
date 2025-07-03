// src/app/wall/page.tsx
import { loadPosts } from "@/util/helper";
import WallContent from "@/components/WallContent/WallContent";

export default function Wall() {
  const posts = loadPosts();

  return <WallContent allPosts={posts} />;
}
