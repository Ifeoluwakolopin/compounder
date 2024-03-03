import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SimulationPage from "./pages/SimulationPage";
import CustomCursor from "./components/CustomCursor";
import { PageProvider } from "./contexts/PageContext";

export default function App() {
  return (
    <PageProvider>
      <CustomCursor>
        <BrowserRouter>
          <div
            style={{
              height: "100vh",
              backgroundImage: `url('${process.env.PUBLIC_URL}/bg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/simulation" element={<SimulationPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CustomCursor>
    </PageProvider>
  );
}
