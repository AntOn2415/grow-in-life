import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import MobileBottomNav from "../MobileBottomNav/MobileBottomNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import {
  Wrapper,
  ContentGrid,
  LeftSidebarContainer,
  RightSidebarContainer,
  Main,
  MobileLeftSidebarOverlay,
  MobileRightSidebarOverlay,
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

  const [showMobileLeftSidebar, setShowMobileLeftSidebar] = useState(false);
  const [showMobileRightSidebar, setShowMobileRightSidebar] = useState(false);
  const [isRightSidebarSplit, setIsRightSidebarSplit] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

  // Цей ефект буде скидати стани collapsed/expanded, якщо розмір екрана став мобільним
  useEffect(() => {
    if (isMobile) {
      setLeftSidebarCollapsed(false);
      setRightSidebarExpanded(false);
      setIsRightSidebarSplit(false);
    }
  }, [isMobile]); // Залежність від isMobile

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
    setShowMobileLeftSidebar(false);
    setShowMobileRightSidebar(false);
    setIsRightSidebarSplit(false);
  }, [location.pathname]);

  // Ефект для керування скролом на body
  useEffect(() => {
    if (showMobileLeftSidebar || showMobileRightSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
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

  const toggleMobileLeftSidebar = () => {
    setShowMobileLeftSidebar(prev => {
      const newState = !prev;
      if (newState) {
        setShowMobileRightSidebar(false);
        setIsRightSidebarSplit(false);
      }
      return newState;
    });
  };

  const toggleMobileRightSidebar = () => {
    setShowMobileRightSidebar(prev => {
      const newState = !prev;
      if (newState) {
        setShowMobileLeftSidebar(false);
      } else {
        setIsRightSidebarSplit(false);
      }
      return newState;
    });
  };

  const toggleRightSidebarSplit = () => {
    setIsRightSidebarSplit(prev => !prev);
  };

  const isHome = location.pathname === "/";

  return (
    <Wrapper>
      <Navigation ref={navRef} showNav={showNav} />

      <ContentGrid
        sidebarCollapsed={leftSidebarCollapsed}
        isHome={isHome}
        rightSidebarExpanded={rightSidebarExpanded}
        isRightSidebarSplit={isRightSidebarSplit}
      >
        {!isHome && !isMobile && (
          <LeftSidebarContainer
            isHome={isHome}
            isMobile={false}
            navHeight={navHeight}
            collapsed={leftSidebarCollapsed}
          >
            <Sidebar collapsed={leftSidebarCollapsed} setCollapsed={setLeftSidebarCollapsed} />
          </LeftSidebarContainer>
        )}

        <Main
          rightSidebarExpanded={rightSidebarExpanded}
          navHeight={navHeight}
          isRightSidebarSplit={isRightSidebarSplit}
        >
          <Outlet />
        </Main>

        {!isHome && !isMobile && (
          <RightSidebarContainer
            isHome={isHome}
            isMobile={false}
            navHeight={navHeight}
            expanded={rightSidebarExpanded}
          >
            <RightSidebar
              onToggle={handleRightSidebarToggle}
              rightSidebarExpanded={rightSidebarExpanded}
              toggleRightSidebarSplit={toggleRightSidebarSplit}
              isRightSidebarSplit={isRightSidebarSplit}
            />
          </RightSidebarContainer>
        )}

        {isMobile && (
          <>
            <MobileLeftSidebarOverlay
              show={showMobileLeftSidebar}
              onClick={() => setShowMobileLeftSidebar(false)}
            />
            <LeftSidebarContainer
              isMobile={true}
              showMobile={showMobileLeftSidebar}
              navHeight={navHeight}
              collapsed={leftSidebarCollapsed}
            >
              <Sidebar
                collapsed={leftSidebarCollapsed}
                setCollapsed={setLeftSidebarCollapsed}
                onCloseMobileSidebar={() => setShowMobileLeftSidebar(false)}
              />
            </LeftSidebarContainer>
          </>
        )}

        {isMobile && (
          <>
            <MobileRightSidebarOverlay
              show={showMobileRightSidebar}
              onClick={() => setShowMobileRightSidebar(false)}
              isRightSidebarSplit={isRightSidebarSplit}
            />
            <RightSidebarContainer
              isMobile={true}
              showMobile={showMobileRightSidebar}
              navHeight={navHeight}
              expanded={rightSidebarExpanded}
              isRightSidebarSplit={isRightSidebarSplit}
            >
              <RightSidebar
                onToggle={handleRightSidebarToggle}
                rightSidebarExpanded={rightSidebarExpanded}
                onCloseMobileSidebar={() => setShowMobileRightSidebar(false)}
                toggleRightSidebarSplit={toggleRightSidebarSplit}
                isRightSidebarSplit={isRightSidebarSplit}
              />
            </RightSidebarContainer>
          </>
        )}

        {isMobile && (
          <MobileBottomNav
            onLeftMenuClick={toggleMobileLeftSidebar}
            onRightMenuClick={toggleMobileRightSidebar}
            currentActivePath={location.pathname}
          />
        )}
      </ContentGrid>
    </Wrapper>
  );
};

export default Layout;
