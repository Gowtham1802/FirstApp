import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Count = () => {
  const [name, setName] = useState('I am Gowtham');
  const [session, setSession] = useState({
    text: 'Completed Full Stack Development Course at Skill Safari',
    title: 'state',
  });
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName('Gowtham');
    setSession({
      text: 'an Mobile Application Developer at Saarc Masts Tech',
      title: 'state',
    });
    setCurrent(false);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>I am {session.text}</Text>
      <Text style={styles.title}>{current ? 'Then' : 'Now'}</Text>
      <Button title="Work Details" onPress={onClickHandler}></Button>
      {/* <Button title="Work" onPress={onClickHandler}></Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'normal',
    margin: 10,
  },
  Button: {
    color: 'green',
  },
});

export default Count;
