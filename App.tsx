import React from 'react';
import MainStack from './src/navigation/MainStack';
import { Provider } from 'react-redux';
import { store } from './src/store';

function App(): React.JSX.Element {

  return (
      <Provider store={store}>
        <MainStack></MainStack>
      </Provider>
  );
}



export default App;
