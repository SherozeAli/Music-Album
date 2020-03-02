import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: moderateScale(5),
    marginRight: moderateScale(5),
    borderColor: '#007aff',
  },
  text: {
    fontWeight: 'bold',
    fontSize: verticalScale(16),
    alignSelf: 'center',
    color: '#007aff',
    paddingBottom: moderateScale(5),
    paddingTop: moderateScale(5),
  },
});
export default Button;
