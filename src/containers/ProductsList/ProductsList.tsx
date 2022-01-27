import React from 'react';
import { View, FlatList } from 'react-native';
import { useGetProductsQuery } from 'drinksandco/src/redux/features/products/products-api-slice';
import ProductItem from 'drinksandco/src/components/ProductItem';

import styles from './styles';

function ProductsList() {
  const { data } = useGetProductsQuery();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={3}
        extraData={data}
        renderItem={({ item }) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default ProductsList;
