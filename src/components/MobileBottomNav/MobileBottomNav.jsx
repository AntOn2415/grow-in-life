import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiArticleLine, RiArticleFill } from "react-icons/ri";
import { IoBookOutline, IoBook } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { BottomNavContainer, NavLinkItem, IconWrapper } from "./MobileBottomNav.styled";

const MobileBottomNav = ({
  onLeftMenuClick,
  onRightMenuClick,
  isLeftMenuOpen,
  isRightMenuOpen,
}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navigate = useNavigate();

  const isLeftMenuActive = isLeftMenuOpen;
  const isRightMenuActive = isRightMenuOpen;
  const isCentralMenuActive = !isLeftMenuOpen && !isRightMenuOpen;

  const handleCentralButtonClick = () => {
    if (isLeftMenuOpen) {
      onLeftMenuClick(false);
    } else if (isRightMenuOpen) {
      onRightMenuClick(false);
    } else {
      // ✅ Відновлена логіка переходу назад
      navigate(-1);
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
    exit: { scale: 1 },
  };

  return (
    <BottomNavContainer className={isHome ? "hidden" : ""}>
      <NavLinkItem
        onClick={() => onLeftMenuClick(true)}
        data-active={isLeftMenuActive}
        // ✅ Додані ARIA-атрибути
        aria-label="Відкрити бічне меню"
        aria-expanded={isLeftMenuActive}
      >
        <IconWrapper>
          <motion.div
            key="menu-icon"
            initial={{ scale: 1 }}
            animate={{ scale: isLeftMenuActive ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <TfiMenuAlt />
          </motion.div>
        </IconWrapper>
        <span>Меню</span>
      </NavLinkItem>

      <NavLinkItem
        onClick={handleCentralButtonClick}
        data-active={isCentralMenuActive}
        // ✅ Оновлений aria-label, щоб відображати обидві дії кнопки
        aria-label={isCentralMenuActive ? "Повернутися назад" : "Закрити меню"}
      >
        <IconWrapper>
          <AnimatePresence mode="wait">
            {isCentralMenuActive ? (
              <motion.div
                key="content-active"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <RiArticleFill />
              </motion.div>
            ) : (
              <motion.div
                key="content-inactive"
                variants={iconVariants}
                initial="initial"
                animate="initial"
                exit="exit"
              >
                <RiArticleLine />
              </motion.div>
            )}
          </AnimatePresence>
        </IconWrapper>
        <span>Сторінка</span>
      </NavLinkItem>

      <NavLinkItem
        onClick={() => onRightMenuClick(true)}
        data-active={isRightMenuActive}
        // ✅ Додані ARIA-атрибути
        aria-label="Відкрити біблійний пошук"
        aria-expanded={isRightMenuActive}
      >
        <IconWrapper>
          <AnimatePresence mode="wait">
            {isRightMenuActive ? (
              <motion.div
                key="bible-active"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <IoBook />
              </motion.div>
            ) : (
              <motion.div
                key="bible-inactive"
                variants={iconVariants}
                initial="initial"
                animate="initial"
                exit="exit"
              >
                <IoBookOutline />
              </motion.div>
            )}
          </AnimatePresence>
        </IconWrapper>
        <span>Біблія</span>
      </NavLinkItem>
    </BottomNavContainer>
  );
};

export default MobileBottomNav;
