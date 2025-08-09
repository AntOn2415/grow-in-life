// src/App.js
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../contexts/ThemeProvider";
import Layout from "./Layout";

import { SermonsProvider } from "../contexts/SermonsContext";
import { HomeGroupsProvider } from "../contexts/HomeGroupsContext";
import { BibleProvider } from "../contexts/BibleContext"; // Імпортуємо новий провайдер

import GlobalStyles from "../styles/global/GlobalStyles";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

const HomePage = lazy(() => import("../pages/HomePage"));
const SermonsPage = lazy(() => import("../pages/SermonsPage"));
const HomeGroupsPage = lazy(() => import("../pages/HomeGroupsPage"));
const SundaySchoolPage = lazy(() => import("../pages/SundaySchoolPage"));
const SeminarsPage = lazy(() => import("../pages/SeminarsPage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));

const App = () => (
  <HomeGroupsProvider>
    <SermonsProvider>
      {/* Додаємо BibleProvider, щоб він був доступний для всіх маршрутів */}
      <BibleProvider>
        <ThemeProvider>
          <GlobalStyles />
          <Suspense fallback={<div>Завантаження сторінки...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="sermons" element={<SermonsPage />} />
                <Route path="home-groups" element={<HomeGroupsPage />} />
                <Route path="sunday-school" element={<SundaySchoolPage />} />
                <Route path="seminars" element={<SeminarsPage />} />
                <Route path="news" element={<NewsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </ThemeProvider>
      </BibleProvider>
    </SermonsProvider>
  </HomeGroupsProvider>
);

export default App;
