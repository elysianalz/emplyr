import React from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default class WorkEditProfile extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };

  handlePress(){
    return null;
  }

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Text>Profile Description</Text>
          <TextInput/>
          <Button title="Submit" onPress={() => this.handlePress()}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});