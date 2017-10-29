import React, { Component } from 'react';
import {
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class SpotList extends Component<{}> {
	render() {
		return (
				 <FlatList
          data={this.props.spots}
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


function mapStateToProps(state) {
	return {
	  spots: state.spots
	};
}

export default connect(mapStateToProps)(SpotList);