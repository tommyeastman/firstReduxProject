import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { CardSection } from './common';

class ListItem extends Component {
  render() {
    //const { titleStyle } = styles;

    return (
      <View>
        <Text>{this.props.itemPassed.title}</Text>
        <Text>{this.props.itemPassed.description}</Text>
      </View>
    );
  }
}

/*
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};*/

export default ListItem;
