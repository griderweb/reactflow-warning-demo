export default [
  {
    id: "node-1",
    type: "custom",
    position: {
      x: 0,
      y: 0,
    },
    data: {
      id: "node-1",
      name: "Node 1",
      outputs: ["node-3"],
    },
  },
  {
    id: "node-2",
    type: "custom",
    position: {
      x: 200,
      y: 0,
    },
    data: {
      id: "node-2",
      name: "Node 2",
      outputs: ["node-3"],
    },
  },
  {
    id: "node-3",
    type: "custom",
    position: {
      x: 0,
      y: 200,
    },
    data: {
      processorId: "node-3",
      name: "Node 3",
      outputs: ["node-4"],
    },
  },
  {
    id: "node-4",
    type: "custom",
    position: {
      x: 0,
      y: 400,
    },
    data: {
      processorId: "node-4",
      name: "Node #1",
      outputs: [],
    },
  },
];
