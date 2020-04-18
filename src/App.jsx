import dynamic from 'next/dynamic';
import { Button, Icon } from 'semantic-ui-react';

const Graph = dynamic(() => import('../src/Graph'), { ssr: false });

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

export default () => {
  return (
    <div className="App" css={{ margin: 8 }}>
      <div css={{ margin: '0 0 4px 0' }}>
        <Button
          primary
          onClick={() => {
            alert('unimplemented');
          }}
        >
          <Icon name="plus square outline" />
          <span>Node</span>
        </Button>
        <Button
          primary
          onClick={() => {
            alert('unimplemented');
          }}
        >
          <Icon name="plus square outline" />
          <span>Edge</span>
        </Button>
      </div>
      <div css={{ width: 1208, border: '4px solid' }}>
        <Graph width={1200} height={696} nodes={nodes} edges={edges} />
      </div>
    </div>
  );
};
