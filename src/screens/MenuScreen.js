import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const menuItems = [
  {
    id: '1',
    title: 'Nasi Goreng',
    description: 'Nasi goreng dengan bumbu khas',
    image: '#',
    price: '20000'
  },
  {
    id: '2',
    title: 'Ayam Bakar',
    description: 'Ayam bakar dengan sambal terasi',
    image: '#',
    price: '25000'
  },
];

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ItemDetail', { item })}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default MenuScreen;
