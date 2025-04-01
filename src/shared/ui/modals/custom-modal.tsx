import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { XButton } from "../buttons/XButton";

interface CustomModalProps {
  title: string;
  text: string;
  onClose: () => void;
}

export const CustomModal: React.FC<CustomModalProps> = ({ title, text, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div
        ref={modalRef}
        className="flex flex-col gap-4 bg-white rounded-sm max-w-xl w-full p-6 m-4 outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}>
        <div className="flex justify-between">
          <h3 className="text-[#000] text-[24px] leading-[30px] font-[700]">{title}</h3>
          <XButton onClick={onClose} className="flex justify-end px-4 py-2" />
        </div>
        <p className="text-[#9B9B9B] text-[14px] font-weight-[400] leading-[20px]">{text}</p>
      </div>
    </div>,
    document.body
  );
};
