import { MenuItem } from "../../../../utils/types";
import { DropdownMenu } from "../dropdown-menu/dropdown-menu";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface MenuListItemProps {
  item: MenuItem;
}

export const MenuListItem = ({ item }: MenuListItemProps) => (
  <li className="relative group py-5 md:border-b-0 border-b border-[#e9e9e9] last:border-b-0">
    <a href={item.href} className="flex align-center gap-1 text-black text-4 font-[500] loading-4">
      <span>{item.label}</span>
      {item.dropdown && <ChevronDownIcon width={24} height={24} />}
    </a>
    {item.dropdown && (
      <div className="w-[176px] static md:absolute left-0 top-full hidden group-hover:block bg-white shadow-md border border-[#E9E9E9] px-5 py-3">
        <DropdownMenu dropdown={item.dropdown} />
      </div>
    )}
  </li>
);
