import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  renderDescription() {
    console.log('hello');
  }

  render() {
    //console.log(this.props.selectLibrary);

    return (
      <CardSection>
        <TouchableWithoutFeedback onPress={this.renderDescription}>
          <View>
            <Text style={styles.title}>{this.props.itemPassed.title}</Text>
          </View>
        </TouchableWithoutFeedback>
      </CardSection>

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

export default connect(null, actions)(ListItem);
