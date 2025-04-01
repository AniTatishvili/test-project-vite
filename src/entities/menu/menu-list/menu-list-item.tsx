import { MenuItem } from "../../../utils/types";
import { DropdownMenu } from "../dropdown-menu/dropdown-menu";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface MenuListItemProps {
  item: MenuItem;
}

export const MenuListItem = ({ item }: MenuListItemProps) => (
  <li className="relative group">
    <a href={item.href} className="text-black py-5">
      <span>{item.label}</span>
      <ChevronDownIcon width={24} height={24} />
    </a>
    {item.dropdown && (
      <div className="w-[176px] static md:absolute left-0 top-full hidden group-hover:block bg-white shadow-md border border-[#E9E9E9] px-5 py-3">
        <DropdownMenu dropdown={item.dropdown} />
      </div>
    )}
  </li>
);
