import React, { createContext, useState, useContext } from "react";

export const HomeGroupsContext = createContext(null);

export const HomeGroupsProvider = ({ children }) => {
  const [selectedHomeGroup, setSelectedHomeGroup] = useState(null); // Можливо, id, або об'єкт групи

  const contextValue = {
    selectedHomeGroup,
    setSelectedHomeGroup,
  };

  return <HomeGroupsContext.Provider value={contextValue}>{children}</HomeGroupsContext.Provider>;
};

export const useHomeGroups = () => {
  const context = useContext(HomeGroupsContext);
  if (context === undefined) {
    throw new Error("useHomeGroups must be used within a HomeGroupsProvider");
  }
  return context;
};
