import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';

export default ({ width, height, nodes, edges }) => {
  const containerRef = useRef(null);

  let graph;
  useEffect(() => {
    const width = containerRef.current.scrollWidth;
    const height = containerRef.current.scrollHeight;

    graph = new G6.Graph({
      container: containerRef.current,
      width,
      height,
      modes: {
        default: ['drag-canvas', 'drag-node'],
      },
      layout: {
        type: 'force',
        preventOverlap: true,
        nodeStrength: -500,
        linkDistance: 200,
        center: [width / 2, height / 2],
      },
    });
    graph.data({ nodes, edges });
    graph.render();

    const forceLayout = graph.get('layoutController').layoutMethod;
    graph.on('node:dragstart', (e) => {
      graph.layout();
      refreshDragedNodePosition(e);
    });
    graph.on('node:drag', (e) => {
      forceLayout.execute();
      refreshDragedNodePosition(e);
    });
    graph.on('node:dragend', (e) => {
      e.item.get('model').fx = null;
      e.item.get('model').fy = null;
    });
  }, [nodes, edges]);

  return <div ref={containerRef} css={{ width, height }} />;
};

const refreshDragedNodePosition = (e) => {
  const model = e.item.get('model');
  model.fx = e.x;
  model.fy = e.y;
};
