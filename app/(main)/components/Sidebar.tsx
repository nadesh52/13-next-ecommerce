import React from "react";
import LatestProduct from "./LatestProduct";
import SidebarBanner from "./SidebarBanner";
import LatestBlog from "./LatestBlog";

const Sidebar = () => {
  return (
    <section className="w-44">
      <SidebarBanner imageUrl='../assets/images/toybanner2.webp' />
      <LatestProduct />
      <SidebarBanner imageUrl='../assets/images/toybanner.webp' />
      <LatestBlog />
    </section>
  );
};

export default Sidebar;
