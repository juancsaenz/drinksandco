import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigation/main-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './redux/store';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

function App() {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <MainStack />
        </SafeAreaProvider>
      </NavigationContainer>
    // </Provider>
  );
}

export default AppWrapper;
