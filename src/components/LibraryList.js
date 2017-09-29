//render list of libraries to user
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    keyExtractor = (item => item.id);

renderItem({ item }) {
  //console.log(item.title);
  return (
    <ListItem
    itemPassed={item}
    />
  );
}

  render() {
    //console.log(this.props.librariesPassed);
    return (
      <View style={{ flex: 1 }}>
      <FlatList
      data={this.props.librariesPassed}
      keyExtractor={this.keyExtractor}
      renderItem={this.renderItem}
      />
      </View>
    );
  }
}


const mapStatetoProps = (state) => (
  { librariesPassed: state.libraries }
);

export default connect(mapStatetoProps)(LibraryList);
