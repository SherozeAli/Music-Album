import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, Linking} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
  const {title, artist, image, url} = album;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnail_image_container}>
          <Image style={styles.thumbnail_image_style} source={{uri: image}} />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageContainer} source={{uri: image}} />
      </CardSection>
      <CardSection>
        <Button
          text="Buy Now"
          onPress={() => {
            Linking.openURL(url);
          }}
        />
      </CardSection>
    </Card>
  );
};
const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnail_image_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
  },
  thumbnail_image_style: {
    width: moderateScale(50),
    height: verticalScale(50),
    backgroundColor: 'red',
  },
  headerText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  imageContainer: {
    width: null,
    height: verticalScale(400),
    flex: 1,
  },
});
export default AlbumDetail;
