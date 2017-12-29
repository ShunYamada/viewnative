import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class NotificationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Notification</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4'
  },
  text: {
    fontSize: 16,
    lineHeight: 24
  }
});

export default NotificationScreen;