import React from 'react';
import { View, Dimensions, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { mainStack } from 'drinksandco/src/config/navigator';
import styles from './styles';

const { width } = Dimensions.get('window');

export function DetailItem({ item }) {
  return (
    <>
      <Image
        style={styles.productPic}
        source={{
          uri: item.attributes.image_url,
        }}
        resizeMode="contain"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.attributes.name}</Text>
        <Text
          style={styles.price}>{`€${item.attributes.current_unit_price}`}</Text>
        <Text style={styles.appellation}>
          <Text>{item.attributes.appellation}</Text>
          {item.attributes.vintage && (
            <Text>{` - ${item.attributes.vintage}`}</Text>
          )}
        </Text>
        <Text style={styles.description}>{item.attributes.description}</Text>
        <Text>{item.attributes.user_ratings}</Text>
      </View>
    </>
  );
}

export default DetailItem;
