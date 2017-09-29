import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/common';
import FlatList from './src/components/FlatList';

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText={'Tech Stack'} />
          <FlatList />
        </View>
      </Provider>
    );
  }
}

export default App;
