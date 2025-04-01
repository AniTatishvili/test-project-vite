import { MenuList } from "./menu-list";

export const HeaderMenu = () => {
  return (
    <nav className="hidden md:flex justify-center border-b border-t border-[#E9E9E9] px-5">
      <MenuList />
    </nav>
  );
};
