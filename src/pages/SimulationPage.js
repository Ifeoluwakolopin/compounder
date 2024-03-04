import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SimulationArea from "../components/SimulationArea";
import SimulationButton from "../components/SimulationButton";
import Controls from "../components/Controls";
import SimulationResult from "../components/SimulationResult";
import SpeedToggle from "../components/SpeedToggle";
import { calculateYearlyInvestmentResults } from "../utils/Calculator";

export default function SimulationPage() {
  const [showInstructions, setShowInstructions] = useState(true);
  const [simulationResults, setSimulationResults] = useState({
    simpleInterest: [],
    compoundInterest: [],
  });
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(2);
  const [currentYear, setCurrentYear] = useState(1);
  const [totalYears, setTotalYears] = useState(0);
  const [maxAmount, setMaxAmount] = useState(1000);

  useEffect(() => {
    let timeoutId;

    if (isSimulationRunning && currentYear <= totalYears) {
      const delay = 1000 / simulationSpeed;
      timeoutId = setTimeout(() => {
        const rate = simulationResults.interestRate / 100;
        const newResults = calculateYearlyInvestmentResults(
          simulationResults.amount,
          rate,
          currentYear
        );
        setSimulationResults((prevResults) => ({
          ...prevResults,
          simpleInterest: newResults.simpleInterest,
          compoundInterest: newResults.compoundInterest,
        }));
        if (currentYear < totalYears) {
          setCurrentYear(currentYear + 1);
        } else {
          setIsSimulationRunning(false);
        }
      }, delay);
    }

    return () => clearTimeout(timeoutId);
  }, [
    isSimulationRunning,
    currentYear,
    simulationSpeed,
    simulationResults,
    totalYears,
  ]);

  const handleStartSimulation = () => {
    setShowInstructions(false);
  };

  const handleSpeedChange = (newSpeed) => {
    setSimulationSpeed(Number(newSpeed));
  };

  const handleInvest = (amount, interestRate, years) => {
    // Case 1: Restart the simulation from the beginning if it has ended
    if (
      currentYear > totalYears ||
      (!isSimulationRunning && currentYear === totalYears)
    ) {
      setIsSimulationRunning(true);
      setSimulationResults({
        amount,
        interestRate,
        simpleInterest: [],
        compoundInterest: [],
      });
      setTotalYears(years);
      setCurrentYear(1);
    } else if (!isSimulationRunning && currentYear < totalYears) {
      setIsSimulationRunning(true);
    }
  };

  const handleStopSimulation = () => {
    setIsSimulationRunning(false);
  };

  const handleSeeFinalResult = (amount, interestRate, years) => {
    setIsSimulationRunning(false);
    const rate = interestRate / 100;
    const finalResults = calculateYearlyInvestmentResults(amount, rate, years);
    setSimulationResults(finalResults);
    setCurrentYear(years);
    setIsSimulationRunning(false);
  };

  return (
    <SimulationArea>
      <Container className=" text-center py-5" fluid>
        {showInstructions ? (
          <Row>
            <Col>
              <h1 className="simulation-font">What is Compound Interest? 📊</h1>
              <p
                className="text-center mx-auto mb-4 simulation-text-font"
                style={{ maxWidth: "600px", fontSize: "1.25rem" }}
              >
                "Compound interest is like a pack of dominoes; your initial
                investment topples the first domino, triggering a chain where
                each new piece represents your growing interest. As the chain
                continues, your investment exponentially grows, building upon
                itself over time."
              </p>
              <h1 className="simulation-font">How to play? 🧩</h1>
              <p
                className="text-center mx-auto mb-4 simulation-text-font"
                style={{ maxWidth: "600px", fontSize: "1.25rem" }}
              >
                You are an investor, choose your investment amount, interest
                rate, and how many years you want to invest, and see how your
                investment grows over time 💹
              </p>
              <div className="simulation-font">
                <SimulationButton
                  onClick={handleStartSimulation}
                  label="Start Simulation"
                />
              </div>
            </Col>
          </Row>
        ) : (
          <>
            <Row className="mb-4">
              <Col xs={12}>
                <SpeedToggle onSpeedChange={handleSpeedChange} />
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={4}>
                <Controls
                  onInvest={handleInvest}
                  onStopSimulation={handleStopSimulation}
                  onSeeFinalResult={handleSeeFinalResult}
                  isSimulationRunning={isSimulationRunning}
                  currentYear={currentYear}
                  totalYears={totalYears}
                  setMaxAmount={setMaxAmount}
                />
              </Col>

              {simulationResults.simpleInterest.length > 0 && (
                <Col xs={12} lg={8} className="d-flex justify-content-around">
                  <SimulationResult
                    title="Simple Interest"
                    data={simulationResults.simpleInterest}
                    isLine={true}
                    maxAmount={maxAmount}
                  />
                  <SimulationResult
                    title="Compound Interest"
                    data={simulationResults.compoundInterest}
                    isLine={true}
                    maxAmount={maxAmount}
                  />
                </Col>
              )}
            </Row>
          </>
        )}
      </Container>
    </SimulationArea>
  );
}
