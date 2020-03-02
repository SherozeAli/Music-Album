import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
class AlbumList extends Component {
  state = {
    albums: [],
  };
  componentDidMount() {
    console.log('did mnt');
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({albums: response.data});
      });
  }
  renderAlbums() {
    return this.state.albums.map((album, id) => (
      <AlbumDetail key={id} album={album} />
    ));
  }
  render() {
    return (
      <ScrollView style={styles.container}>{this.renderAlbums()}</ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
  },
});
export default AlbumList;
