import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { Main } from 'navigation/Main';
import { store } from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={ styles.container }>
          <Main />
        </View>
      </Provider>
    );
  }
}
