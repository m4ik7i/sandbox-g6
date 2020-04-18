import React, { useEffect, useRef, useState } from 'react';
import G6 from '@antv/g6';

export default ({ width, height, nodes, edges }) => {
  const containerRef = useRef(null);

  const [graph, setGraph] = useState();

  useEffect(() => {
    if (!graph) {
      const width = containerRef.current.scrollWidth;
      const height = containerRef.current.scrollHeight;

      setGraph(
        new G6.Graph({
          container: containerRef.current,
          width,
          height,
          modes: {
            default: ['drag-canvas', 'drag-node'],
          },
          layout: {
            type: 'force',
            preventOverlap: true,
            nodeStrength: -100,
            linkDistance: 100,
            center: [width / 2, height / 2],
          },
        })
      );
      return;
    }

    graph.data({
      nodes: nodes.map((node) => ({
        ...node,
        size: 32,
        color: 'green',
        style: {
          fill: 'green',
        },
      })),
      edges: edges.map((edge) => ({ ...edge, size: 4 })),
    });

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
  }, [nodes, edges, graph]);

  return <div ref={containerRef} css={{ width, height }} />;
};

const refreshDragedNodePosition = (e) => {
  const model = e.item.get('model');
  model.fx = e.x;
  model.fy = e.y;
};
