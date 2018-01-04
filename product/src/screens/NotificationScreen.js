import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import NewsList from '../components/NewsList'

class NotificationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NewsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  },
  text: {
    fontSize: 16,
    lineHeight: 24
  }
});

export default NotificationScreen;
