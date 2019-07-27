import React from 'react';
import { Facebook } from 'expo';
import { StyleSheet, Text, View, TouchableOpacity, Alert, AsyncStorage} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    header: null,
  }

  constructor(props){
    super(props);
    this.state = {
      userInfo: null,
    };
  }

  store(key, value){
    AsyncStorage.setItem(key, value);
  };

  createUser(id, name, picture){
    fetch('http://localhost/api/profile', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        name: name,
        picture: picture,
      }),
    });
  }

  async logIn() {

    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('2866733146885903', {
        permissions: ['public_profile'],
      });

      if (type === 'success') {
       
        fetch(`https://graph.facebook.com/me?access_token=${token}`)

        .then((response) => response.json())

        .then((responseJson) => {
          this.store('user', responseJson.name);
          this.store('id', responseJson.id);
          this.props.navigation.navigate('Home');
        })

        .catch((error) => {
          console.log(error);
        });

      } else {
        // type === 'cancel'
      }

    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }

  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.homeTitle}>Emplyr.</Text>
        <TouchableOpacity style = {styles.facebookLoginBtn} onPress = {()=> this.logIn()}>
          <AntDesign name="facebook-square" size={40} color="white" />
          <Text style={styles.whiteText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   homeScreen: {
    flex: 1,
    backgroundColor: '#5595fc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeTitle: {
    fontSize: 26,
    color: 'white',
    marginBottom: 14,
    width: 230,
  },

  facebookLoginBtn: {
    backgroundColor: "#3b5998",
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 230, 
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  }, 

  whiteText: {
    color: 'white',
  },

});