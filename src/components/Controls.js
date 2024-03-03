import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TextBox from "./TextBox";
import Slider from "./Slider";
import CustomCursor from "./CustomCursor";

export default function Controls({ onInvest, onSeeFinalResult }) {
  const [amount, setAmount] = useState(49.99);
  const [interestRate, setInterestRate] = useState(10);
  const [years, setYears] = useState(10);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);

  const handleAmountChange = (newValue) => {
    setAmount(Number(newValue));
  };

  const handleInterestRateChange = (event) => {
    const updatedInterestRate = event.target.value;
    setInterestRate(updatedInterestRate);
  };

  const handleYearsChange = (newValue) => {
    setYears(Math.floor(Number(newValue)));
  };

  const handleStartStop = () => {
    setIsSimulationRunning(!isSimulationRunning);
    if (isSimulationRunning) {
      onInvest(amount, interestRate, years); // Start simulation
    } else {
      // Stop simulation logic (implementation depends on specific simulation logic)
      console.log("Simulation stopped");
    }
  };

  const handleSeeFinalResult = () => {
    console.log("Simulation stopped");
  };

  return (
    <CustomCursor>
      <Container
        className="controls-container simulation-font"
        style={{
          height: "auto",
          paddingBottom: "15px",
          minWidth: "200px",
          maxWidth: "250px",
          minHeight: "400px",
        }}
      >
        <Row className="justify-content-center mb-1">
          <Col md={12} className="text-center">
            <b>1. Enter an investment amount:</b>
          </Col>
          <Col md={12}>
            <TextBox value={amount} onChange={handleAmountChange} step={0.01} />
          </Col>
        </Row>

        <Row className="justify-content-center mb-1">
          <Col md={12} className="text-center">
            <b>
              2. Set interest rate:{" "}
              <text style={{ color: "blue", fontSize: "25px" }}>
                {interestRate}%
              </text>
            </b>
          </Col>
          <Col md={12}>
            <Slider
              min={0}
              max={100}
              value={interestRate}
              onChange={handleInterestRateChange}
            />
          </Col>
        </Row>

        <Row className="justify-content-center mb-3">
          <Col md={12} className="text-center">
            <b>3. Number of years:</b>
          </Col>
          <Col md={12}>
            <TextBox
              value={years.toString()}
              onChange={(value) => handleYearsChange(value)}
              step={1}
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          {" "}
          <Col md={6}>
            <Button variant="primary" onClick={handleStartStop}>
              {isSimulationRunning ? "Stop" : "Start"}
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="primary"
              onClick={handleSeeFinalResult}
              style={{ whiteSpace: "nowrap" }}
            >
              See Final
            </Button>
          </Col>
        </Row>
      </Container>
    </CustomCursor>
  );
}
