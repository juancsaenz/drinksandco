import React, { memo } from 'react';
import { View } from 'react-native';
import { ProductsList } from 'drinksandco/src/containers/ProductsList';
import styles from 'drinksandco/src/components/ProductItem/styles';

export const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <ProductsList />
    </View>
  );
};

export default memo(HomeScreen);
