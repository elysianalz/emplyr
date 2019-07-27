import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class EmployCreateJob extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <Text>Job Title</Text>
          <TextInput/>
        </View>
        <View style={styles.block}>
          <Text>Job Description</Text>
          <TextInput/>
        </View>
        <View style={styles.block}>
          <Text>Reward</Text>
          <TextInput/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  block: {
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 20,
  },
});