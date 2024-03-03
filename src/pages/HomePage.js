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
      <h1 className="display-3 text-center mb-5 simulation-font">
        All about Interests!{" "}
      </h1>
      <div className="text-center simulation-font">
        <SimulationButton label="Get Started" onClick={handleGetStarted} />
      </div>
    </SimulationArea>
  );
}
