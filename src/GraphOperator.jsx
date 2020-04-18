import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';

export default () => {
  const dispatch = useDispatch();

  return (
    <div className="GraphOperator">
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
