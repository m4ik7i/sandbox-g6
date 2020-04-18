import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';

export default () => {
  const dispatch = useDispatch();

  const [timer, setTimer] = useState(null);

  return (
    <div className="GraphOperator">
      <Button
        primary
        onClick={() => {
          const timer = setInterval(() => {
            dispatch({ type: 'nodes/add' });
          }, 10);
          setTimer(timer);
        }}
      >
        <Icon name="play" />
        <span>Generate Graph</span>
      </Button>
      <Button
        basic
        color="black"
        onClick={() => {
          if (timer) {
            clearInterval(timer);
            setTimer(null);
          }
        }}
      >
        <Icon name="stop" />
        <span>Stop</span>
      </Button>
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
      <Button
        basic
        color="black"
        onClick={() => {
          dispatch({ type: 'reset' });
        }}
      >
        <Icon name="undo" />
        <span>Reset</span>
      </Button>
    </div>
  );
};
