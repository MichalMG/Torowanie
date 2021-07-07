import React from 'react';

const reducerContext = React.createContext({
  state: {},
  dispatch: () => {}
})

export default reducerContext;