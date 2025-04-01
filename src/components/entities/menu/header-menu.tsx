import { MenuList } from "./menu-list";

export const HeaderMenu = () => {
  return (
    <div className="bg-white w-full sticky top-0 left-0 right-0">
      <nav className="hidden md:flex justify-center border-b border-t border-[#E9E9E9] px-5">
        <MenuList />
      </nav>
    </div>
  );
};
