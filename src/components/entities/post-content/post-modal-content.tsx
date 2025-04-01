interface TPostModalContentPostDataset {
  title: string;
  text: string;
}

interface IPostModalContent {
  post: TPostModalContentPostDataset;
}

export const PostModalContent = ({ post: { text, title } }: IPostModalContent) => {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <h3 className="text-[#000] text-[24px] leading-[30px] font-[700]">{title}</h3>
      <p className="text-[#9B9B9B] text-[14px] font-weight-[400] leading-[20px]">{text}</p>
    </div>
  );
};
