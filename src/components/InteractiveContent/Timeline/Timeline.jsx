// src/components/SpecificContentDisplays/Timeline/Timeline.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../../contexts/ThemeProvider";
import { FiChevronRight } from "react-icons/fi";
import {
  TimelineContainer,
  TimelineEventWrapper,
  EventDot,
  EventContent,
  EventTitle,
  EventYear,
  EventVersesContainer,
} from "./Timeline.styled";
import CollapsibleContent from "../../Common/CollapsibleContent/CollapsibleContent";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";

const Timeline = ({ events, eventTitleLevel = 4 }) => {
  const { currentTheme } = useTheme();
  const [activeEventId, setActiveEventId] = useState(null);

  const handleToggle = index => {
    const newActiveEventId = activeEventId === index ? null : index;
    setActiveEventId(newActiveEventId);
  };

  const handleVerseClick = e => {
    e.stopPropagation();
  };

  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <TimelineEventWrapper key={index}>
          <EventDot
            animate={
              activeEventId === index
                ? { scale: [1, 1.1, 1], backgroundColor: currentTheme.accentColor }
                : { scale: 1, backgroundColor: currentTheme.accentColor }
            }
            transition={{
              duration: 0.5,
              repeat: activeEventId === index ? Infinity : 0,
              repeatType: "loop",
            }}
          />
          <EventContent
            onClick={() => handleToggle(index)}
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              scale: { duration: 0.15, ease: "easeOut" },
              backgroundColor: { duration: 0.2, ease: "easeOut" },
            }}
            animate={{
              scale: activeEventId === index ? 1.02 : 1,
              backgroundColor:
                activeEventId === index ? currentTheme.hoverBg : currentTheme.cardBackground,
            }}
          >
            <EventTitle as={`h${eventTitleLevel}`} style={{ cursor: "pointer" }}>
              <span>
                {event.year && <EventYear>{event.year}</EventYear>}
                <TokenRenderer tokens={event.title} isHeading={true} />
              </span>

              <motion.span
                style={{ pointerEvents: "none" }}
                animate={{ rotate: activeEventId === index ? 90 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <FiChevronRight />
              </motion.span>
            </EventTitle>

            <CollapsibleContent isOpen={activeEventId === index}>
              {event.description && (
                <p>
                  {Array.isArray(event.description) ? (
                    event.description.map((descItem, i) => (
                      <TokenRenderer key={i} tokens={descItem} />
                    ))
                  ) : (
                    <TokenRenderer tokens={event.description} />
                  )}
                </p>
              )}

              {event.verses && event.verses.length > 0 && (
                <EventVersesContainer onClick={handleVerseClick}>
                  {event.verses.map((verse, i) => (
                    <TokenRenderer key={i} tokens={verse} />
                  ))}
                </EventVersesContainer>
              )}
            </CollapsibleContent>
          </EventContent>
        </TimelineEventWrapper>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
