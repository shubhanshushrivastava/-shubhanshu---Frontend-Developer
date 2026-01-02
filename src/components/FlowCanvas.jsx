import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";
import { getLayoutedElements } from "../utils/dagreLayout";

const nodeTypes = { custom: CustomNode };

export default function FlowCanvas({ nodes, edges }) {
  const layoutedNodes = getLayoutedElements(nodes, edges);

  return (
    <div className="h-[520px] border rounded bg-white">
      <ReactFlow
        nodes={layoutedNodes.map((n) => ({
          ...n,
          type: "custom",
          data: { label: n.label, level: n.level },
          style: { width: 160, height: 60 },
        }))}
        edges={edges.map((e) => ({
          ...e,
          type: "smoothstep",
          animated: true,
          style: { stroke: "#64748b", strokeWidth: 2 },
          markerEnd: { type: "arrowclosed", color: "#64748b" },
        }))}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
