import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const CardSection = props => {
  return <View style={styles.container}>{props.children}</View>;
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: moderateScale(5),
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderColor: '#ddd',
  },
});
export default CardSection;
