import React, { createContext, useState, useContext, useMemo, useCallback } from "react";

export const SermonsContext = createContext(null);

export const SermonsProvider = ({ children }) => {
  const [selectedSermon, setSelectedSermon] = useState(null);

  // ✅ Використовуємо useCallback для стабілізації функції
  const stableSetSelectedSermon = useCallback(sermonId => {
    setSelectedSermon(sermonId);
  }, []);

  // ✅ Використовуємо useMemo для стабілізації об'єкта value
  const contextValue = useMemo(
    () => ({
      selectedSermon,
      setSelectedSermon: stableSetSelectedSermon,
    }),
    [selectedSermon, stableSetSelectedSermon]
  );

  return <SermonsContext.Provider value={contextValue}>{children}</SermonsContext.Provider>;
};

export const useSermons = () => {
  const context = useContext(SermonsContext);
  if (context === undefined) {
    throw new Error("useSermons must be used within a SermonsProvider");
  }
  return context;
};
