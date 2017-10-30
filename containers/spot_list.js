import React, { Component } from 'react';
import {
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSpot } from '../actions/index';

class SpotList extends Component<{}> {

  _keyExtractor = (item, index) => item.title;

  componentDidMount() {
    this.props.fetchSpot(1);
  }

	render() {
		return (
				 <FlatList
          data={this.props.spots}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <Text style={styles.spot}>{item.title}</Text>}
     		 />
			)
	}
}

const styles = StyleSheet.create({
  spot: {
    color: '#000000'
  }
});


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSpot }, dispatch)
}

export default connect(null, mapDispatchToProps)(SpotList);