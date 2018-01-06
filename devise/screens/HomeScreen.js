import React from 'react';
import {
  WebView,
  View
} from 'react-native';
import Header from '../components/Header';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText={'Home'} />
        <WebView
          source={{uri: 'https://gociao.com/'}}
        />
      </View>
    );
  }
}

export default HomeScreen;
