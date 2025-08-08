// src/components/RightSidebar/RightSidebar.jsx

import React from "react";
import { useLocation } from "react-router-dom";
import {
  RightSidebarWrapper,
  RightSidebarMenu,
  RightSidebarCollapseBtn,
} from "./RightSidebar.styled";

export default function RightSidebar({
  onToggle,
  rightSidebarExpanded,
  onCloseMobileSidebar,
  isRightSidebarSplit,
  toggleRightSidebarSplit,
}) {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  // Визначаємо, чи ми в мобільному режимі, за наявністю пропсу onCloseMobileSidebar
  const isMobile = !!onCloseMobileSidebar;

  // На мобільному завжди показуємо повний контент
  const isExpanded = isMobile ? true : rightSidebarExpanded;

  // Використовуємо $isCollapsed для стилів, щоб уникнути конфлікту
  return (
    <RightSidebarWrapper $isCollapsed={!isExpanded}>
      <RightSidebarMenu $isCollapsed={!isExpanded}>
        <div>
          <h3>Ось новий сайдбар</h3>
          <p>
            Це тимчасовий вміст правої панелі. Ви можете замінити його будь-якими компонентами, які
            вам потрібні, наприклад, віджетами, нотатками або додатковою інформацією.
          </p>
          {isMobile && (
            <button onClick={toggleRightSidebarSplit}>
              {isRightSidebarSplit ? "З'єднати екран" : "Розділити екран"}
            </button>
          )}
        </div>
      </RightSidebarMenu>

      {/* Кнопка колапсу тільки для десктопу */}
      {!isMobile && (
        <RightSidebarCollapseBtn onClick={onToggle}>
          {isExpanded ? "›" : "‹"}
        </RightSidebarCollapseBtn>
      )}
    </RightSidebarWrapper>
  );
}
