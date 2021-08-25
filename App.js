import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/router';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';
export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <NavigationContainer>
        <MyStack />
        {/* <Playmusic/> */}
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}
