import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SpotList from '../containers/spot_list';
import SeachBar from '../containers/search_bar';

export default class Main extends Component<{}> {
  render() {
    return (
        <View>
        <SeachBar/>
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
