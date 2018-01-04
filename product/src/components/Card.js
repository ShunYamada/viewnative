import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderTopWidth: 0,
    elevation: 1,
    marginTop: 5,
    padding: 10,
    paddingBottom: 15,
  }
};

export default Card;
