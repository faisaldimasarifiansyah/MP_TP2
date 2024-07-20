import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { CartContext } from './CartContext';

const CartScreen = ({ navigation }) => {
  const { cartItems, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + parseInt(item.price), 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>Rp. {parseInt(item.price).toLocaleString('id-ID')}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: Rp. {total.toLocaleString('id-ID')}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Checkout" onPress={clearCart} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="View History" onPress={() => navigation.navigate('History')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default CartScreen;