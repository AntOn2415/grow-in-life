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

// Додаємо пропси, щоб розрізняти мобільний та десктопний режими
export default function RightSidebar({ onToggle, rightSidebarExpanded, onCloseMobileSidebar }) {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  // Визначаємо, чи ми в мобільному режимі
  const isMobile = !!onCloseMobileSidebar;

  // На мобільному завжди показуємо повний контент
  const isExpanded = isMobile ? true : rightSidebarExpanded;

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
