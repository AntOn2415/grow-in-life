import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const StyledCollapsibleContent = styled(motion.div)`
  overflow: hidden;
`;

// Новий стилізований компонент для внутрішнього вмісту
const InnerContentWrapper = styled(motion.div)`
  padding-top: 0.8rem; /* Перемістили padding-top сюди */
  /* Зміни в opacity можна застосовувати тут, якщо потрібно */
`;

const CollapsibleContent = ({ isOpen, children, ...props }) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <StyledCollapsibleContent
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: "auto", opacity: 1 },
            collapsed: { height: 0, opacity: 0 },
          }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1], // Стандартна крива
            // type: "spring", stiffness: 400, damping: 30  // Можете повернути, якщо звичайний ease не допоможе
          }}
          layout // Залишаємо layout для плавних змін розміру
          {...props}
        >
          {/* ✅ Нова обгортка для внутрішнього вмісту */}
          <InnerContentWrapper
            // Ці анімації для opacity краще залишити на InnerContentWrapper,
            // щоб вони анімувалися паралельно з height, але не впливали на layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }} // Невеликий delay, щоб з'явився після початку розкриття
          >
            {children}
          </InnerContentWrapper>
        </StyledCollapsibleContent>
      )}
    </AnimatePresence>
  );
};

export default CollapsibleContent;
