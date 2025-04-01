// components/PostContentItem.tsx
import React, { useState } from "react";
import { PostData } from "../../../utils/types";
import { CustomModal } from "../../../shared/ui/modals/custom-modal";
import { PostModalContent } from "./post-modal-content";

interface Props {
  data: PostData[];
}

export const PostContentItem: React.FC<Props> = ({ data }) => {
  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);

  if (!data || data.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <>
      {data.map((post, i) => (
        <div key={i} className="max-w-[360px] flex flex-col gap-4 cursor-pointer" onClick={() => setSelectedPost(post)}>
          <img src={post.img} srcSet={`${post.img} 1x, ${post.img_2x} 2x`} alt={post.img || "Post image"} className="w-full h-auto" />
          <span className="text-[#EB0028] text-[13px] font-[700]">{post.tags}</span>
          <div className="flex flex-col gap-4 text-[#9B9B9B]">
            <h3 className="text-[#000] text-[24px] leading-[30px] font-[700]">{post.title}</h3>
            <div className="flex gap-1 text-[12px] font-[400]">
              <span className="text-[#000] font-[500]">{post.autor}</span>
              <ul className="flex gap-1 list-disc">
                <li className="flex items-center before:content-['•'] before:mr-1">{post.date}</li>
                <li className="flex items-center before:content-['•'] before:mr-1">{post.views}</li>
              </ul>
            </div>
            <p className="text-[14px] font-weight-[400] leading-[20px]">{post.text}</p>
          </div>
        </div>
      ))}

      {selectedPost && (
        <CustomModal callback={() => setSelectedPost(null)}>
          <PostModalContent post={selectedPost} />
        </CustomModal>
      )}
    </>
  );
};
