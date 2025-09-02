// src/common/Tooltip/Tooltip.jsx

import React, { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { TooltipContainer, TooltipContent } from "./Tooltip.styles";

const Tooltip = ({ children, content, alignment = "center" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, placement: "top" });
  const targetRef = useRef(null);
  const tooltipContentRef = useRef(null);
  const tooltipRoot =
    typeof document !== "undefined" ? document.getElementById("tooltip-root") : null;

  const updateTooltipPosition = useCallback(() => {
    if (targetRef.current && tooltipContentRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const tooltipRect = tooltipContentRef.current.getBoundingClientRect();

      let newLeft;
      if (alignment === "left") {
        newLeft = targetRect.left;
      } else {
        newLeft = targetRect.left + targetRect.width / 2;
      }

      let newTop;
      let newPlacement = "top";

      const spaceAbove = targetRect.top;
      const spaceBelow = window.innerHeight - targetRect.bottom;

      if (spaceAbove >= tooltipRect.height + 8 || spaceAbove > spaceBelow) {
        newTop = targetRect.top - tooltipRect.height - 8;
        newPlacement = "top";
      } else {
        newTop = targetRect.bottom + 8;
        newPlacement = "bottom";
      }

      const viewportPadding = 10;
      if (alignment === "left") {
        if (newLeft + tooltipRect.width > window.innerWidth - viewportPadding) {
          newLeft = window.innerWidth - tooltipRect.width - viewportPadding;
        }
        if (newLeft < viewportPadding) {
          newLeft = viewportPadding;
        }
      } else {
        if (newLeft - tooltipRect.width / 2 < viewportPadding) {
          newLeft = tooltipRect.width / 2 + viewportPadding;
        } else if (newLeft + tooltipRect.width / 2 > window.innerWidth - viewportPadding) {
          newLeft = window.innerWidth - tooltipRect.width / 2 - viewportPadding;
        }
      }

      setPosition({
        top: newTop,
        left: newLeft,
        placement: newPlacement,
      });
    }
  }, [alignment]);

  useEffect(() => {
    if (isVisible) {
      const timeoutId = setTimeout(updateTooltipPosition, 0);

      window.addEventListener("scroll", updateTooltipPosition);
      window.addEventListener("resize", updateTooltipPosition);
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("scroll", updateTooltipPosition);
        window.removeEventListener("resize", updateTooltipPosition);
      };
    }
  }, [isVisible, updateTooltipPosition]);

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
              ref={tooltipContentRef}
              style={{
                top: position.top,
                left: position.left,
                transform: alignment === "left" ? "none" : "translateX(-50%)",
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
