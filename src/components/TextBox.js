import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";

export default function TextBox({ label, value, onChange }) {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (event) => {
    const newValue = event.target.value.replace(/[^0-9.-]/g, "");
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <Form.Group>
      <Form.Label className="text-muted">{label}</Form.Label>
      <Form.Control
        ref={inputRef}
        type="number"
        step="0.01"
        value={inputValue}
        placeholder={label}
        onChange={handleChange}
      />
    </Form.Group>
  );
}
