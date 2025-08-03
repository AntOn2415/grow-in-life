// src/common/Tooltip/Tooltip.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { TooltipContainer, TooltipContent } from "./Tooltip.styles";

const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, placement: "top" }); // Додано placement
  const targetRef = useRef(null);
  const tooltipContentRef = useRef(null); // Референс на сам контент підказки для вимірювання її розміру
  const tooltipRoot =
    typeof document !== "undefined" ? document.getElementById("tooltip-root") : null;

  const updateTooltipPosition = useCallback(() => {
    if (targetRef.current && tooltipContentRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const tooltipRect = tooltipContentRef.current.getBoundingClientRect();

      let newLeft = targetRect.left + targetRect.width / 2; // Центр елемента
      let newTop;
      let newPlacement = "top"; // За замовчуванням розміщуємо зверху

      // Перевіряємо, чи є достатньо місця зверху
      const spaceAbove = targetRect.top;
      const spaceBelow = window.innerHeight - targetRect.bottom;

      // Розміщуємо зверху, якщо є місце або якщо знизу місця менше
      if (spaceAbove >= tooltipRect.height + 8 || spaceAbove > spaceBelow) {
        // 8px - відступ
        newTop = targetRect.top - tooltipRect.height - 8; // 8px відступ від елемента
        newPlacement = "top";
      } else {
        // Інакше розміщуємо знизу
        newTop = targetRect.bottom + 8; // 8px відступ від елемента
        newPlacement = "bottom";
      }

      // Забезпечуємо, щоб підказка не виходила за межі екрану по горизонталі
      const viewportPadding = 10; // Невеликий відступ від краю екрану
      if (newLeft - tooltipRect.width / 2 < viewportPadding) {
        newLeft = tooltipRect.width / 2 + viewportPadding;
      } else if (newLeft + tooltipRect.width / 2 > window.innerWidth - viewportPadding) {
        newLeft = window.innerWidth - tooltipRect.width / 2 - viewportPadding;
      }

      setPosition({
        top: newTop,
        left: newLeft,
        placement: newPlacement,
      });
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Викликаємо updateTooltipPosition після того, як підказка відрендериться
      // і її розміри стануть доступними. Timeout дозволяє DOM оновитися.
      const timeoutId = setTimeout(updateTooltipPosition, 0);

      window.addEventListener("scroll", updateTooltipPosition);
      window.addEventListener("resize", updateTooltipPosition);
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("scroll", updateTooltipPosition);
        window.removeEventListener("resize", updateTooltipPosition);
      };
    }
  }, [isVisible, updateTooltipPosition]); // Додаємо updateTooltipPosition до залежностей

  if (!tooltipRoot) {
    console.warn("Tooltip root element not found. Tooltip might not render correctly.");
    return null;
  }

  return (
    <TooltipContainer
      ref={targetRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {createPortal(
        <AnimatePresence>
          {isVisible && (
            <TooltipContent
              ref={tooltipContentRef} // Прив'язуємо референс до контенту підказки
              style={{
                top: position.top,
                left: position.left,
                // Динамічний transform для коректного позиціонування
                transform: `translateX(-50%) ${
                  position.placement === "top" ? "translateY(0)" : "translateY(0)"
                }`,
              }}
              initial={{ opacity: 0, y: position.placement === "top" ? 5 : -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: position.placement === "top" ? 5 : -5 }}
              transition={{ duration: 0.2 }}
            >
              {content}
            </TooltipContent>
          )}
        </AnimatePresence>,
        tooltipRoot
      )}
    </TooltipContainer>
  );
};

export default Tooltip;
