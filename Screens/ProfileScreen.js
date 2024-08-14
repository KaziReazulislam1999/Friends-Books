import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileScreen = props => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>Welcome</Text>
      <Text style={styles.textStyle}>{props.route.params.name}</Text>
      <Button
        title="User"
        onPress={() => {
          props.navigation.navigate('User');
        }}
      />
    </View>
  );
};

export default ProfileScreen;

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
