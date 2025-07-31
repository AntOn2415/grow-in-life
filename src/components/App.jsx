// src/App.js
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../contexts/ThemeProvider";
import Layout from "./Layout";

import { SermonsProvider } from "../contexts/SermonsContext";
import { HomeGroupsProvider } from "../contexts/HomeGroupsContext";
import GlobalStyles from "../styles/GlobalStyles";

const HomePage = lazy(() => import("../pages/HomePage"));
const SermonsPage = lazy(() => import("../pages/SermonsPage"));
const HomeGroupsPage = lazy(() => import("../pages/HomeGroupsPage"));
const SundaySchoolPage = lazy(() => import("../pages/SundaySchoolPage"));
const SeminarsPage = lazy(() => import("../pages/SeminarsPage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));

const App = () => (
  <HomeGroupsProvider>
    <SermonsProvider>
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
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </SermonsProvider>
  </HomeGroupsProvider>
);

export default App;
