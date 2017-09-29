import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  displayDetails() {
    const { expanded, itemPassed } = this.props;

    if (expanded) {
    return (
      <View>
        <CardSection>
          <Text style={styles.description}>{itemPassed.description}</Text>
        </CardSection>
      </View>
    );
  }
  }

  render() {
    const { id, title } = this.props.itemPassed;

    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
          <View>
            <CardSection>
              <Text style={styles.title}>{title}</Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
        {this.displayDetails()}
      </View>
    );
  }
}

const styles = {
  title: {
    fontSize: 24,
    paddingLeft: 15
  },
  description: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStatetoProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.itemPassed.id; 
  return { expanded };
};

export default connect(mapStatetoProps, actions)(ListItem);
