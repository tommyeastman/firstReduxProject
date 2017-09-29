import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  displayDetails(currentRow, currentDescription) {
    if (this.props.IdPassed === currentRow) {
    return (
      <View>
        <CardSection>
          <Text>{currentDescription}</Text>
        </CardSection>
      </View>
    );
  }
  }

  render() {
    const { id, title, description } = this.props.itemPassed;

    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
          <View>
            <CardSection>
              <Text style={styles.title}>{title}</Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
        {this.displayDetails(id, description)}
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

const mapStatetoProps = (state) => ({ IdPassed: state.selectedLibraryId });

export default connect(mapStatetoProps, actions)(ListItem);
