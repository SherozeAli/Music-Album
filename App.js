/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header headerText="A l b u m s" />
      <AlbumList />
    </View>
  );
};

export default App;

//http://rallycoding.herokuapp.com/api/music_albums
