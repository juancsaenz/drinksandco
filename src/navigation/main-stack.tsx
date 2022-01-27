import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { mainStack } from 'drinksandco/src/config/navigator';
import { DetailsScreen } from 'drinksandco/src/screens/DetailsScreen';
import { HomeScreen } from 'drinksandco/src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName={mainStack.home}>
      <Stack.Screen name={mainStack.home} component={HomeScreen} />
      <Stack.Screen name={mainStack.details} component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
