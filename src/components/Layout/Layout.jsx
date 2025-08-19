import React, { useState, useEffect, useRef, useContext, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import MobileBottomNav from "../MobileBottomNav/MobileBottomNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { breakpoints } from "../../styles/shared/breakpoints";
import {
  Wrapper,
  ContentGrid,
  Main,
  MobileLeftSidebarOverlay,
  MobileRightSidebarOverlay,
} from "./Layout.styled";
import { BibleContext } from "../../contexts/BibleContext";

// Варіанти анімації для лівого сайдбару
const leftSidebarVariants = {
  hidden: {
    x: "-100%",
    transition: { ease: "easeOut", duration: 0.25 },
  },
  visible: {
    x: "0%",
    transition: { ease: "easeIn", duration: 0.25 },
  },
};

// Варіанти анімації для правого сайдбару (поява/зникнення)
const rightSidebarVariants = {
  hidden: {
    y: "100%",
    transition: { ease: "easeOut", duration: 0.25 },
  },
  visible: {
    y: "0%",
    transition: { ease: "easeIn", duration: 0.25 },
  },
};

const getInitialSidebarState = () => {
  const savedLeftSidebarState = sessionStorage.getItem("leftSidebarCollapsed");
  const savedRightSidebarSplitState = sessionStorage.getItem("isRightSidebarSplit");

  return {
    leftSidebarCollapsed: savedLeftSidebarState ? JSON.parse(savedLeftSidebarState) : false,
    isRightSidebarSplit: savedRightSidebarSplitState
      ? JSON.parse(savedRightSidebarSplitState)
      : false,
  };
};

const Layout = () => {
  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(0);
  const { leftSidebarCollapsed: initialLeftCollapsed, isRightSidebarSplit: initialRightSplit } =
    getInitialSidebarState();
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(initialLeftCollapsed);
  const [previousLeftCollapsedState, setPreviousLeftCollapsedState] = useState(false);
  const [isRightSidebarSplit, setIsRightSidebarSplit] = useState(initialRightSplit);
  const [showMobileLeftSidebar, setShowMobileLeftSidebar] = useState(false);
  const [showMobileRightSidebar, setShowMobileRightSidebar] = useState(false);
  const [isMainSplit, setIsMainSplit] = useState(initialRightSplit);
  const location = useLocation();
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const mainRef = useRef(null);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`);
  const { navId, navSource } = useContext(BibleContext);
  const lastNavIdRef = useRef(null);

  const toggleMobileLeftSidebar = useCallback(shouldOpen => {
    if (shouldOpen === false) {
      setShowMobileLeftSidebar(false);
    } else {
      setShowMobileLeftSidebar(prev => {
        const newState = !prev;
        if (newState) {
          setShowMobileRightSidebar(false);
          setIsRightSidebarSplit(false);
        }
        return newState;
      });
    }
  }, []);

  const toggleMobileRightSidebar = useCallback(shouldOpen => {
    if (shouldOpen === false) {
      setShowMobileRightSidebar(false);
      setIsRightSidebarSplit(false);
      setIsMainSplit(false);
    } else {
      setShowMobileRightSidebar(prev => {
        const newState = !prev;
        if (newState) {
          setShowMobileLeftSidebar(false);
          setIsRightSidebarSplit(true);
          setTimeout(() => {
            setIsMainSplit(true);
          }, 125);
        } else {
          setIsRightSidebarSplit(false);
          setIsMainSplit(false);
        }
        return newState;
      });
    }
  }, []);

  const toggleRightSidebarSplit = useCallback(() => {
    setIsRightSidebarSplit(prev => {
      const newSplitState = !prev;
      if (!isMobile) {
        if (newSplitState) {
          setPreviousLeftCollapsedState(leftSidebarCollapsed);
          setLeftSidebarCollapsed(true);
        } else {
          setLeftSidebarCollapsed(previousLeftCollapsedState);
        }
      }
      return newSplitState;
    });
  }, [isMobile, leftSidebarCollapsed, previousLeftCollapsedState]);

  useEffect(() => {
    if (navId && navId !== lastNavIdRef.current) {
      lastNavIdRef.current = navId;

      if (isMobile) {
        if (navSource === "text" && !showMobileRightSidebar) {
          setShowMobileLeftSidebar(false);
          setShowMobileRightSidebar(true);
        } else if (navSource === "menu" && !showMobileRightSidebar) {
          setShowMobileLeftSidebar(false);
          setShowMobileRightSidebar(true);
        }
      } else {
        if (navSource === "text" && !isRightSidebarSplit) {
          toggleRightSidebarSplit();
        }
      }
    }
  }, [
    navId,
    isMobile,
    navSource,
    isRightSidebarSplit,
    showMobileRightSidebar,
    setShowMobileRightSidebar,
    setShowMobileLeftSidebar,
    toggleRightSidebarSplit,
  ]);

  useEffect(() => {
    sessionStorage.setItem("leftSidebarCollapsed", JSON.stringify(leftSidebarCollapsed));
  }, [leftSidebarCollapsed]);

  useEffect(() => {
    sessionStorage.setItem("isRightSidebarSplit", JSON.stringify(isRightSidebarSplit));
  }, [isRightSidebarSplit]);

  useEffect(() => {
    if (isMobile) {
      setLeftSidebarCollapsed(false);
      setIsRightSidebarSplit(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && (showMobileLeftSidebar || (showMobileRightSidebar && !isRightSidebarSplit))) {
      setShowNav(true);
    } else if (!isMobile) {
      setShowNav(true);
    }
  }, [isMobile, showMobileLeftSidebar, showMobileRightSidebar, isRightSidebarSplit]);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
    let ticking = false;
    const handleScroll = () => {
      const mainElement = mainRef.current;
      const curr = mainElement ? mainElement.scrollTop : 0;
      if (isMobile && (showMobileLeftSidebar || (showMobileRightSidebar && !isRightSidebarSplit))) {
        return;
      }
      if (!ticking) {
        window.requestAnimationFrame(() => {
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
    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [navHeight, isMobile, showMobileLeftSidebar, showMobileRightSidebar, isRightSidebarSplit]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (mainRef.current) {
        const scrollPosition = mainRef.current.scrollTop;
        sessionStorage.setItem(`scrollPosition-${location.pathname}`, scrollPosition);
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location.pathname]);

  useEffect(() => {
    const isAnySidebarOpen = showMobileLeftSidebar || showMobileRightSidebar;
    if (isMobile && isAnySidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileLeftSidebar, showMobileRightSidebar, isRightSidebarSplit, isMobile]);

  const isHome = location.pathname === "/";

  return (
    <Wrapper>
      <header>
        <Navigation ref={navRef} showNav={showNav} />
      </header>
      <ContentGrid
        sidebarCollapsed={leftSidebarCollapsed}
        isHome={isHome}
        rightSidebarExpanded={isRightSidebarSplit}
        isRightSidebarSplit={isRightSidebarSplit}
      >
        {!isHome && !isMobile && (
          <Sidebar
            collapsed={leftSidebarCollapsed}
            setCollapsed={setLeftSidebarCollapsed}
            navHeight={navHeight}
            isHome={isHome}
          />
        )}
        <Main
          ref={mainRef}
          sidebarCollapsed={leftSidebarCollapsed}
          rightSidebarExpanded={isRightSidebarSplit}
          navHeight={navHeight}
          isRightSidebarSplit={isRightSidebarSplit}
          isMainSplit={isMainSplit}
          as={motion.main}
        >
          <Outlet context={{ mainRef }} />
        </Main>
        {!isHome && !isMobile && (
          <RightSidebar
            toggleRightSidebarSplit={toggleRightSidebarSplit}
            isRightSidebarSplit={isRightSidebarSplit}
            isMobile={isMobile}
            navHeight={navHeight}
            isHome={isHome}
          />
        )}
        {isMobile && (
          <>
            <MobileBottomNav
              onLeftMenuClick={() => toggleMobileLeftSidebar(true)}
              onRightMenuClick={() => toggleMobileRightSidebar(true)}
              isLeftMenuOpen={showMobileLeftSidebar}
              isRightMenuOpen={showMobileRightSidebar}
            />
            <AnimatePresence>
              {showMobileLeftSidebar && (
                <Sidebar
                  key="left-sidebar"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={leftSidebarVariants}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Основне меню"
                  onCloseMobileSidebar={() => setShowMobileLeftSidebar(false)}
                  isMobile={isMobile}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showMobileRightSidebar && (
                <RightSidebar
                  key="right-sidebar"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={rightSidebarVariants}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Додаткові інструменти"
                  toggleRightSidebarSplit={toggleRightSidebarSplit}
                  isRightSidebarSplit={isRightSidebarSplit}
                  isMobile={isMobile}
                  onCloseMobileSidebar={() => setShowMobileRightSidebar(false)}
                />
              )}
            </AnimatePresence>
            <MobileLeftSidebarOverlay
              show={showMobileLeftSidebar}
              onClick={() => toggleMobileLeftSidebar(false)}
            />
            <MobileRightSidebarOverlay
              show={showMobileRightSidebar}
              onClick={() => toggleMobileRightSidebar(false)}
              isRightSidebarSplit={isRightSidebarSplit}
            />
          </>
        )}
      </ContentGrid>
    </Wrapper>
  );
};

export default Layout;
