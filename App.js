import React from 'react';
import { View, Text } from 'react-native';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import reducers from './src/reducers';
import { Header } from './src/components/common';
//import LibraryList from './src/components/LibraryList';
import FlatListBasics from './src/components/FlatListBasics';

class App extends React.Component {
  render() {
    return (
        <View>
          <Header headerText={'Tech Stack'} />
          <Text>sometext</Text>
          <FlatListBasics />
        </View>
    );
  }
}

export default App;
