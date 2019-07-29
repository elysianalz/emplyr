import React from 'react';
import { View, Text, StyleSheet, Image, AsyncStorage} from 'react-native';
import { StorageHelper } from '../../StorageHelper';
import { Feather } from '@expo/vector-icons';

export default class WorkProfile extends React.Component{
  
  static navigationOptions = {
    title: 'Profile',
  };

  constructor(props){
    super(props)
    this.state = {
      user: this.get('id'),
    }
  }


  // async storage wrapper
  async _sh(key){
    return await AsyncStorage.getItem(key);
  }

  // retrieve async storage item through _sh
  get(key) {
    let shItem = this._sh(key).then(item => {
      this.getUserInformation(item);
    })
    .catch(error => console.error(error));
  }

  // set user information through .get 
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

  render(){

    //navigation prop
    const {navigate} = this.props.navigation;

    //load picture and parse into json
    let picture = "";
    {this.state.user ? picture = JSON.parse(this.state.user.picture) : null}
    console.log(picture);

    return (

      // profile picture
      <View style={styles.container}>

        {this.state.user ? 
          <Image 
            style={{width: '100%', height: '50%'}} 
            source={{uri: picture.data.url}}
          />
        :
          null
        }
        
        {/* edit profile button */}
        <View style={styles.button}>
          <Feather name="edit-2" 
                  size={45} 
                  color="white" 
                  onPress = {()=> this.props.navigation.navigate('EditProfile')} />
        </View>

        {/* profile user name */}
        <Text style={styles.textContainer}>
         {this.state.user ? this.state.user.name : null}
        </Text>

        {/* profile user description */}
        <Text style={styles.textContainer}>
          {this.state.user ? this.state.user.description : "edit your profile to add a description"}
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