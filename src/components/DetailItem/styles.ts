import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  productPic: {
    height: height / 3,
    width,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  detailsContainer: {
    margin: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  price: {
    marginVertical: 15,
  },
  appellation: {
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'justify',
  },
});
