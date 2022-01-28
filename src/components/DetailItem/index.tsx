import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

interface Product {
  attributes?: {
    image_url: string;
    name: string;
    current_unit_price: string;
    appellation: string;
    vintage: string;
    description: string;
    user_ratings: string;
  };
  id?: string;
  technical_details?: {};
  type?: string;
  user_ratings?: string;
}

interface Props {
  item: Product;
}
export function DetailItem({ item }: Props) {
  return (
    <>
      <Image
        style={styles.productPic}
        source={{
          uri: item.attributes!.image_url,
        }}
        resizeMode="contain"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.attributes!.name}</Text>
        <Text style={styles.price}>{`€${
          item.attributes!.current_unit_price
        }`}</Text>
        <Text style={styles.appellation}>
          <Text>{item.attributes!.appellation}</Text>
          {item.attributes!.vintage && (
            <Text>{` - ${item.attributes!.vintage}`}</Text>
          )}
        </Text>
        <Text style={styles.description}>{item.attributes!.description}</Text>
        <Text>{item.attributes!.user_ratings}</Text>
      </View>
    </>
  );
}

export default DetailItem;
