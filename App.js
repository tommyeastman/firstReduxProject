import React from 'react';
import { View, Text } from 'react-native';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import reducers from './src/reducers';
import { Header } from './src/components/common';
//import LibraryList from './src/components/LibraryList';
import SectionListBasics from './src/components/SectionListBasics';

class App extends React.Component {
  render() {
    return (
        <View>
          <Header headerText={'Tech Stack'} />
          <Text>sometext</Text>
          <SectionListBasics />
        </View>
    );
  }
}

export default App;
