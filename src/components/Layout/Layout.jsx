import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar"; // Лівий сайдбар
import RightSidebar from "../RightSidebar/RightSidebar"; // Правий сайдбар
import MobileBottomNav from "../MobileBottomNav/MobileBottomNav"; // Мобільна нижня навігація
import { useMediaQuery } from "../../hooks/useMediaQuery"; // Хук для медіа-запитів

import {
  Wrapper,
  ContentGrid,
  LeftSidebarContainer,
  RightSidebarContainer,
  Main,
  MobileLeftSidebarOverlay, // Додаємо оверлей для мобільного лівого сайдбару
  MobileRightSidebarOverlay, // Додаємо оверлей для мобільного правого сайдбару
} from "./Layout.styled";

const Layout = () => {
  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(0);
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(false);
  const [rightSidebarExpanded, setRightSidebarExpanded] = useState(false);
  const [previousLeftCollapsedState, setPreviousLeftCollapsedState] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  // Нові стани для керування мобільними сайдбарами
  const [showMobileLeftSidebar, setShowMobileLeftSidebar] = useState(false);
  const [showMobileRightSidebar, setShowMobileRightSidebar] = useState(false);

  // Використовуємо хук для визначення мобільного розміру екрану
  const isMobile = useMediaQuery("(max-width: 768px)"); // Припустимо, "md" це 768px

  // Ефект для керування видимістю навігації при прокрутці
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const curr = window.scrollY;
          if (curr > lastScroll.current && curr > navHeight) {
            setShowNav(false);
          } else if (curr < lastScroll.current) {
            setShowNav(true);
          }
          lastScroll.current = curr;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navHeight]);

  // Закриваємо мобільні сайдбари при зміні маршруту
  useEffect(() => {
    // Перевіряємо, чи був один з сайдбарів відкритий до зміни маршруту.
    // Якщо так, закриваємо обидва.
    setShowMobileLeftSidebar(prev => {
      if (prev) return false;
      return prev;
    });
    setShowMobileRightSidebar(prev => {
      if (prev) return false;
      return prev;
    });
  }, [location.pathname]);

  useEffect(() => {
    // Якщо відкритий хоча б один мобільний сайдбар
    if (showMobileLeftSidebar || showMobileRightSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Очищення стилю при розмонтуванні компонента
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileLeftSidebar, showMobileRightSidebar]);

  const handleRightSidebarToggle = () => {
    setRightSidebarExpanded(prev => {
      const newExpandedState = !prev;
      if (newExpandedState) {
        setPreviousLeftCollapsedState(leftSidebarCollapsed);
        setLeftSidebarCollapsed(true);
      } else {
        setLeftSidebarCollapsed(previousLeftCollapsedState);
      }
      return newExpandedState;
    });
  };

  // Функції для перемикання мобільних сайдбарів
  const toggleMobileLeftSidebar = () => {
    setShowMobileLeftSidebar(prev => {
      const newState = !prev;
      if (newState) {
        setShowMobileRightSidebar(false); // Закриваємо правий, якщо відкриваємо лівий
      }
      return newState;
    });
  };

  const toggleMobileRightSidebar = () => {
    setShowMobileRightSidebar(prev => {
      const newState = !prev;
      if (newState) {
        setShowMobileLeftSidebar(false); // Закриваємо лівий, якщо відкриваємо правий
      }
      return newState;
    });
  };

  const isHome = location.pathname === "/";

  return (
    <Wrapper>
      <Navigation ref={navRef} showNav={showNav} />

      <ContentGrid
        sidebarCollapsed={leftSidebarCollapsed}
        isHome={isHome}
        rightSidebarExpanded={rightSidebarExpanded}
      >
        {/* Десктопний лівий сайдбар */}
        {!isHome && !isMobile && (
          <LeftSidebarContainer
            isHome={isHome}
            isMobile={false} // Явно вказуємо, що це десктопна версія
            navHeight={navHeight}
            collapsed={leftSidebarCollapsed}
          >
            <Sidebar collapsed={leftSidebarCollapsed} setCollapsed={setLeftSidebarCollapsed} />
          </LeftSidebarContainer>
        )}

        <Main rightSidebarExpanded={rightSidebarExpanded} navHeight={navHeight}>
          <Outlet />
        </Main>

        {/* Десктопний правий сайдбар */}
        {!isHome && !isMobile && (
          <RightSidebarContainer
            isHome={isHome} // Передаємо isHome
            isMobile={false} // Явно вказуємо, що це десктопна версія
            navHeight={navHeight}
            expanded={rightSidebarExpanded}
          >
            <RightSidebar
              onToggle={handleRightSidebarToggle}
              rightSidebarExpanded={rightSidebarExpanded}
            />
          </RightSidebarContainer>
        )}
      </ContentGrid>

      {/* Мобільний лівий сайдбар та оверлей */}
      {isMobile && (
        <>
          <MobileLeftSidebarOverlay
            show={showMobileLeftSidebar}
            onClick={() => setShowMobileLeftSidebar(false)}
          />
          <LeftSidebarContainer
            isMobile={true} // Вказуємо, що це мобільний режим
            showMobile={showMobileLeftSidebar} // Пропс для керування transform та display
            navHeight={navHeight}
            collapsed={leftSidebarCollapsed} // Це може контролювати внутрішній вигляд сайдбару
          >
            {/* КОМПОНЕНТ Sidebar ПОВЕРНУТО СЮДИ */}
            <Sidebar
              collapsed={leftSidebarCollapsed} // Це може контролювати внутрішній вигляд сайдбару
              setCollapsed={setLeftSidebarCollapsed}
              onCloseMobileSidebar={() => setShowMobileLeftSidebar(false)} // Пропс для закриття зсередини
            />
          </LeftSidebarContainer>
        </>
      )}

      {/* Мобільний правий сайдбар та оверлей */}
      {isMobile && (
        <>
          <MobileRightSidebarOverlay
            show={showMobileRightSidebar}
            onClick={() => setShowMobileRightSidebar(false)}
          />
          <RightSidebarContainer
            isMobile={true} // Вказуємо, що це мобільний режим
            showMobile={showMobileRightSidebar} // Пропс для керування transform та display
            navHeight={navHeight}
            expanded={rightSidebarExpanded} // Залишаємо для потенційних стилів
          >
            {/* КОМПОНЕНТ RightSidebar ПОВЕРНУТО СЮДИ */}
            <RightSidebar
              onToggle={handleRightSidebarToggle}
              rightSidebarExpanded={rightSidebarExpanded}
              onCloseMobileSidebar={() => setShowMobileRightSidebar(false)} // Пропс для закриття зсередини
            />
          </RightSidebarContainer>
        </>
      )}

      {/* Мобільна нижня навігація */}
      {isMobile && (
        <MobileBottomNav
          onLeftMenuClick={toggleMobileLeftSidebar}
          onRightMenuClick={toggleMobileRightSidebar}
          currentActivePath={location.pathname}
        />
      )}
    </Wrapper>
  );
};

export default Layout;
