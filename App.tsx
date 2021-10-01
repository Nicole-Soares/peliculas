import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavegacion from './src/navegacion/StackNavegacion';
import AppProvider from './src/AppContext/AppContext';
export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <StackNavegacion />
      </AppProvider>
    </NavigationContainer>
  );
}
