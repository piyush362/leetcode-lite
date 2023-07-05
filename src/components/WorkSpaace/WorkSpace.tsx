import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import PlayGround from "./PlayGround/Playground";

export default function WorkSpace() {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription />
      <PlayGround />
    </Split>
  );
}
