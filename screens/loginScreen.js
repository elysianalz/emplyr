import React from 'react';
import { Facebook } from 'expo';
import { StyleSheet, Text, View, TouchableOpacity, Alert, AsyncStorage, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    header: null,
  }

  constructor(props){
    super(props);
    this.state = {
      user: this.get('id'),
    };
  }

  // store a global value
  store(key, value){
    AsyncStorage.setItem(key, value);
  };

  // storage helper - async storage wrapper
  async _sh(key){
    return await AsyncStorage.getItem(key);
  }

  // gets a stored item from async storage
  get(key) {
    let shItem = this._sh(key).then(item => {
      this.getUserInformation(item);
    })
    .catch(error => console.error(error));
  }

  // retrieve user information based on .get key
  getUserInformation(id, bool){

    fetch('http://192.168.0.16:3000/api/profile?id='+id)

    .then((response) => response.json())

    .then((responseJson) => {
      this.setState({
        user: responseJson,
      });
    })

    .catch(error => console.error(error));

  }

  // add a new user to the db
  createUser(id, name, picture){
    fetch('http://192.168.0.16:3000/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        name: name,
        picture: picture,
      }),
    })
    .then(res => res.json())

    .then(response => console.log('Success:', JSON.stringify(response)))

    .catch(error => console.log('Error:', error));
  }

  // procede as currently logged in user
  procede(){
    this.props.navigation.navigate('Home');
  }

  // facebook login
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
       
        fetch(`https://graph.facebook.com/me?access_token=${token}&fields=picture.type(large),id,name`)

        .then((response) => response.json())

        .then((responseJson) => {
          this.store('id', responseJson.id);

          // search if user exist befor user creation
          fetch('http://192.168.0.16:3000/api/profile?id='+responseJson.id)
          .then((res) => res.json())
          .then((resJson) => {
            resJson ? null : 
            this.createUser(responseJson.id, responseJson.name, JSON.stringify(responseJson.picture));
          })
          .catch(error => console.error(error));

          // navigate to home page
          this.props.navigation.navigate('Home');

        })

        .catch((error) => {
          console.log(error);
        });
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }

  }

  render() {

    const {navigate} = this.props.navigation;
    let picture = "";
    this.state.user ? picture = JSON.parse(this.state.user.picture) : null
    return (

      <View style={styles.homeScreen}>

        <Text style={styles.homeTitle}>Emplyr.</Text>

        {this.state.user ?

          // procede with profile 
          <TouchableOpacity style={styles.facebookLoginBtn} onPress={() => this.procede()}>
            <Image 
              style={{width: 50, height: 50}} 
              source={{uri: picture.data.url}}
            />
            <Text style={styles.whiteText}>login as {this.state.user.name}</Text>
          </TouchableOpacity>

        :

          // inital login with facebook
          <TouchableOpacity style = {styles.facebookLoginBtn} onPress = {()=> this.logIn()}>
            <AntDesign name="facebook-square" size={40} color="white" />
            <Text style={styles.whiteText}>Login with Facebook</Text>
          </TouchableOpacity>

        }
        
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