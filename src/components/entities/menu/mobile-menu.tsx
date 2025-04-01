import { useEffect, useRef } from "react";
import { XButton } from "../../../shared/ui/buttons/XButton";
import { Logotype } from "../../../shared/ui/logotype";
import { MenuList } from "./menu-list";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className={`md:hidden fixed top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.6)] z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="w-[calc(100%-55px)] h-full bg-white border-r border-[#E9E9E9]">
        <div className="flex justify-between items-center border-b border-[#E9E9E9] px-5 py-8">
          <Logotype />
          <XButton onClick={onClose} />
        </div>
        <div className="w-full px-5 pt-3">
          <MenuList />
        </div>
      </div>
    </div>
  );
};
