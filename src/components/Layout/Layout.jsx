import React, { useState, useEffect, useRef } from "react";
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
  LeftSidebarContainer,
  RightSidebarContainer,
  Main,
  MobileLeftSidebarOverlay,
  MobileRightSidebarOverlay,
  MobileRightSidebarDiv,
} from "./Layout.styled";

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

const getInitialSidebarState = () => {
  const savedLeftSidebarState = sessionStorage.getItem("leftSidebarCollapsed");
  const savedRightSidebarState = sessionStorage.getItem("rightSidebarExpanded");
  const savedRightSidebarSplitState = sessionStorage.getItem("isRightSidebarSplit");

  return {
    leftSidebarCollapsed: savedLeftSidebarState ? JSON.parse(savedLeftSidebarState) : false,
    rightSidebarExpanded: savedRightSidebarState ? JSON.parse(savedRightSidebarState) : false,
    isRightSidebarSplit: savedRightSidebarSplitState
      ? JSON.parse(savedRightSidebarSplitState)
      : false,
  };
};

const Layout = () => {
  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(0);
  const {
    leftSidebarCollapsed: initialLeftCollapsed,
    rightSidebarExpanded: initialRightExpanded,
    isRightSidebarSplit: initialRightSplit,
  } = getInitialSidebarState();

  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(initialLeftCollapsed);
  const [rightSidebarExpanded, setRightSidebarExpanded] = useState(initialRightExpanded);
  const [previousLeftCollapsedState, setPreviousLeftCollapsedState] = useState(false);
  const [isRightSidebarSplit, setIsRightSidebarSplit] = useState(initialRightSplit);
  const [mainHeight, setMainHeight] = useState("100%");
  const [showMobileLeftSidebar, setShowMobileLeftSidebar] = useState(false);
  const [showMobileRightSidebar, setShowMobileRightSidebar] = useState(false);

  const location = useLocation();
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  const mainRef = useRef(null);

  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`);

  useEffect(() => {
    sessionStorage.setItem("leftSidebarCollapsed", JSON.stringify(leftSidebarCollapsed));
  }, [leftSidebarCollapsed]);

  useEffect(() => {
    sessionStorage.setItem("rightSidebarExpanded", JSON.stringify(rightSidebarExpanded));
  }, [rightSidebarExpanded]);

  useEffect(() => {
    sessionStorage.setItem("isRightSidebarSplit", JSON.stringify(isRightSidebarSplit));
  }, [isRightSidebarSplit]);

  useEffect(() => {
    if (isMobile) {
      setLeftSidebarCollapsed(false);
      setRightSidebarExpanded(false);
      setIsRightSidebarSplit(false);
    }
  }, [isMobile]);

  useEffect(() => {
    let timeoutId;
    if (isMobile && showMobileRightSidebar) {
      if (isRightSidebarSplit) {
        timeoutId = setTimeout(() => {
          setMainHeight("calc(50vh - 1px)");
        }, 250);
      } else {
        setMainHeight("100%");
      }
    } else {
      setMainHeight("100%");
    }
    return () => clearTimeout(timeoutId);
  }, [isRightSidebarSplit, showMobileRightSidebar, isMobile]);

  // ✅ ВИПРАВЛЕНО: Зміна умов для показу хедера
  // Тепер хедер показується, тільки якщо лівий сайдбар відкритий
  // АБО правий сайдбар відкритий НЕ в режимі розділення екрана (тобто на весь екран)
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

      // ✅ ВИПРАВЛЕНО: Умова повернення, коли хедер має бути показаний
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
    const isAnySidebarOpen = showMobileLeftSidebar || showMobileRightSidebar || isRightSidebarSplit;
    if (isMobile && isAnySidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileLeftSidebar, showMobileRightSidebar, isRightSidebarSplit, isMobile]);

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

  const toggleMobileLeftSidebar = shouldOpen => {
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
  };

  const toggleMobileRightSidebar = shouldOpen => {
    if (shouldOpen === false) {
      setShowMobileRightSidebar(false);
      setIsRightSidebarSplit(false);
    } else {
      setShowMobileRightSidebar(prev => {
        const newState = !prev;
        if (newState) {
          setShowMobileLeftSidebar(false);
          setIsRightSidebarSplit(true);
        } else {
          setIsRightSidebarSplit(false);
        }
        return newState;
      });
    }
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
          ref={mainRef}
          sidebarCollapsed={leftSidebarCollapsed}
          rightSidebarExpanded={rightSidebarExpanded}
          navHeight={navHeight}
          isRightSidebarSplit={isRightSidebarSplit}
          as={motion.main}
          style={{
            height: isMobile ? mainHeight : "100%",
            //transition: isMobile ? "height 0.25s ease-in-out" : "padding-top 0.25s ease-in-out",
          }}
        >
          <Outlet context={{ mainRef }} />
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
            <MobileBottomNav
              onLeftMenuClick={toggleMobileLeftSidebar}
              onRightMenuClick={toggleMobileRightSidebar}
              isLeftMenuOpen={showMobileLeftSidebar}
              isRightMenuOpen={showMobileRightSidebar}
            />
            <AnimatePresence>
              {showMobileLeftSidebar && (
                <motion.div
                  key="left-sidebar"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={leftSidebarVariants}
                  style={{
                    position: "fixed",
                    top: "50px",
                    left: 0,
                    width: "300px",
                    height: "calc(100vh - 50px)",
                    overflowY: "auto",
                    zIndex: 998,
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Sidebar
                    onCloseMobileSidebar={() => setShowMobileLeftSidebar(false)}
                    isMobile={isMobile}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showMobileRightSidebar && (
                <MobileRightSidebarDiv
                  key="right-sidebar"
                  initial={{ y: "100%" }}
                  animate={{
                    y: 0,
                    top: isRightSidebarSplit ? "50%" : "50px",
                    height: isRightSidebarSplit ? "calc(50vh - 50px)" : "calc(100vh - 100px)",
                  }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <RightSidebar
                    onToggle={handleRightSidebarToggle}
                    rightSidebarExpanded={rightSidebarExpanded}
                    onCloseMobileSidebar={() => setShowMobileRightSidebar(false)}
                    toggleRightSidebarSplit={toggleRightSidebarSplit}
                    isRightSidebarSplit={isRightSidebarSplit}
                  />
                </MobileRightSidebarDiv>
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
