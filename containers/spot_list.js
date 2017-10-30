import React, { Component } from 'react';
import {
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSpots } from '../actions/index';
import Loading from '../components/Loading'

class SpotList extends Component<{}> {

  _keyExtractor = (item, index) => item.id;

  componentDidMount() {
    this.props.fetchSpots(1);
  }

	render() {

		return (
				 <FlatList
          data={this.props.spots}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <Text style={styles.spot}>{item.title.rendered}</Text>}
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
  return bindActionCreators({ fetchSpots }, dispatch)
}

function mapStateToProps(state) {
	return {
	  spots: state.spots
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(SpotList);