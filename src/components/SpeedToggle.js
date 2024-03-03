import React from "react";
import { Form } from "react-bootstrap";

export default function SpeedToggle({ onSpeedChange }) {
  return (
    <Form>
      <Form.Group controlId="speedToggle">
        <Form.Label>Simulation Speed</Form.Label>
        <Form.Select
          aria-label="Speed select"
          onChange={(e) => onSpeedChange(e.target.value)}
        >
          <option value="1">1x</option>
          <option value="2">2x</option>
          <option value="4">4x</option>
          <option value="8">8x</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}
