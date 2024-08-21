"use client";

import React, { useEffect, useState } from "react";

const MainContext = React.createContext({ isDomLoaded: false });
const MainWrapper = ({ children }) => {
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  useEffect(() => {
    setIsDomLoaded(true);
  }, []);

  return (
    <MainContext.Provider value={{ isDomLoaded }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainWrapper;
