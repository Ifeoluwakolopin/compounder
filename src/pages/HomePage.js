import SimulationArea from "../components/SimulationArea";
import SimulationButton from "../components/SimulationButton";

export default function HomePage() {
  return (
    <SimulationArea>
      <h1 className="display-3 text-center mb-5">All about Interests! 🚀</h1>
      <div className="text-center">
        <SimulationButton
          label="Start Simulation"
          onClick={() => console.log("Simulation started")}
        />
      </div>
    </SimulationArea>
  );
}
