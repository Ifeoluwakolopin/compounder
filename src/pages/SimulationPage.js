import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SimulationArea from "../components/SimulationArea";
import SimulationButton from "../components/SimulationButton";
import Controls from "../components/Controls";

export default function SimulationPage() {
  const [showInstructions, setShowInstructions] = useState(true);

  const handleStartSimulation = () => {
    setShowInstructions(false);
  };

  const handleInvest = (amount, interestRate) => {
    // Pass data to calculator functions or other components to perform simulation
    console.log(
      "Investing with amount:",
      amount,
      "and interest rate:",
      interestRate
    );
  };

  return (
    <SimulationArea>
      <Container className="text-center py-5">
        {showInstructions && (
          <Row>
            <Col>
              <h1 className="simulation-font">
                All about the Compound Interest
              </h1>
              <p
                className="text-center mx-auto mb-4 simulation-font"
                style={{ maxWidth: "600px", fontSize: "1.25rem" }}
              >
                Imagine saving money in a piggy bank. Each year, you earn
                interest on your savings, just like the piggy bank grows fatter!
                This interest can be simple, like adding a fixed amount each
                year, or compound, where you earn interest on the interest
                you've already earned. This simulation lets you explore the
                power of compound interest and see how your money can truly grow
                over time!
              </p>
              <div className="simulation-font">
                <SimulationButton
                  onClick={handleStartSimulation}
                  label="Start Simulation"
                />
              </div>
            </Col>
          </Row>
        )}
        {!showInstructions && (
          <Row>
            <Col xs={4}>
              <Controls onInvest={handleInvest} />
            </Col>
            <Col xs={8}>
              {/* Other simulation elements and results will go here */}
            </Col>
          </Row>
        )}
      </Container>
    </SimulationArea>
  );
}
