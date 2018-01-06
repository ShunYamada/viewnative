import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import NewsList from '../components/NewsList'
import Header from '../components/Header'

class NotificationScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText={'Notification'} />
        <View style={styles.container}>
          <NewsList />
        </View>
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
