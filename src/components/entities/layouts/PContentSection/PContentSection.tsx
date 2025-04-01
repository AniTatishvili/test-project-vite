import React from "react";

interface PContentSectionProps {
  children: React.ReactNode;
}

export const PContentSection: React.FC<PContentSectionProps> = ({ children }) => {
  return <div className="max-w-[1200px] px-5 mx-auto">{children}</div>;
};
