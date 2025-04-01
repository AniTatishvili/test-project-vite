import { MenuList } from "./menu-list";

interface HeaderMenuProps {
  shouldStick: boolean;
}

export const HeaderMenu = ({ shouldStick }: HeaderMenuProps) => {
  return (
    <div
      className={`
      bg-white w-full
      ${shouldStick ? "sticky top-0 left-0 right-0" : "relative"}
    `}>
      <nav className="hidden md:flex justify-center border-b border-t border-[#E9E9E9] px-5">
        <MenuList />
      </nav>
    </div>
  );
};
