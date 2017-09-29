//render list of libraries to user
import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
//import ListItem from './ListItem';

class LibraryList extends Component {
    keyExtractor = (item => item.id);

  render() {
    console.log(this.props.librariesPassed);
    return (
      <View>
      <FlatList
      data={this.props.librariesPassed}
      keyExtractor={this.keyExtractor}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      </View>
    );
  }
}


const mapStatetoProps = (state) => (
  { librariesPassed: state.libraries }
);

export default connect(mapStatetoProps)(LibraryList);
