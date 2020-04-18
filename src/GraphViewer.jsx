import React from 'react';
import dynamic from 'next/dynamic';
const Graph = dynamic(() => import('../src/Graph'), { ssr: false });

export default ({ width, height, nodes, edges }) => (
  <div className="GraphViewer">
    <div css={{ width: width + 8, border: '4px solid' }}>
      <Graph width={width} height={height} nodes={nodes} edges={edges} />
    </div>
  </div>
);
