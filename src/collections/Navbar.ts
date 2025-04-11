import type { CollectionConfig } from "payload";

export const Navbar: CollectionConfig = {
  slug: "navbar",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "navItems",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "link",
          type: "text",
          required: true,
        },
      
        {
          name: "location",
          type: "select",
          label: "Display Location",
          options: [
            { label: "Navbar", value: "navbar" },
            { label: "Sidebar", value: "sidebar" },
          ],
          defaultValue: "navbar",
          required: true,
        },
      ],
      maxRows: 10,
      admin: {
        initCollapsed: true,
      },
    },
  ],
  // hooks: {
  //   beforeChange: [async ({ data }) => {
  //     const navbarItems = data.navItems.filter((item) => item.location === "navbar");
  //     if (navbarItems.length > 5) {
  //       throw new Error("Only 5 items can be shown in the navbar.");
  //     }
  //     return data;
  //   }],
  // },
};

export default Navbar;