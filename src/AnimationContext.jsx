import React, { createContext, useState, useContext } from "react";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [startLineAnimation, setStartLineAnimation] = useState(false);

  return (
    <AnimationContext.Provider
      value={{ startLineAnimation, setStartLineAnimation }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);
