// src/components/SpecificContentDisplays/Timeline/Timeline.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../../contexts/ThemeProvider";
import {
  TimelineContainer,
  TimelineEventWrapper,
  EventDot,
  EventContent,
  EventTitle,
  EventDescription,
  EventYear,
  EventVersesContainer,
} from "./Timeline.styled";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import CollapsibleContent from "../../Common/CollapsibleContent/CollapsibleContent";

const Timeline = ({ title, events }) => {
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
      {title && (
        <SectionHeading as="h3" size="default">
          {title}
        </SectionHeading>
      )}

      {events.map((event, index) => (
        <TimelineEventWrapper
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <EventDot
            animate={
              activeEventId === index
                ? { scale: [1, 1.2, 1], backgroundColor: currentTheme.accentColor }
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
              scale: activeEventId === index ? 1.03 : 1,
              backgroundColor:
                activeEventId === index ? currentTheme.hoverBg : currentTheme.cardBackground,
            }}
          >
            <EventTitle style={{ cursor: "pointer" }}>
              <div>
                {event.year && <EventYear>{event.year}</EventYear>}
                {event.title}
              </div>
              <motion.span
                initial={false}
                animate={{ rotate: activeEventId === index ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ marginLeft: "10px", display: "inline-block" }}
              >
                ▶
              </motion.span>
            </EventTitle>

            <CollapsibleContent isOpen={activeEventId === index}>
              {event.description && <EventDescription>{event.description}</EventDescription>}

              {/* ✅ ВИПРАВЛЕННЯ: Спрощена логіка рендерингу */}
              {event.verses && event.verses.length > 0 && (
                <EventVersesContainer onClick={handleVerseClick}>
                  {event.verses}
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
