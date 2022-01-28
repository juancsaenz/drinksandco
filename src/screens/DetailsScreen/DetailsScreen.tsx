import React, { memo } from 'react';
import { View } from 'react-native';
import { ProductDetails } from 'drinksandco/src/containers/ProductDetails';

interface Props {
  route: { params: { productId: string } };
}
export const DetailsScreen = ({ route }: Props) => {
  console.log('route', route);
  const { productId } = route.params || {};

  return (
    <View>
      <ProductDetails productId={productId} />
    </View>
  );
};

export default memo(DetailsScreen);
