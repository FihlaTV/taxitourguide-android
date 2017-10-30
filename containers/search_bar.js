import React, { Component } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Image
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
         <Image
          source={require('../images/headerbg.jpg')}
          style={styles.headerbg}>
             <View style={styles.header}>
              <Text style={styles.title}>TAXI TOUR GUIDE</Text>
              <Text style={styles.sub}>Reggie's List</Text>
              <TextInput
                placeholder="Looking for a place?"
                value={this.state.term}
                onChangeText={(term) => this.setState({term})}
                onSubmitEditing={ this.handleSubmit }
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.input}
              />
            </View>
          </Image>
			)
	}
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:'transparent',
    paddingBottom: 10,
    paddingTop: 7,
    paddingLeft: 10,
    paddingRight: 10
  },
  headerbg: {
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 28
  },
  input: {
    color: '#000000',
    backgroundColor: '#ffffff',
    marginTop: 10,
    textAlign: 'center'
  },
  sub: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18
  }
});



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchSpots, fetchSpots }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);