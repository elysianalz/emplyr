import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, AsyncStorage} from 'react-native';

export default class WorkEditProfile extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };

  constructor(props){
    super(props);
    this.state = {
      user: this.get('id'),
      description: "",
    }
  }

  async _sh(key){
    return await AsyncStorage.getItem(key);
  }

  get(key) {
    let shItem = this._sh(key).then(item => {
      this.getUserInformation(item);
    })
    .catch(error => console.error(error));
  }

  getUserInformation(id){

  
    fetch('http://192.168.0.16:3000/api/profile?id='+id)

    .then((response) => response.json())

    .then((responseJson) => {
      this.setState({
        user: responseJson,
      });
    })

    .catch(error => console.error(error));

  }

  handlePress(){

    fetch('http://192.168.0.16:3000/api/profile?id='+ this.state.user.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: this.state.description,
      }),
    })

    .then(res => res.json())

    .then(response => {
      console.log('Success:', JSON.stringify(response))
      this.props.navigation.navigate('wProfile');
    })

    .catch(error => console.log('Error!:', error));

  }

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Text>Profile Description</Text>
          <TextInput 
            value={this.state.description} 
            onChangeText={(text) => this.setState({description: text})} 
          />
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