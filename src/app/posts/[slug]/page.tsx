import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import Image from 'next/image';
import pfp from '@/assets/pfp.png';

export default function PostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'src', 'posts', `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(raw);

  return (
    <div className="prose prose-lg mx-auto py-12">
      <span className="font-body text-md uppercase font-semibold">{data.topic}</span>
      <br/><br/>      
      <span className="font-header text-5xl font-bold">{data.title}</span>
      <br/><br/>
      <span className="font-body text-lg">{data.description}</span>
      <br/>
      
      <br/>
      <div className="flex flex-row items-center gap-4">
        <Image
          src={pfp}
          width="60"
          height="60"
          alt="me"
          className="rounded-full p-1"
        />
        <div>
          <p className="text-md font-body font-semibold">Dylan Wang</p>
          <p className="text-sm font-body text-gray-500">
            {new Date(data.date).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})}
          </p>
        </div>
      </div>
      <br/>
      
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
          },
        }}
      />
    </div>
  );
}
