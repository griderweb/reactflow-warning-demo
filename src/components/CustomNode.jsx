import { Handle, Position } from 'reactflow';

export default function CustomNode({ data }) {
  const { name } = data;

  return (
    <>
      <Handle type="target" position={Position.Top} id="input" />
      <div>
        <p>{name}</p>
      </div>
      <Handle type="source" position={Position.Bottom} id="output" />
    </>
  );
}
