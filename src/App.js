import React from "react";
import HomePage from "./pages/HomePage";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <CustomCursor>
      <div className="App">
        <HomePage />
      </div>
    </CustomCursor>
  );
}
