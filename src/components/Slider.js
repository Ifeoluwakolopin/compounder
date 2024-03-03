import Form from "react-bootstrap/Form";

export default function Slider({ label, min, max, value, onChange }) {
  const customCursorStyle = {
    cursor: `url('${process.env.PUBLIC_URL}/icons8-cursor-55.png'), pointer`,
  };
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Range
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        style={customCursorStyle}
      />
    </Form.Group>
  );
}
