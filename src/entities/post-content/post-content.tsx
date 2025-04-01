import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPostsData } from "../../services/get-posts-data";
import { PostContentItem } from "./post-content-item";
import { useSearchStore } from "../../store/search-store";

export const PostContent = () => {
  const searchQuery = useSearchStore((state) => state.searchQuery);
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsData,
  });

  const filteredPosts = React.useMemo(() => {
    if (!data) return [];
    const query = searchQuery.toLowerCase();
    return data.filter((post: { title: string; text: string }) => post.title.toLowerCase().includes(query) || post.text.toLowerCase().includes(query));
  }, [data, searchQuery]);

  if (isLoading) return <div className="text-center p-8">Loading posts...</div>;
  if (error) return <div className="text-red-500 p-8">Error: {(error as Error).message}</div>;

  return (
    <div className="flex justify-center flex-wrap gap-10">
      {filteredPosts.length > 0 ? (
        <PostContentItem data={filteredPosts} />
      ) : (
        <div className="w-full text-center text-gray-500">{searchQuery ? "No posts match your search 😔" : "No posts available 😔"}</div>
      )}
    </div>
  );
};
