import React, { Component } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSpots } from '../actions/index';

class SearchBar extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  handleSubmit = () => {
    alert(`test: `+this.state.term);
  }

	render() {
		return (
				 <View>
          <TextInput
            placeholder="Looking for a place?"
            value={this.state.term}
            onChangeText={(term) => this.setState({term})}
            onSubmitEditing={ this.handleSubmit }
          />    
         </View>
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