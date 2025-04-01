import { menuItems } from "../../../shared/data/menu-items";
import { MenuListItem } from "./menu-list-item";

import s from "./menu-list.module.scss";

export const MenuList = () => {
  return (
    <ul className={s.navbar}>
      {menuItems.map((item) => (
        <MenuListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
