"use client";

import { PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

import Link from "next/link";

import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

import { useAchievementsContext } from "@/contexts/AchievementsContext";

interface Props {
  posts: PostMetadata[];
}

export default function Posts({ posts }: Props) {
  const { unlockAchievement } = useAchievementsContext();

  return (
    posts.length > 0 && (
      <Card>
        <ul className="flex flex-col">
          {posts.map((post, i) => (
            <li key={i}>
              {i !== 0 && i !== posts.length && <Separator />}
              <Link
                href={`/blog/${post.slug}`}
                onClick={() => unlockAchievement("blog-post")}
              >
                <div className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                  <div className="max-w-md md:max-w-lg">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                      {post.summary}
                    </p>
                    {post.tags && (
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {post.tags.map((tag, index) => (
                          <Badge key={index}>{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  {post.publishedAt && (
                    <p className="mt-2 flex w-full justify-end text-sm font-light sm:mt-0 sm:w-auto">
                      {formatDate(post.publishedAt)}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    )
  );
}
