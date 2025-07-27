import React from "react";
import {
  TimelineContainer,
  TimelineEvent,
  EventDot,
  EventContent,
  EventTitle,
  EventDescription,
} from "./Timeline.styled";
import SectionHeading from "../../Common/SectionHeading/SectionHeading"; // Можливо, вам вже імпортований
// import DOMPurify from 'dompurify'; // Розкоментуйте, якщо використовуєте DOMPurify

const Timeline = ({ title, events }) => {
  // Функція для безпечного рендерингу HTML
  const renderHtmlContent = htmlString => {
    // Якщо ви використовуєте DOMPurify, розкоментуйте рядок нижче
    // return { __html: DOMPurify.sanitize(htmlString) };
    return { __html: htmlString };
  };

  return (
    <TimelineContainer>
      {/* Якщо title для Timeline теж може містити HTML */}
      {title && (
        <SectionHeading as="h3" size="default" dangerouslySetInnerHTML={renderHtmlContent(title)} />
      )}
      {events.map((event, index) => (
        <TimelineEvent key={index}>
          <EventDot />
          <EventContent>
            {/* ✅ Застосовуємо dangerouslySetInnerHTML до EventTitle */}
            <EventTitle dangerouslySetInnerHTML={renderHtmlContent(event.title)} />
            {/* ✅ Застосовуємо dangerouslySetInnerHTML до EventDescription */}
            <EventDescription dangerouslySetInnerHTML={renderHtmlContent(event.description)} />
          </EventContent>
        </TimelineEvent>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
