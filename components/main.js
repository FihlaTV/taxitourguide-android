import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SpotList from '../containers/spot_list'

export default class Main extends Component<{}> {
  render() {
    return (
        <View>
        <SpotList/>
        </View>
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
  test: {
    color: '#000000'
  }
});
