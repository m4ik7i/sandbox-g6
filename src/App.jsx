import React from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { pick } from 'ramda';

const Graph = dynamic(() => import('../src/Graph'), { ssr: false });

export default () => {
  const { nodes, edges } = useSelector(pick(['nodes', 'edges']));

  const dispatch = useDispatch();

  return (
    <div className="App" css={{ margin: 8 }}>
      <div css={{ margin: '0 0 4px 0' }}>
        <Button
          primary
          onClick={() => {
            dispatch({ type: 'nodes/add' });
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
