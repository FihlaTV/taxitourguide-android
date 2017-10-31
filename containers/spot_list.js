import React, { Component } from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSpots } from '../actions/index';
import Spot from '../components/spot';

class SpotList extends Component<{}> {

  _keyExtractor = (item, index) => item.id;

  componentDidMount() {
    this.props.fetchSpots(1);
  }

  static navigationOptions = {
    tabBarLabel: 'TOURIST SPOTS',
  }

  renderList() {
    if(this.props.spots.length >= 1) {
      return (
         <FlatList
          data={this.props.spots}
          style={styles.theList}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <Spot item={item}/>}
         />
      );
    } else {
      return (
        <ActivityIndicator style={styles.theList} size='large'></ActivityIndicator>
        );
    }
    
  }

	render() {
		return (
      <View style={this.props.spots.length >= 1 ? styles.theList : styles.theLoader}>
				 {this.renderList()}
      </View>
			)
	}
}

const styles = StyleSheet.create({
  theList: {
    flex:1
  },
  theLoader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSpots }, dispatch)
}

function mapStateToProps(state) {
	return {
	  spots: state.spots
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(SpotList);