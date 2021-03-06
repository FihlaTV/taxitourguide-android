/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import Main from './components/main';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class App extends Component<{}> {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
          <Main/>
        </Provider>
    );
  }
}
