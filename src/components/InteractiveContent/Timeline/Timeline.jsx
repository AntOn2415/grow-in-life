// src/components/InteractiveContent/Timeline/Timeline.js
import React from "react";
import {
  TimelineContainer,
  TimelineEvent,
  EventDot,
  EventContent,
  EventTitle,
  EventDescription,
} from "./Timeline.styled";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";

const Timeline = ({ title, events }) => {
  return (
    <TimelineContainer>
      {title && (
        <SectionHeading as="h3" size="default">
          {/* ✅ ВИПРАВЛЕНО: Рендеримо title безпосередньо */}
          {title}
        </SectionHeading>
      )}
      {events.map((event, index) => (
        <TimelineEvent key={index}>
          <EventDot />
          <EventContent>
            {/* ✅ ВИПРАВЛЕНО: Рендеримо event.title безпосередньо */}
            <EventTitle>{event.title}</EventTitle>
            {/* ✅ ВИПРАВЛЕНО: Рендеримо event.description безпосередньо */}
            <EventDescription>{event.description}</EventDescription>
          </EventContent>
        </TimelineEvent>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
