import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TextBox from "./TextBox";
import Slider from "./Slider";
import CustomCursor from "./CustomCursor";

export default function Controls({
  onInvest,
  onSeeFinalResult,
  onStopSimulation,
  isSimulationRunning,
  simulationEnded,
}) {
  const [amount, setAmount] = useState(49.99);
  const [interestRate, setInterestRate] = useState(10);
  const [years, setYears] = useState(50);
  const [internalIsSimulationRunning, setInternalIsSimulationRunning] =
    useState(false);

  useEffect(() => {
    setInternalIsSimulationRunning(isSimulationRunning);
  }, [isSimulationRunning]);

  const handleAmountChange = (newValue) => {
    setAmount(Number(newValue));
  };

  const handleInterestRateChange = (event) => {
    const updatedInterestRate = Number(event.target.value);
    setInterestRate(updatedInterestRate);
  };

  const handleYearsChange = (newValue) => {
    setYears(Math.floor(Number(newValue)));
  };

  const handleStartStop = () => {
    if (!internalIsSimulationRunning) {
      onInvest(amount, interestRate, years);
    } else if (simulationEnded) {
      onInvest(amount, interestRate, years);
    } else {
      onStopSimulation();
    }
  };

  const handleSeeFinalResult = () => {
    // Passing an extra argument to distinguish this action from regular investment simulation start
    onSeeFinalResult(amount, interestRate, years, true);
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
          marginLeft: "10px",
        }}
      >
        {/* Input Rows for Amount, Interest Rate, and Years */}
        <Row className="justify-content-center mb-1">
          <Col md={12} className="text-center">
            <b>1. Enter an investment amount:</b>
          </Col>
          <Col md={12}>
            <TextBox
              value={amount.toString()}
              onChange={handleAmountChange}
              step={0.01}
            />
          </Col>
        </Row>

        <Row className="justify-content-center mb-1">
          <Col md={12} className="text-center">
            <b>
              2. Set interest rate:{" "}
              <span style={{ color: "blue", fontSize: "25px" }}>
                {interestRate}%
              </span>
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
              onChange={handleYearsChange}
              step={1}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <Button variant="primary" onClick={handleStartStop}>
              {internalIsSimulationRunning && !simulationEnded
                ? "Stop"
                : "Start"}
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
