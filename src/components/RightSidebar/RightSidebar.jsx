// src/components/RightSidebar/RightSidebar.jsx

import React from "react";
import { useLocation } from "react-router-dom";
import {
  RightSidebarWrapper,
  RightSidebarMenu,
  RightSidebarCollapseBtn,
} from "./RightSidebar.styled";

const icons = (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "1rem 0",
      alignItems: "center",
      color: "white",
    }}
  >
    <span>
      <i className="fas fa-home"></i>
    </span>
    <span>
      <i className="fas fa-cogs"></i>
    </span>
    <span>
      <i className="fas fa-bell"></i>
    </span>
  </div>
);

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
        {!isExpanded ? (
          icons
        ) : (
          <div>
            <h3>Ось новий сайдбар</h3>
            <p>
              Це тимчасовий вміст правої панелі. Ви можете замінити його будь-якими компонентами,
              які вам потрібні, наприклад, віджетами, нотатками або додатковою інформацією.
            </p>
            {isMobile && (
              <button onClick={toggleRightSidebarSplit}>
                {isRightSidebarSplit ? "З'єднати екран" : "Розділити екран"}
              </button>
            )}
          </div>
        )}
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
