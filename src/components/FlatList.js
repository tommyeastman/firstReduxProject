//render list of libraries to user
import React, { Component } from 'react';
  import { FlatList, Text, View } from 'react-native';
  //import { View } from 'react-native';
import { connect } from 'react-redux';
//import ListItem from './ListItem';

class LibraryList extends Component {

  render() {
    //console.log(this.props.librariesPassed);
    console.log(this.props.librariesPassed[0].title);
    return (
      <View>
      <FlatList
      data={this.props.librariesPassed[0]}
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
