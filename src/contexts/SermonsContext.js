import React, { createContext, useState, useContext } from "react";

export const SermonsContext = createContext(null);

export const SermonsProvider = ({ children }) => {
  const [selectedSermon, setSelectedSermon] = useState(null);

  const contextValue = {
    selectedSermon,
    setSelectedSermon,
  };

  return <SermonsContext.Provider value={contextValue}>{children}</SermonsContext.Provider>;
};

export const useSermons = () => {
  const context = useContext(SermonsContext);
  if (context === undefined) {
    throw new Error("useSermons must be used within a SermonsProvider");
  }
  return context;
};
