import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

class FlatListBasics extends Component {
  _keyExtractor = (item => item.key);
  
  render() {
    return (
      <View>
        <FlatList
          data={[
            {key: 'Devin', value: 111},
            {key: 'Jackson', value: 222},
            {key: 'James', value: 333},
            {key: 'Joel', value: 444},
            {key: 'John', value: 555},
          ]}
          _keyExtractor = {this._keyExtractor} 
          renderItem={({item}) => <Text> {item.value} </Text>}
        />
      </View>
    );
  }
}

/*
const styles = {
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
};*/

export default FlatListBasics;
