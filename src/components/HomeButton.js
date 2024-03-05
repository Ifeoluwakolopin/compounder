import React from "react";
import { Button } from "react-bootstrap";
import { HouseDoorFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function HomeButton() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="text-center simulation-font">
      <Button onClick={goToHome} variant="primary">
        <HouseDoorFill />
      </Button>
      <div style={{ fontSize: "12px", marginTop: "5px" }}>Home</div>
    </div>
  );
}
