"use client";

import { PostMetadata } from "@/lib/posts";
import { Delete } from "lucide-react";
import { useState } from "react";
import Posts from "./Posts";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
  posts: PostMetadata[];
}

export default function PostsWithSearch({ posts }: Props) {
  const [query, setQuery] = useState("");
  const filtered = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(query.toLowerCase()) ||
      post.summary?.toLowerCase().includes(query.toLowerCase()) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
  );

  const resetFilter = () => setQuery("");

  return (
    <div className="mt-8 flex flex-col gap-12">
      <div className="flex items-center gap-3">
        <Input
          type="text"
          placeholder="Search posts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-background"
        />
        <Button
          size="sm"
          variant="secondary"
          onClick={resetFilter}
          disabled={query.length === 0}
        >
          Clear
          <Delete className="ml-2 size-4" />
        </Button>
      </div>
      <Posts posts={filtered} />
    </div>
  );
}
