import React from 'react';
import { View, Text } from 'react-native';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import reducers from './src/reducers';
import { Header } from './src/components/common';
//import LibraryList from './src/components/LibraryList';
import FlatList from './src/components/FlatList';

class App extends React.Component {
  render() {
    return (
        <View>
          <Header headerText={'Tech Stack'} />
          <Text>sometext</Text>
          <FlatList />
        </View>
    );
  }
}

export default App;
