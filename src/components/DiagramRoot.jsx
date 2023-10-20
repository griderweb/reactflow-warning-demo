import { useCallback } from 'react';
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import demoNodes from './demoNodes';

const initialNodes = demoNodes;

const initialEdges = initialNodes.reduce((res, node) => {
  const outbound = node.data.outputs;

  return [
    ...res,
    ...outbound.map((outboundId) => {
      return {
        id: `edge-${node.id}-${outboundId}`,
        source: node.id,
        target: outboundId
      };
    })
  ];
}, []);

const nodeTypes = {
  custom: CustomNode
};

function DiagramRootInner() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
    </ReactFlow>
  );
}

export default function DiagramRoot(props) {
  return (
    <ReactFlowProvider>
      <DiagramRootInner {...props} />
    </ReactFlowProvider>
  );
}
