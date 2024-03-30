import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Style = () => {
  const [name, setName] = useState('Style Test');

  const onClickHandler = () => {
    setName('Style Test is Done!');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.button}>
        <Button title="Update Style" onPress={onClickHandler}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 15,
    borderColor: 'yellow',
    borderRadius: 15,
    margin: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'normal',
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    width: 150,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'yellow',
  },
});

export default Style;
