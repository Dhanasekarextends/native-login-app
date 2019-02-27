import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../sections/header'

export default class Home extends React.Component {
  render() {
    return (
      <View>
      <Header />
        <Text style={styles.container}>Hello world!! GGWP!! final check</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
