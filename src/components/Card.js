import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const Card = props => {
  return <View style={styles.container}>{props.children}</View>;
};
const styles = StyleSheet.create({
  container: {
    //height: verticalScale(100),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'grey',
    borderBottomWidth: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: moderateScale(5),
    marginRight: moderateScale(5),
    marginTop: moderateScale(10),
  },
});
export default Card;
