import React from "react";
import { useLocation } from "react-router-dom";
// ✅ Імпортуємо іконки
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

import {
  RightSidebarWrapper,
  RightSidebarMenu,
  RightSidebarCollapseBtn,
} from "./RightSidebar.styled";

import BibleMenu from "../BibleMenu/BibleMenu";

export default function RightSidebar({
  isRightSidebarSplit,
  toggleRightSidebarSplit,
  isMobile,
  isHome,
  navHeight,
  onCloseMobileSidebar,
  ...props
}) {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  const isExpanded = isRightSidebarSplit;

  // Нова функція для відкриття меню біблії
  const handleOpenBibleMenu = () => {
    // Якщо сайдбар згорнутий, відкриваємо його
    if (!isExpanded) {
      toggleRightSidebarSplit();
    }
  };

  return (
    <RightSidebarWrapper
      $isCollapsed={!isExpanded}
      isHome={isHome}
      isRightSidebarSplit={isRightSidebarSplit}
      navHeight={navHeight}
      {...props}
      aria-label="Бічна панель з додатковою інформацією"
    >
      <RightSidebarMenu $isCollapsed={!isExpanded}>
        <BibleMenu
          isRightSidebarSplit={isRightSidebarSplit}
          toggleRightSidebarSplit={toggleRightSidebarSplit}
          isMobile={isMobile}
          // Передаємо функцію для відкриття меню
          onOpenBibleMenu={handleOpenBibleMenu}
        />
      </RightSidebarMenu>

      {!isMobile && (
        <RightSidebarCollapseBtn onClick={toggleRightSidebarSplit}>
          {isExpanded ? <BsChevronCompactRight /> : <BsChevronCompactLeft />}
        </RightSidebarCollapseBtn>
      )}

      {isMobile && (
        <RightSidebarCollapseBtn onClick={onCloseMobileSidebar}>
          <IoCloseOutline />
        </RightSidebarCollapseBtn>
      )}
    </RightSidebarWrapper>
  );
}
