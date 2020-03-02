import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
const Header = ({headerText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{headerText} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(60),
    paddingTop: verticalScale(10),
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(13),
    },
    shadowOpacity: 0.2,
  },
  headerText: {
    fontSize: verticalScale(20),
    marginVertical: verticalScale(15),
    fontWeight: 'bold',
  },
});
export default Header;
