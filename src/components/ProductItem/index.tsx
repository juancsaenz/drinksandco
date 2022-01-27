import React from 'react';
import { View, Dimensions, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { mainStack } from 'drinksandco/src/config/navigator';
import styles from './styles';

const { width } = Dimensions.get('window');

export function ProductItem({ item }) {
  const navigation = useNavigation();
  const dimensionsStyle = {
    width: width / 3 - 20,
    height: width / 3 + 30 - 8,
    padding: 0,
  };

  return (
    <View style={styles.view}>
      <Pressable
        onPress={() =>
          navigation.push(mainStack.details, { contentId: item.id })
        }>
        <View style={styles.container}>
          <View style={dimensionsStyle}>
            <Image
              style={[styles.moviePic, dimensionsStyle]}
              source={{
                uri: item.attributes.image_url,
              }}
              resizeMode="contain"
            />
            <Text
              style={[styles.contentText, { width: dimensionsStyle.width }]}
              numberOfLines={2}>
              <Text>{item.attributes.name}</Text>
              {item.attributes.vintage && (
                <Text>{` - ${item.attributes.vintage}`}</Text>
              )}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ProductItem;
