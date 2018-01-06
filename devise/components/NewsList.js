import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import NewsDetail from './NewsDetail'

class NewsList extends Component {
  state = { news: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ news: response.data }));
  }

  renderNews() {
    return this.state.news.map(news =>
      <NewsDetail key={news.title} news={news} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderNews()}
      </ScrollView>
    );
  }
}

export default NewsList;
