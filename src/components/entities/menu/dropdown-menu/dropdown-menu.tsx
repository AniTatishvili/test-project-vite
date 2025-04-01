import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Dropdown } from "../../../../utils/types/menu-types";

interface DropdownMenuProps {
  dropdown: Dropdown;
}

export const DropdownMenu = ({ dropdown }: DropdownMenuProps) => (
  <ul>
    {dropdown.items.map((dropdownItem) => (
      <li key={dropdownItem.id} className="border-b border-[#e9e9e9] last:border-b-0">
        <a
          href={dropdownItem.href}
          className="group flex justify-between align-center text-[#000] text-[13px] font-[400] py-2 hover:text-[#969696] whitespace-nowrap">
          <span className="block transform translate-x-0 group-hover:translate-x-2">{dropdownItem.label}</span>
          <ChevronRightIcon width={24} height={24} className="text-[#000]" />
        </a>
      </li>
    ))}
  </ul>
);
