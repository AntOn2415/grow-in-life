// src/components/NotFoundPage/NotFoundPage.jsx
import { Link } from "react-router-dom";
import React from "react";
import { NotFoundContainer, StatusCode, Message } from "./NotFoundPage.styles"; // Імпорт стилів

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <StatusCode>404</StatusCode>
      <Message>
        На жаль, сторінку, яку ви шукаєте, не знайдено. Можливо, ви ввели неправильну адресу або
        сторінка була переміщена.
      </Message>
      <Link to="/">Повернутися на головну</Link>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
