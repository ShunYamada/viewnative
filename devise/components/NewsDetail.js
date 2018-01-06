import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';

const NewsDetail = ({ news }) => {
  const { title, artist } = news;
  const {
    contentStyle,
    textStyle
  } = styles;

  return (
    <Card>
      <View style={contentStyle}>
        <Text style={textStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </Card>
  );
};

const styles = {
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textStyle: {
    fontSize: 18,
    marginBottom: 5
  }
};

export default NewsDetail;
