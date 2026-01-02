import { useState } from "react";
import FlowCanvas from "./components/FlowCanvas";
import HomeSections from "./components/HomeSections";
import Controls from "./components/Controls";
import { nodesData, edgesData, homeSections } from "./data/initialTree";

export default function App() {
  const [sections, setSections] = useState(homeSections);
  const [state, setState] = useState({
    nodes: nodesData,
    edges: edgesData,
    sections: homeSections,
  });

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">
        Visual Page Hierarchy Editor
      </h1>

      <FlowCanvas nodes={state.nodes} edges={state.edges} />

      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold mb-3">
          Home Page Sections
        </h2>

        <HomeSections
          sections={sections}
          setSections={(s) => {
            setSections(s);
            setState((prev) => ({ ...prev, sections: s }));
          }}
        />

        <Controls state={state} setState={setState} />
      </div>
    </div>
  );
}
