import React from 'react';
import {
  WebView
} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://gociao.com/'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default HomeScreen;