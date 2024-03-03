import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";

export default function TextBox({ label, value, onChange, step }) {
  const customCursorStyle = {
    cursor: `url('${process.env.PUBLIC_URL}/icons8-cursor-55.png'), pointer`,
  };
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (event) => {
    const newValue = event.target.value.replace(/[^0-9.-]/g, "");
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <Form.Group style={customCursorStyle}>
      <Form.Label className="text-muted">{label}</Form.Label>
      <Form.Control
        ref={inputRef}
        type="number"
        step={step}
        value={inputValue}
        placeholder={label}
        onChange={handleChange}
      />
    </Form.Group>
  );
}
