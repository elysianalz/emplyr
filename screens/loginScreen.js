import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.homeTitle}>Emplyr.</Text>
        <TouchableOpacity style = {styles.facebookLoginBtn} onPress = {()=> this.props.navigation.navigate('Home')}>
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