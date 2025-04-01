import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { XButton } from "../buttons/XButton";

export const CustomModal = ({ callback, children }: PropsWithChildren<{ callback?: () => void }>) => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsOpen(false);
    callback?.();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div ref={modalRef} className="relative bg-white rounded-sm max-w-xl w-full p-6 m-4 outline-none" onClick={(e) => e.stopPropagation()} tabIndex={-1}>
        <XButton onClick={closeModal} className="absolute right-4 top-4 cursor-pointer outline-none" />
        {children}
      </div>
    </div>,
    document.body
  );
};
