import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SidebarWrapper, Menu, CollapseBtn } from "./Sidebar.styled";
import SermonsMenu from "./SermonsMenu/SermonsMenu";
import HomeGroupsMenu from "./HomeGroupsMenu/HomeGroupsMenu";
import { motion } from "framer-motion";

export default function Sidebar({ collapsed, setCollapsed, onCloseMobileSidebar, isMobile }) {
  const location = useLocation();
  const [showOverlay, setShowOverlay] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);

  useEffect(() => {
    if (showOverlay) {
      const timeout = setTimeout(() => {
        setMenuVisible(true);
        setShowOverlay(false);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [showOverlay]);

  if (location.pathname === "/") return null;

  // Ця функція тепер буде передаватися до вкладених меню
  const handleNavLinkClick = () => {
    if (isMobile && onCloseMobileSidebar) {
      onCloseMobileSidebar();
    }
  };

  let extraMenu = null;
  if (location.pathname.startsWith("/sermons")) {
    extraMenu = <SermonsMenu isCollapsed={collapsed} onNavLinkClick={handleNavLinkClick} />;
  } else if (location.pathname.startsWith("/home-groups")) {
    extraMenu = (
      <HomeGroupsMenu
        isCollapsed={collapsed}
        onNavLinkClick={handleNavLinkClick}
        isMobile={isMobile}
      />
    );
  }

  const handleToggle = () => {
    if (isMobile) {
      // Закриття сайдбару на мобільному
      onCloseMobileSidebar();
    } else {
      setMenuVisible(false);
      setShowOverlay(true);
      setCollapsed(c => !c);
    }
  };

  const isCollapsed = isMobile ? false : collapsed;

  return (
    <SidebarWrapper $isCollapsed={isCollapsed}>
      <Menu
        as={motion.nav}
        $isCollapsed={isCollapsed}
        initial={false}
        animate={{ opacity: menuVisible ? 1 : 0.5 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{ pointerEvents: menuVisible ? "auto" : "none" }}
      >
        {extraMenu}
      </Menu>

      {!isMobile && (
        <CollapseBtn $isCollapsed={isCollapsed} onClick={handleToggle}>
          {isCollapsed ? "›" : "‹"}
        </CollapseBtn>
      )}

      {isMobile && (
        <CollapseBtn $isCollapsed={false} onClick={handleToggle}>
          <i className="fas fa-times"></i>
        </CollapseBtn>
      )}
    </SidebarWrapper>
  );
}
