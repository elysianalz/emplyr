import React from 'react';
import { StyleSheet, View} from 'react-native';
import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';

export default class WorkHomeScreen extends React.Component{
  static navigationOptions = {
    header: null,
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.profileContainer}>

        <AntDesign name="user" size={40} color="#5595fc" onPress = {()=> this.props.navigation.navigate('wProfile')} />
         
        <Feather name="edit-2" size={40} color="#5595fc" onPress = {()=> this.props.navigation.navigate('EditProfile')} />
        
        <AntDesign name="search1" size={40} color="#5595fc" onPress = {() => this.props.navigation.navigate('JobSearch')}/>
      
        <SimpleLineIcons name="bag" size={40} color="#5595fc" onPress = {() => this.props.navigation.navigate('AppliedJobs')} />

        <AntDesign name="checkcircleo" size={40} color="#5595fc" onPress = {() => this.props.navigation.navigate('wCompletedJobs')}/>

        <AntDesign name="clockcircleo" size={40} color="#5595fc" onPress = {() => this.props.navigation.navigate('wPendingJobs')}/>

        <AntDesign name="setting" size={44} color="#5595fc" onPress = {() => this.props.navigation.navigate('wSettings')}/>
      
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