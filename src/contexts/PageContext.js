import React, { createContext, useState } from "react";

export const PageContext = createContext({
  currentPage: "HomePage",
  setCurrentPage: () => {},
});

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("HomePage");

  const setNewPage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <PageContext.Provider value={{ currentPage, setNewPage }}>
      {children}
    </PageContext.Provider>
  );
};
