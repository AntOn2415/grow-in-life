import React from "react";
import { useLocation } from "react-router-dom";
import { SidebarWrapper, Menu, CollapseBtn } from "./Sidebar.styled";
import SermonsMenu from "./SermonsMenu/SermonsMenu";
import HomeGroupsMenu from "./HomeGroupsMenu/HomeGroupsMenu";

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();
  if (location.pathname === "/") return null;

  let extraMenu = null;
  if (location.pathname.startsWith("/sermons")) {
    extraMenu = <SermonsMenu collapsed={collapsed} />;
  } else if (location.pathname.startsWith("/home-groups")) {
    extraMenu = <HomeGroupsMenu collapsed={collapsed} />;
  }

  return (
    <SidebarWrapper collapsed={collapsed}>
      {" "}
      {/* Передача пропсу collapsed */}
      <Menu collapsed={collapsed}>{extraMenu}</Menu> {/* Передача пропсу collapsed */}
      <CollapseBtn collapsed={collapsed} onClick={() => setCollapsed(c => !c)}>
        {collapsed ? "›" : "‹"}
      </CollapseBtn>
    </SidebarWrapper>
  );
}
