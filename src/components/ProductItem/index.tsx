import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from 'drinksandco/src/assets/img/logo.png';
import { mainStack } from 'drinksandco/src/config/navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';

interface Product {
  attributes?: {
    appellation: string;
    current_unit_price: string;
    image_url: string;
    name: string;
    original_unit_price: string;
    vintage: string;
  };
  id?: string;
  type?: string;
}

interface Props {
  item: Product;
}

export function ProductItem({ item }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.view}>
      <Pressable
        onPress={() =>
          navigation.push(mainStack.details, { productId: item.id })
        }>
        <View style={styles.item}>
          <Image
            style={styles.productPicture}
            source={{
              uri: item.attributes!.image_url,
            }}
            resizeMode="contain"
            defaultSource={Logo}
          />
          <View style={styles.description}>
            <Text style={styles.contentText} numberOfLines={2}>
              <Text>{item.attributes!.name}</Text>
              {item.attributes!.vintage && (
                <Text>{` - ${item.attributes!.vintage}`}</Text>
              )}
            </Text>
            <Text style={styles.price}>
              {`€${item.attributes!.current_unit_price}`}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ProductItem;
