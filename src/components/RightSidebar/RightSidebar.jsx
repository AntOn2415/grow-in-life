// src/components/RightSidebar/RightSidebar.jsx

import React from "react";
import { useLocation } from "react-router-dom";
import {
  RightSidebarWrapper,
  RightSidebarMenu,
  RightSidebarCollapseBtn,
} from "./RightSidebar.styled";
import BibleMenu from "../BibleMenu/BibleMenu";

export default function RightSidebar({ isRightSidebarSplit, toggleRightSidebarSplit, isMobile }) {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  const isExpanded = isRightSidebarSplit;

  return (
    <RightSidebarWrapper $isCollapsed={!isExpanded}>
      <RightSidebarMenu $isCollapsed={!isExpanded}>
        <BibleMenu
          isRightSidebarSplit={isRightSidebarSplit}
          toggleRightSidebarSplit={toggleRightSidebarSplit}
          isMobile={isMobile}
        />
      </RightSidebarMenu>

      {!isMobile && (
        <RightSidebarCollapseBtn onClick={toggleRightSidebarSplit}>
          {isExpanded ? "›" : "‹"}
        </RightSidebarCollapseBtn>
      )}
    </RightSidebarWrapper>
  );
}
