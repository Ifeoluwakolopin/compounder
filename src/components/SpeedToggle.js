import React from "react";
import { Form } from "react-bootstrap";

export default function SpeedToggle({ onSpeedChange }) {
  return (
    <div
      style={{
        minWidth: "200px",
        maxWidth: "250px",
        marginLeft: "10px",
        marginTop: "15px",
      }}
    >
      <Form>
        <Form.Group controlId="speedToggle">
          <Form.Label>Simulation Speed</Form.Label>
          <Form.Select
            aria-label="Speed select"
            onChange={(e) => onSpeedChange(e.target.value)}
            defaultValue="4"
          >
            <option value="1">1x</option>
            <option value="2">2x</option>
            <option value="4">4x</option>
            <option value="8">8x</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
}
