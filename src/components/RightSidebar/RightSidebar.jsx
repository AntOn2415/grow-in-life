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

export default function RightSidebar({ onToggle, rightSidebarExpanded }) {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <RightSidebarWrapper collapsed={!rightSidebarExpanded}>
      {" "}
      {/* Передача пропсу collapsed */}
      <RightSidebarMenu collapsed={!rightSidebarExpanded}>
        {" "}
        {/* Передача пропсу collapsed */}
        {!rightSidebarExpanded ? (
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
      <RightSidebarCollapseBtn onClick={onToggle}>
        {rightSidebarExpanded ? "›" : "‹"}
      </RightSidebarCollapseBtn>
    </RightSidebarWrapper>
  );
}
