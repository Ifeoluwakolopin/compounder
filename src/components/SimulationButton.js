import React from "react";
import Button from "react-bootstrap/Button";
import { useMute } from "../contexts/MuteContext";

export default function SimulationButton({ label, onClick, isOverrideSize }) {
  const customCursorStyle = {
    cursor: `url('${process.env.PUBLIC_URL}/icons8-cursor-55.png'), pointer`,
  };

  const { isMuted } = useMute();

  const playSound = () => {
    if (!isMuted) {
      const audio = new Audio(`${process.env.PUBLIC_URL}/ka-ching.mp3`);
      audio.play();
    }
  };

  const handleClick = (e) => {
    playSound();
    if (onClick) onClick(e);
  };

  return (
    <Button
      size={isOverrideSize ? "sm" : "lg"}
      className="px-5 py-3"
      onClick={handleClick}
      style={customCursorStyle}
    >
      {label}
    </Button>
  );
}
