import React, { memo } from 'react';
import { View } from 'react-native';
import { ProductDetails } from 'drinksandco/src/containers/ProductDetails';

export const DetailsScreen = ({ route }) => {
  console.log('route', route);
  const { productId } = route.params || {};

  return (
    <View>
      <ProductDetails productId={productId} />
    </View>
  );
};

export default memo(DetailsScreen);
