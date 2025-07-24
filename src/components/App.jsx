import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeProvider";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import SermonsPage from "../pages/SermonsPage";
import HomeGroupsPage from "../pages/HomeGroupsPage";
import SundaySchoolPage from "../pages/SundaySchoolPage";
import SeminarsPage from "../pages/SeminarsPage";
import NewsPage from "../pages/NewsPage";
import { SermonsProvider } from "../contexts/SermonsContext";
import { HomeGroupsProvider } from "../contexts/HomeGroupsContext";

const App = () => (
  <HomeGroupsProvider>
    <SermonsProvider>
      <ThemeProvider>
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
      </ThemeProvider>
    </SermonsProvider>
  </HomeGroupsProvider>
);

export default App;
