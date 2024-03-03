import Button from "react-bootstrap/Button";

export default function SimulationButton({ label, onClick }) {
  const customCursorStyle = {
    cursor: `url('${process.env.PUBLIC_URL}/icons8-cursor-100.png'), pointer`,
  };

  return (
    <Button
      size="lg"
      className="px-5 py-3 simulation-font"
      onClick={onClick}
      style={customCursorStyle}
    >
      {label}
    </Button>
  );
}
