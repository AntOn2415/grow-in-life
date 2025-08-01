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
            // ✅ Оновлено: колір точки змінюється лише при активному стані
            animate={
              activeEventId === index
                ? { scale: [1, 1.2, 1], backgroundColor: currentTheme.accentColor } // Активний стан: миготіння та колір акценту
                : { scale: 1, backgroundColor: currentTheme.accentColor } // Неактивний стан: без анімації scale, колір акценту
            }
            transition={{
              duration: 0.5,
              repeat: activeEventId === index ? Infinity : 0, // Миготіння лише при активному стані
              repeatType: "loop",
            }}
          />
          <EventContent
            onClick={() => handleToggle(index)}
            // ✅ Змінено: Додано окремий transition для whileHover
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              scale: { duration: 0.15, ease: "easeOut" }, // ✅ Окрема, швидка анімація для масштабу при ховері
              backgroundColor: { duration: 0.2, ease: "easeOut" }, // Анімація фону залишається окремою, але тут не потрібна для ховеру
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

              {event.verses && event.verses.length > 0 && (
                <EventVersesContainer onClick={handleVerseClick}>
                  {event.verses.map((verseComponent, verseIndex) =>
                    React.cloneElement(verseComponent, { key: verseIndex })
                  )}
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
