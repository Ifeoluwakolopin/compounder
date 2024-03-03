import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import SimulationButton from "./SimulationButton";
import TextBox from "./TextBox";
import Slider from "./Slider";

export default function Controls({ onInvest }) {
  const [amount, setAmount] = useState("49.99");
  const [interestRate, setInterestRate] = useState(10);

  const handleAmountChange = (newValue) => {
    setAmount(newValue);
  };

  const handleInterestRateChange = (event) => {
    const updatedInterestRate = event.target.value;
    setInterestRate(updatedInterestRate);
  };

  const handleInvest = () => {
    onInvest(amount, interestRate);
  };

  return (
    <div className="controls-container">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="simulation-font">
          <b>1. Enter an investment amount:</b>
        </div>
        <TextBox
          label="Enter amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>

      {/* Align elements horizontally */}
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="simulation-font">
          <b>2. Set interest rate:</b>
        </div>
        <Form.Group className="w-100">
          <Form.Label className="simulation-font">Interest Rate:</Form.Label>
          <Slider
            label="Adjust rate"
            min={0}
            max={100}
            value={interestRate}
            onChange={handleInterestRateChange}
          />
          <p>Interest Rate: {interestRate}%</p>
        </Form.Group>
      </div>

      <div className="simulation-font">
        Click Invest to see how the money grows over time.
      </div>
      <SimulationButton label="Invest" onClick={handleInvest} />
    </div>
  );
}
