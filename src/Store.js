import { configureStore, createReducer, getDefaultMiddleware } from '@reduxjs/toolkit';
import { append } from 'ramda';

export default class Store {
  static _instance;

  static instance() {
    if (!this._instance) {
      this._instance = configureStore({
        reducer,
        middleware: [...getDefaultMiddleware()],
        devTools: true,
      });
    }
    return this._instance;
  }
}

export const initialState = {
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
    {
      id: 'node-4',
    },
    {
      id: 'node-5',
    },
    {
      id: 'node-6',
    },
    {
      id: 'node-7',
    },
  ],
  edges: [
    {
      source: 'node-1',
      target: 'node-2',
    },
    {
      source: 'node-2',
      target: 'node-3',
    },
    {
      source: 'node-3',
      target: 'node-4',
    },
    {
      source: 'node-2',
      target: 'node-5',
    },
    {
      source: 'node-3',
      target: 'node-6',
    },
    {
      source: 'node-6',
      target: 'node-7',
    },
  ],
};

export const reducer = createReducer(initialState, {
  reset: (_state, _action) => {
    return initialState;
  },
  'nodes/add': (state, _action) => {
    const { nodes } = state;
    return {
      ...state,
      nodes: append({
        id: Math.random().toString(36).substring(7),
      })(nodes),
    };
  },
  'edges/add': (state, _action) => {
    // unimplemented
    return state;
  },
});
