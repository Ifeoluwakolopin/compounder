import React, { createContext, useContext, useState } from "react";

const MuteContext = createContext();

export const useMute = () => useContext(MuteContext);

export const MuteProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <MuteContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </MuteContext.Provider>
  );
};
