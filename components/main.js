import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  TabNavigator
} from 'react-navigation';

import SpotList from '../containers/spot_list';
import Loading from '../components/loading'
import SeachBar from '../containers/search_bar';

export default class Main extends Component<{}> {
  render() {
    const RootTabs = TabNavigator({
      Spots: {
        screen: SpotList,

      },
      Drivers: {
        screen: Loading,
      }
    },{
       tabBarOptions: {
        activeTintColor: '#000000',
        inactiveTintColor: 'gray',
        style: {
        backgroundColor: '#F5FCFF'
        },
        indicatorStyle: {
          backgroundColor: 'green'
        },
      }
    });

    return (
        <View style={styles.container}>
        <SeachBar/>
        <RootTabs/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  }
});