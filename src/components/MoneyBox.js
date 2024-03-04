import React, { useEffect, useState } from "react";

export default function MoneyBox({ data, maxAmount, graphHeight }) {
  const [filledPercentage, setFilledPercentage] = useState(0);

  useEffect(() => {
    console.log(data, maxAmount);
    const filledRatio = Math.min(Math.max(...data) / maxAmount, 1);
    const newFilledPercentage = filledRatio * 100;
    setFilledPercentage(newFilledPercentage);
  }, [data, maxAmount]);

  return (
    <div
      className="d-flex justify-content-center"
      style={{
        width: "15px",
        height: `${graphHeight}px`,
        border: "1px solid black",
        backgroundColor: "lightgray", // Always show lightgray background
        position: "relative", // Make the outer div relative for absolute positioning of the inner bar
      }}
    >
      <div
        style={{
          position: "absolute", // Position the inner bar absolutely within the outer div
          bottom: 0, // Align the bottom of the inner bar with the bottom of the outer div
          backgroundColor: "green",
          // Fill height based on state value
          height: `${filledPercentage}%`, // Set height as percentage
          width: "100%",
        }}
      />
    </div>
  );
}
