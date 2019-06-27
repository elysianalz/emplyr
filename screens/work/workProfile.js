import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class WorkProfile extends React.Component{
  static navigationOptions = {
    title: 'Profile',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={{width: '100%', height: '50%'}} 
              source={{uri: 'https://images.unsplash.com/photo-1508673778687-0b1ffaac41c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}/>
        <View style={styles.button}>
          <Feather name="edit-2" 
                  size={45} 
                  color="white" 
                  onPress = {()=> this.props.navigation.navigate('EditProfile')} />
        </View>
        <Text style={styles.textContainer}>
          sample text lorem ipsum dolamit fucky lucky rubber ducky
          sample text lorem ipsum dolamit fucky lucky rubber ducky
          sample text lorem ipsum dolamit fucky lucky rubber ducky
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  textContainer: {
    padding: 15,
    fontSize: 16,
    color: "#606060",
  },

  button: {
    backgroundColor: "#5595fc",
    borderRadius: 50,
    padding: 10,
    marginTop: -30,
    borderColor: "white",
    borderWidth: 4,
  },
});