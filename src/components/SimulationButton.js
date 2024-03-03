import React from "react";
import Button from "react-bootstrap/Button";

export default function SimulationButton({ label, onClick, isOverrideSize }) {
  const customCursorStyle = {
    cursor: `url('${process.env.PUBLIC_URL}/icons8-cursor-55.png'), pointer`,
  };

  return (
    <Button
      size={isOverrideSize ? "sm" : "lg"}
      className="px-5 py-3"
      onClick={onClick}
      style={customCursorStyle}
    >
      {label}
    </Button>
  );
}
