import React from 'react';
import { useSelector } from 'react-redux';
import { pick } from 'ramda';
import GraphOperator from './GraphOperator';
import GraphViewer from './GraphViewer';

export default () => {
  const { nodes, edges } = useSelector(pick(['nodes', 'edges']));

  return (
    <div className="App" css={{ margin: 8 }}>
      <GraphOperator />
      <div css={{ marginBottom: 4 }} />
      <GraphViewer width={1200} height={696} nodes={nodes} edges={edges} />
    </div>
  );
};
