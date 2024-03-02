import Button from "react-bootstrap/Button";

export default function SimulationButton({ label, onClick }) {
  const customCursorStyle = {
    cursor: `url('${process.env.PUBLIC_URL}/icons8-cursor-100.png'), pointer`,
  };

  return (
    <Button
      variant="primary"
      size="lg"
      className="px-5 py-3"
      onClick={onClick}
      style={customCursorStyle}
    >
      {label}
    </Button>
  );
}
