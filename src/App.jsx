import dynamic from 'next/dynamic';

const Graph = dynamic(() => import('../src/Graph'), { ssr: false });

export default () => {
  const { nodes, edges } = {
    nodes: [
      {
        id: 'node-1',
      },
      {
        id: 'node-2',
      },
      {
        id: 'node-3',
      },
    ].map((node) => ({
      ...node,
      size: 50,
      color: 'green',
      style: {
        fill: 'green',
      },
    })),
    edges: [
      {
        source: 'node-1',
        target: 'node-2',
      },
    ].map((edge) => ({ ...edge, size: 5 })),
  };

  return <Graph width={1200} height={800} nodes={nodes} edges={edges} />;
};
