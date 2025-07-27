import React from "react";
import {
  ListCardsContainer,
  CardItem,
  CardTitle,
  CardContent,
  CardEmoji,
} from "./ListCards.styled";
import SectionHeading from "../../Common/SectionHeading/SectionHeading"; // Можливо, вам вже імпортований

const ListCards = ({ title, cards }) => {
  const renderHtmlContent = htmlString => {
    // Рекомендується використовувати DOMPurify для очищення HTML, якщо він надходить від користувачів
    // import DOMPurify from 'dompurify';
    // return { __html: DOMPurify.sanitize(htmlString) };
    return { __html: htmlString };
  };

  return (
    <ListCardsContainer>
      {title && (
        <SectionHeading as="h3" size="default">
          {title}
        </SectionHeading>
      )}
      {cards.map((card, index) => (
        <CardItem key={index}>
          {card.emoji && <CardEmoji>{card.emoji}</CardEmoji>}
          <CardTitle dangerouslySetInnerHTML={renderHtmlContent(card.title)} />{" "}
          {/* Додано для Title */}
          <CardContent dangerouslySetInnerHTML={renderHtmlContent(card.content)} /> {/* Вже було */}
        </CardItem>
      ))}
    </ListCardsContainer>
  );
};

export default ListCards;
