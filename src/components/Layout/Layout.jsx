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

// Варіанти анімації для лівого сайдбару
const leftSidebarVariants = {
  hidden: {
    x: "-100%",
    transition: { ease: "easeOut", duration: 0.3 },
  },
  visible: {
    x: "0%",
    transition: { ease: "easeIn", duration: 0.3 },
  },
};

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

  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`);

  useEffect(() => {
    if (isMobile) {
      setLeftSidebarCollapsed(false);
      setRightSidebarExpanded(false);
      setIsRightSidebarSplit(false);
    }
  }, [isMobile]);

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

  useEffect(() => {
    setShowMobileLeftSidebar(false);
    setShowMobileRightSidebar(false);
    setIsRightSidebarSplit(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = "auto";
      return;
    }
    if (showMobileLeftSidebar || showMobileRightSidebar || isRightSidebarSplit) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileLeftSidebar, showMobileRightSidebar, isMobile, isRightSidebarSplit]);

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
          as={motion.main}
          animate={
            isMobile && isRightSidebarSplit
              ? { y: "0%", height: "calc(50vh - 5px)" }
              : { y: "0%", height: "100%" }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ paddingTop: isMobile ? "50px" : `${navHeight}px` }}
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
            <MobileBottomNav
              onLeftMenuClick={toggleMobileLeftSidebar}
              onRightMenuClick={toggleMobileRightSidebar}
              currentActivePath={location.pathname}
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
                  <Sidebar onCloseMobileSidebar={() => setShowMobileLeftSidebar(false)} />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showMobileRightSidebar && (
                <MobileRightSidebarDiv
                  key="right-sidebar"
                  initial={{ y: "100%" }}
                  animate={
                    isRightSidebarSplit
                      ? { y: "0%", height: "calc(50vh - 50px)", x: "0%" }
                      : { y: "0%", height: "calc(100vh - 100px)", x: "0%" }
                  }
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  isRightSidebarSplit={isRightSidebarSplit}
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
              onClick={() => setShowMobileLeftSidebar(false)}
            />
            <MobileRightSidebarOverlay
              show={showMobileRightSidebar}
              onClick={() => setShowMobileRightSidebar(false)}
              isRightSidebarSplit={isRightSidebarSplit}
            />
          </>
        )}
      </ContentGrid>
    </Wrapper>
  );
};

export default Layout;
