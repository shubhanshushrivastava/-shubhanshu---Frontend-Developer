import dagre from "dagre";

export function getLayoutedElements(nodes, edges) {
  const graph = new dagre.graphlib.Graph();
  graph.setDefaultEdgeLabel(() => ({}));

  graph.setGraph({
    rankdir: "TB",
    nodesep: 80,
    ranksep: 100,
  });

  nodes.forEach((n) => {
    graph.setNode(n.id, { width: 160, height: 60 });
  });

  edges.forEach((e) => graph.setEdge(e.source, e.target));

  dagre.layout(graph);

  return nodes.map((n) => {
    const pos = graph.node(n.id);
    return {
      ...n,
      position: { x: pos.x - 80, y: pos.y - 30 },
    };
  });
}
