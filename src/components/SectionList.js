//render list of libraries to user
import React, { Component } from 'react';
  import { SectionList, Text, View } from 'react-native';
  //import { View } from 'react-native';
import { connect } from 'react-redux';
//import ListItem from './ListItem';

class LibraryList extends Component {

  render() {
    //console.log(this.props.librariesPassed);
    console.log(this.props.librariesPassed[0].title);
    console.log(this.props.librariesPassed[0].description);
    return (
      <View>
      <SectionList
      sections={this.props.librariesPassed}
      renderItem={({ item }) => <Text>{item.description}</Text>}
      renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
      />
      </View>
    );
  }
}


const mapStatetoProps = (state) => (
  { librariesPassed: state.libraries }
);

export default connect(mapStatetoProps)(LibraryList);
