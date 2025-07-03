import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPost } from "./types";

export function loadPosts(): IPost[] {

  console.log("Loading posts...")

  console.log("   Define the absolute path to the 'posts' folder") 
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  console.log(`       Found! ${postsDirectory}`)

  console.log("   Getting a list of all filenames in the 'posts' folder")
  const fileNames = fs.readdirSync(postsDirectory);
  console.log(`       Found! ${fileNames}`)

  console.log("   Reading files...")
  const posts: IPost[] = fileNames
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      const { data } = matter(fileContent);

      const slug = file.replace(/\.mdx?$/, '');

      return {
        slug,
        title: data.title,
        description: data.description,
        topic: data.topic,
        date: new Date(data.date),
        edited: new Date(data.edited)
      };
    });

  console.log("Done!")

  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
}