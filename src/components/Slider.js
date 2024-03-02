import Form from "react-bootstrap/Form";

export default function Slider({ label, min, max, value, onChange }) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Range min={min} max={max} value={value} onChange={onChange} />
    </Form.Group>
  );
}
