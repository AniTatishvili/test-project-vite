import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Dropdown } from "../../../utils/types";

import s from "./dropdown-menu.module.scss";

interface DropdownMenuProps {
  dropdown: Dropdown;
}

export const DropdownMenu = ({ dropdown }: DropdownMenuProps) => (
  <ul className={s.dropdownMenu}>
    {dropdown.items.map((dropdownItem) => (
      <li key={dropdownItem.id}>
        <a href={dropdownItem.href}>
          <span>{dropdownItem.label}</span>
          <ChevronRightIcon width={24} height={24} className="text-[#000]" />
        </a>
      </li>
    ))}
  </ul>
);
