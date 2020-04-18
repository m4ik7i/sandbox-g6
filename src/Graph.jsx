import React, { useEffect, useRef, useState } from 'react';
import G6 from '@antv/g6';

export default ({ width, height, nodes, edges }) => {
  const divRef = useRef(null);

  const [graph, setGraph] = useState(null);
  const [rendered, isRendered] = useState(false);

  useEffect(() => {
    if (!graph) {
      const width = divRef.current.scrollWidth;
      const height = divRef.current.scrollHeight;

      const graph = new G6.Graph({
        container: divRef.current,
        width,
        height,
        modes: {
          default: ['drag-canvas', 'zoom-canvas'],
        },
        layout: {
          type: 'force',
          preventOverlap: true,
          nodeStrength: -100,
          linkDistance: 100,
          center: [width / 2, height / 2],
        },
      });
      setGraph(graph);
      return;
    }

    if (!rendered) {
      graph.render();

      graph.on('node:dragstart', (e) => {
        graph.layout();
        refreshDragedNodePosition(e);
      });
      graph.on('node:drag', (e) => {
        graph.get('layoutController').layoutMethod.execute();
        refreshDragedNodePosition(e);
      });
      graph.on('node:dragend', (e) => {
        e.item.get('model').fx = null;
        e.item.get('model').fy = null;
      });
      const refreshDragedNodePosition = (e) => {
        const model = e.item.get('model');
        model.fx = e.x;
        model.fy = e.y;
      };

      isRendered(true);
    }

    graph.changeData({
      nodes: nodes.map((node) => ({
        ...node,
        size: 32,
        color: '#1F85CE',
        style: {
          fill: '#1F85CE',
        },
      })),
      edges: edges.map((edge) => ({ ...edge, size: 4 })),
    });
  }, [nodes, edges, graph]);

  return <div ref={divRef} css={{ width, height }} />;
};
