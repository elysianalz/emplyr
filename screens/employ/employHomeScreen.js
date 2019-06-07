import React from 'react';
import { StyleSheet, View} from 'react-native';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';

export default class EmployHomeScreen extends React.Component{
  static navigationOptions = {
    header: null,
  };
  render(){
    const {navigate} = this.props.navigation; 
    return (
      <View style={styles.profileContainer}>

        <AntDesign name="pluscircleo" size={40} color="#5595fc" onPress = {()=> this.props.navigation.navigate('CreateJob')} />
        
        <Entypo name="news" size={40} color="#5595fc" onPress = {()=> this.props.navigation.navigate('CurrentAds')} />
      
        <Feather name="users" size={40} color="#5595fc" onPress = {()=> this.props.navigation.navigate('Candidates')} />

        <AntDesign name="clockcircleo" size={40} color="#5595fc" onPress = {() => this.props.navigation.navigate('PendingJobs')}/>
         
        <AntDesign name="checkcircleo" size={40} color="#5595fc" onPress = {() => this.props.navigation.navigate('eCompletedJobs')}/>
      
        <AntDesign name="setting" size={44} color="#5595fc" onPress = {() => this.props.navigation.navigate('eSettings')}/>
      
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});