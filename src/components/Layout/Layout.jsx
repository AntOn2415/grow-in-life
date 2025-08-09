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
import { BibleContext } from "../../contexts/BibleContext";
import { useContext } from "react";

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
  const [mainHeight, setMainHeight] = useState("100%");
  const [showMobileLeftSidebar, setShowMobileLeftSidebar] = useState(false);
  const [showMobileRightSidebar, setShowMobileRightSidebar] = useState(false);

  const location = useLocation();
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  const mainRef = useRef(null);

  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`);

  const { navId, navSource } = useContext(BibleContext);
  const lastNavIdRef = useRef(null);

  useEffect(() => {
    if (navId && navId !== lastNavIdRef.current) {
      lastNavIdRef.current = navId;
      if (isMobile) {
        if (navSource === "text") {
          setShowMobileLeftSidebar(false);
          setShowMobileRightSidebar(true);
          setIsRightSidebarSplit(true);
        } else if (navSource === "menu") {
          setShowMobileLeftSidebar(false);
          setShowMobileRightSidebar(true);
          setIsRightSidebarSplit(false);
        }
      }
    }
  }, [navId, isMobile, navSource]);

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
    const isAnySidebarOpen =
      showMobileLeftSidebar || showMobileRightSidebar || showMobileRightSidebar;
    if (isMobile && isAnySidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileLeftSidebar, showMobileRightSidebar, isRightSidebarSplit, isMobile]);

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
  };

  const isHome = location.pathname === "/";

  return (
    <Wrapper>
      <Navigation ref={navRef} showNav={showNav} />
      <ContentGrid
        sidebarCollapsed={leftSidebarCollapsed}
        isHome={isHome}
        rightSidebarExpanded={isRightSidebarSplit}
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
          rightSidebarExpanded={isRightSidebarSplit}
          navHeight={navHeight}
          isRightSidebarSplit={isRightSidebarSplit}
          as={motion.main}
          style={{
            height: isMobile ? mainHeight : "100%",
          }}
        >
          <Outlet context={{ mainRef }} />
        </Main>
        {!isHome && !isMobile && (
          <RightSidebarContainer
            isHome={isHome}
            isMobile={false}
            navHeight={navHeight}
            expanded={isRightSidebarSplit}
          >
            <RightSidebar
              toggleRightSidebarSplit={toggleRightSidebarSplit}
              isRightSidebarSplit={isRightSidebarSplit}
              isMobile={isMobile}
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
                    toggleRightSidebarSplit={toggleRightSidebarSplit}
                    isRightSidebarSplit={isRightSidebarSplit}
                    isMobile={isMobile}
                    onCloseMobileSidebar={() => setShowMobileRightSidebar(false)}
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
