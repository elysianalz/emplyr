import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class EmploySettings extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});