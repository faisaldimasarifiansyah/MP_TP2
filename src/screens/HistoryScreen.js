import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CartContext } from './CartContext';

const HistoryScreen = () => {
  const { history } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const total = item.items.reduce((acc, historyItem) => acc + parseInt(historyItem.price), 0);
          return (
            <View style={styles.historyContainer}>
              <Text style={styles.date}>{item.date.toLocaleString()}</Text>
              {item.items.map((historyItem, index) => (
                <View key={index} style={styles.itemContainer}>
                  <Text style={styles.itemTitle}>{historyItem.title}</Text>
                  <Text style={styles.itemPrice}>Rp. {parseInt(historyItem.price).toLocaleString('id-ID')}</Text>
                </View>
              ))}
              <Text style={styles.total}>Total: Rp. {total.toLocaleString('id-ID')}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  historyContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default HistoryScreen;