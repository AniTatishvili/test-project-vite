export type DropdownItem = {
  id: string;
  label: string;
  href: string;
};

export type Dropdown = {
  id: string;
  items: DropdownItem[];
};

export type MenuItem = {
  id: string;
  label: string;
  href: string;
  current?: boolean;
  dropdown?: Dropdown | null;
};
