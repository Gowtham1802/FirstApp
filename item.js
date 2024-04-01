import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

const Item = () => {
  const [items, setItems] = useState([
    {name: 'item 1'},
    {name: 'item 2'},
    {name: 'item 3'},
    {name: 'item 4'},
    {name: 'item 5'},
    {name: 'item 6'},
    {name: 'item 7'},
    {name: 'item 8'},
    {name: 'item 9'},
    {name: 'item 10'},
  ]);

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // setItems([...items, {key: 11, item: 'item 11'}]);
    setRefreshing(false);
  };

  return (
    <FlatList
      horizontal
      inverted
      keyExtractor={(item, index) => index.toString()}
      data={items}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }>
    //   <View style={styles.body}>
    //     {items.map(Object => {
    //       return (
    //         <View style={styles.item} key={Object.key}>
    //           <Text style={styles.title}>{Object.item}</Text>
    //         </View>
    //       );
    //     })}
    //   </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 15,
    // borderColor: 'black',
    // borderRadius: 15,
    // margin: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Item;
