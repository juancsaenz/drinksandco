import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  view: {
    width: width - 30,
    margin: 5,
  },
  productPicture: {
    zIndex: 1,
    borderRadius: 5,
    backgroundColor: '#FFF',
    width: 80,
    height: 150,
  },
  contentText: {
    flexWrap: 'wrap',
    color: '#7F7F7F',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
  },
  description: {
    margin: 15,
    width: width / 1.5,
  },
  price: {
    color: '#046be8',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
