import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Text style={styles.title}>{this.props.itemPassed.title}</Text>
        </CardSection>
        <CardSection>
          <Text style={styles.description}>{this.props.itemPassed.description}</Text>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  },
  description: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

export default ListItem;
