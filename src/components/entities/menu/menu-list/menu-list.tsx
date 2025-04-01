import { menuItems } from "../../../../shared/data/menu-items";
import { MenuListItem } from "./menu-list-item";

export const MenuList = () => {
  return (
    <ul className="block md:flex gap-5">
      {menuItems.map((item) => (
        <MenuListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
