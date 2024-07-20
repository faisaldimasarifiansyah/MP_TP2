import React, { useState, useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { CartContext } from './CartContext';

const ItemDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>Rp. {parseInt(item.price).toLocaleString('id-ID')}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Add to Cart" onPress={() => addToCart(item)} /></View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e91e63',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default ItemDetailScreen;