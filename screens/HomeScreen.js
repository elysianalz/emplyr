import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Text} from 'react-native';
import { AntDesign, Feather, SimpleLineIcons, Entypo } from '@expo/vector-icons';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height; 

export default class WorkHomeScreen extends React.Component{
  static navigationOptions = {
    header: null,
  };
  render(){
    const {navigate} = this.props.navigation;
    
    return (
      <View style={styles.profileContainer} >
        <ScrollView horizontal={true} pagingEnabled={true}>
          
          <View style={styles.profileContainer}>
            <View style={styles.menuTitleRight}>
            <Text style={styles.whiteText}>WORK</Text>
            </View>
            <View style={styles.menuItems}>
            <AntDesign name="user" size={40} color="white" onPress = {()=> this.props.navigation.navigate('wProfile')} />
            
            <AntDesign name="search1" size={40} color="white" onPress = {() => this.props.navigation.navigate('JobSearch')}/>
          
            <SimpleLineIcons name="bag" size={40} color="white" onPress = {() => this.props.navigation.navigate('AppliedJobs')} />

            <AntDesign name="checkcircleo" size={40} color="white" onPress = {() => this.props.navigation.navigate('wCompletedJobs')}/>

            <AntDesign name="clockcircleo" size={40} color="white" onPress = {() => this.props.navigation.navigate('wPendingJobs')}/>

            <AntDesign name="setting" size={44} color="white" onPress = {() => this.props.navigation.navigate('wSettings')}/>
            </View>
          </View>

          <View style={styles.profileContainer}>
            <View style={styles.menuTitleLeft}>
            <Text style={styles.whiteText}>EMPLOY</Text>
            </View>
            <View style={styles.menuItems}>
            <AntDesign name="pluscircleo" size={40} color="white" onPress = {()=> this.props.navigation.navigate('CreateJob')} />
        
            <Entypo name="news" size={40} color="white" onPress = {()=> this.props.navigation.navigate('CurrentAds')} />
      
            <Feather name="users" size={40} color="white" onPress = {()=> this.props.navigation.navigate('Candidates')} />

            <AntDesign name="clockcircleo" size={40} color="white" onPress = {() => this.props.navigation.navigate('PendingJobs')}/>
         
            <AntDesign name="checkcircleo" size={40} color="white" onPress = {() => this.props.navigation.navigate('eCompletedJobs')}/>
      
            <AntDesign name="setting" size={44} color="white" onPress = {() => this.props.navigation.navigate('eSettings')}/>
            </View>
          </View>

        </ScrollView>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: "#5595fc",
  },
  scrollContainer: {
    flex: 1,
  },
  whiteText: {
    fontSize: 30,
    color: 'white',
  },
  menuItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: screenWidth,
  },
  menuTitleRight: {
    width: screenWidth,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 10,
    paddingRight: 10,
  },
  menuTitleLeft: {
    width: screenWidth,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 10,
    paddingLeft: 10,
  }
});