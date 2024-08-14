import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>React Navigation</Text>
      <Text style={styles.textStyle}>This is UserScreen</Text>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 28,
    color: 'black',
  },
});
