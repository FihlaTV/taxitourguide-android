/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Main from './components/main';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class App extends Component<{}> {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
          <Main/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
