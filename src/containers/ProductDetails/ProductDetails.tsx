import React from 'react';
import { View } from 'react-native';
import { useGetProductQuery } from 'drinksandco/src/redux/features/products/products-api-slice';
import DetailItem from 'drinksandco/src/components/DetailItem';

import styles from './styles';

interface ProductProps {
  productId: string;
}

function ProductDetails({ productId }: ProductProps) {
  const { data } = useGetProductQuery(productId);

  if (!data) {
    return null;
  }
  return (
    <View style={styles.container}>
      <DetailItem item={data} />
    </View>
  );
}

export default ProductDetails;
