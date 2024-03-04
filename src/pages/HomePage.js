import { useNavigate } from "react-router-dom";
import SimulationButton from "../components/SimulationButton";
import SimulationArea from "../components/SimulationArea";

export default function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/simulation");
  };

  return (
    <SimulationArea>
      <h1 className="display-3 text-center mb-2 simulation-font">
        Compounder 📊
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          className="lead text-center simulation-font mb-5"
          style={{ maxWidth: "600px" }}
        >
          Learn about simple and compound interests with this simple simulation.
          💸
        </p>
      </div>
      <div className="text-center simulation-font">
        <SimulationButton label="Get Started" onClick={handleGetStarted} />
      </div>
    </SimulationArea>
  );
}
