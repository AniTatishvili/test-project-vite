import { MenuItem } from "../../utils/types";

export const menuItems: MenuItem[] = [
  {
    id: "demos",
    label: "Demos",
    href: "#",
    current: true,
    dropdown: {
      id: "dropdownDemos",
      items: [
        {
          id: "demos-header",
          label: "Demos Header",
          href: "#",
        },
        {
          id: "demos-layout",
          label: "Demos Layout",
          href: "#",
        },
      ],
    },
  },
  {
    id: "post",
    label: "Post",
    href: "#",
    dropdown: {
      id: "dropdownPost",
      items: [
        {
          id: "post-header",
          label: "Post Header",
          href: "#",
        },
        {
          id: "post-layout",
          label: "Post Layout",
          href: "#",
        },
        {
          id: "share-buttons",
          label: "Share Buttons",
          href: "#",
        },
        {
          id: "gallery-post",
          label: "Gallery Post",
          href: "#",
        },
        {
          id: "video-post",
          label: "Video Post",
          href: "#",
        },
      ],
    },
  },
  {
    id: "features",
    label: "Features",
    href: "#",
    dropdown: {
      id: "dropdownFeatures",
      items: [
        {
          id: "features-header",
          label: "Features Header",
          href: "#",
        },
        {
          id: "features-layout",
          label: "Features Layout",
          href: "#",
        },
        {
          id: "features-post",
          label: "Features Post",
          href: "#",
        },
      ],
    },
  },
  {
    id: "categories",
    label: "Categories",
    href: "#",
    dropdown: {
      id: "dropdownCategories",
      items: [
        {
          id: "post-header",
          label: "Post Header",
          href: "#",
        },
        {
          id: "post-layout",
          label: "Post Layout",
          href: "#",
        },
        {
          id: "share-buttons",
          label: "Share Buttons",
          href: "#",
        },
        {
          id: "gallery-post",
          label: "Gallery Post",
          href: "#",
        },
        {
          id: "video-post",
          label: "Video Post",
          href: "#",
        },
      ],
    },
  },
  {
    id: "shop",
    label: "Shop",
    href: "#",
    dropdown: {
      id: "dropdownShop",
      items: [
        {
          id: "post-header",
          label: "Post Header",
          href: "#",
        },
        {
          id: "post-layout",
          label: "Post Layout",
          href: "#",
        },
        {
          id: "share-buttons",
          label: "Share Buttons",
          href: "#",
        },
        {
          id: "gallery-post",
          label: "Gallery Post",
          href: "#",
        },
        {
          id: "video-post",
          label: "Video Post",
          href: "#",
        },
      ],
    },
  },
  {
    id: "buy-now",
    label: "Buy Now",
    href: "#",
    dropdown: null,
  },
];
