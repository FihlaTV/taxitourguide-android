import React, { Component } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchSpots, fetchSpots } from '../actions/index';

class SearchBar extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  handleSubmit = () => {
    if(this.state.term !== ''){
      this.props.searchSpots(this.state.term);
    } else {
      this.props.fetchSpots(1);
    }
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


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchSpots, fetchSpots }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);