import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  CardWrapper,
  CardHeader,
  Emoji,
  CardTitle,
  CardContentWrapper,
  ReadMoreButton,
  ButtonWrapper,
} from "./Cards.styled";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";

const PREVIEW_HEIGHT = 160;

const Card = React.memo(
  ({ card, index, isExpanded, toggleExpand, collapseCard, handleRowBlur, titleLevel }) => {
    const contentRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [contentFullHeight, setContentFullHeight] = useState(PREVIEW_HEIGHT);

    useEffect(() => {
      const checkOverflow = () => {
        if (contentRef.current) {
          const { scrollHeight } = contentRef.current;
          setIsOverflowing(scrollHeight > PREVIEW_HEIGHT);
          if (scrollHeight > PREVIEW_HEIGHT) {
            setContentFullHeight(scrollHeight);
          } else {
            setContentFullHeight(PREVIEW_HEIGHT);
          }
        }
      };

      checkOverflow();
      window.addEventListener("resize", checkOverflow);
      const timeoutId = setTimeout(checkOverflow, 150);

      return () => {
        window.removeEventListener("resize", checkOverflow);
        clearTimeout(timeoutId);
      };
    }, [card.content]);

    useEffect(() => {
      if (isExpanded && contentRef.current) {
        setContentFullHeight(contentRef.current.scrollHeight);
      } else if (!isExpanded) {
        setContentFullHeight(PREVIEW_HEIGHT);
      }
    }, [isExpanded]);

    return (
      <CardWrapper
        onBlur={handleRowBlur}
        tabIndex={isOverflowing ? 0 : -1}
        aria-expanded={isExpanded}
      >
        <CardHeader>
          <Emoji role="img" aria-label={`Emoji for ${card.title}`}>
            {card.emoji}
          </Emoji>
          <CardTitle as={`h${titleLevel}`}>
            <TokenRenderer tokens={card.title} />
          </CardTitle>
        </CardHeader>

        <motion.div
          layout
          initial={{ height: PREVIEW_HEIGHT }}
          animate={{
            height: isExpanded ? contentFullHeight : PREVIEW_HEIGHT,
            opacity: 1,
          }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{ overflow: "hidden", width: "100%" }}
        >
          <CardContentWrapper
            ref={contentRef}
            $isExpanded={isExpanded}
            id={`card-content-${index}`}
          >
            <TokenRenderer tokens={card.content} />
          </CardContentWrapper>
        </motion.div>

        {isOverflowing && (
          <ButtonWrapper $isExpanded={isExpanded}>
            <ReadMoreButton
              onClick={e => {
                e.stopPropagation();
                toggleExpand(index);
              }}
              aria-controls={`card-content-${index}`}
              tabIndex={0}
              $isExpanded={isExpanded}
            >
              {isExpanded ? <>Згорнути</> : <>Читати далі</>}
            </ReadMoreButton>
          </ButtonWrapper>
        )}
      </CardWrapper>
    );
  }
);
export default Card;
