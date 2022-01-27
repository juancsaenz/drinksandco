import React, { memo } from 'react';
import { View } from 'react-native';
import { ProductsList } from 'drinksandco/src/containers/ProductsList';

export const HomeScreen = () => {
  return (
    <View>
      <ProductsList />
    </View>
  );
};

export default memo(HomeScreen);
