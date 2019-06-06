import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons, AntDesign, Feather, Entypo, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

///////////////LOGIN SCREEN////////////////////////
class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.homeTitle}>Emplyr.</Text>
        <TextInput placeholder={'username'} style={styles.formInput}/>
        <TextInput placeholder={'password'} style={styles.formInput}/>
        <TouchableOpacity onPress = {() => this.props.navigation.navigate("Choice")}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

///////////////////CHOICE MENU///////////////
class ChoiceScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.hollowBtn} 
          onPress={() => this.props.navigation.navigate('EmployHome')}>
          <Text style={styles.btnText}>Employ</Text>
        </TouchableOpacity>
        <Text style={styles.stdText}>or</Text>
        <TouchableOpacity style={styles.hollowBtn}
          onPress={() => this.props.navigation.navigate('WorkHome')}>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//////////////// EMPLOYER SECTION///////////////////////

//employer home screen
class EmployHomeScreen extends React.Component{
  static navigationOptions = {
    header: null,
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.profileContainer}>

        <AntDesign name="pluscircleo" size={40} color="#5595fc" onPress = {()=> this.props.navigation.navigate('CreateJob')} />
        
        <FontAwesome name="newspaper-o" size={40} color="#5595fc" onPress = {()=> this.props.navigation.navigate('CurrentAds')} />
      
        <Feather name="users" size={40} color="#5595fc" onPress = {()=> this.props.navigation.navigate('Candidates')} />

        <AntDesign name="clockcircleo" size={40} color="#5595fc" onPress = {() => this.props.navigation.navigate('PendingJobs')}/>
         
        <AntDesign name="checkcircleo" size={40} color="#5595fc" onPress = {() => this.props.navigation.navigate('eCompletedJobs')}/>
      
        <AntDesign name="setting" size={44} color="#5595fc" onPress = {() => this.props.navigation.navigate('eSettings')}/>
      
      </View>
    ); 
  }
}

//employer sub menus

class EmployCreateJob extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>create job</Text>
      </View>
    );
  }
}

class EmployCurrentAds extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>current ads</Text>
      </View>
    );
  }
}

class EmployCandidates extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>candidates</Text>
      </View>
    );
  }
}

class EmployPendingJobs extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>pendings jobs</Text>
      </View>
    );
  }
}

class EmployCompletedJobs extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>completed jobs</Text>
      </View>
    );
  }
}

class EmploySettings extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>settings</Text>
      </View>
    );
  }
}



///////////////WORKER SECTION////////////////////
class WorkHomeScreen extends React.Component{
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

//worker sub menus
class WorkEditProfile extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>edit profile</Text>
      </View>
    );
  }
}

class WorkJobSearch extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>job search</Text>
      </View>
    );
  }
}

class WorkAppliedJobs extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>applied jobs</Text>
      </View>
    );
  }
}

class WorkCompletedJobs extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>completed jobs</Text>
      </View>
    );
  }
}

class WorkSettings extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>settings</Text>
      </View>
    );
  }
}

class WorkProfile extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>profile</Text>
      </View>
    );
  }
}

class WorkPendingJobs extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>pending jobs</Text>
      </View>
    );
  }
}

////////////////NAVIGATION////////////////////
const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Choice: {screen: ChoiceScreen},
  //employ screens
  EmployHome: {screen: EmployHomeScreen},
  CreateJob: {screen: EmployCreateJob},
  CurrentAds: {screen: EmployCurrentAds},
  Candidates: {screen: EmployCandidates},
  PendingJobs: {screen: EmployPendingJobs},
  eCompletedJobs: {screen: EmployCompletedJobs},
  eSettings: {screen: EmploySettings},
  //work screens
  WorkHome: {screen: WorkHomeScreen},
  EditProfile: {screen: WorkEditProfile},
  JobSearch: {screen: WorkJobSearch},
  AppliedJobs: {screen: WorkAppliedJobs},
  wCompletedJobs: {screen: WorkCompletedJobs},
  wSettings: {screen: WorkSettings},
  wProfile: {screen: WorkProfile},
  wPendingJobs: {screen: WorkPendingJobs}
}, {
  initialRouteName: "Login",
}
);

const App = createAppContainer(MainNavigator);

export default App;

/////////////////CSS/////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },

  formInput: {
    width: 230,
    backgroundColor: 'white',
    fontSize: 24,
    padding: 8,
    borderRadius: 3,
    marginBottom: 14,
  },

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

  hollowBtn: {
    borderColor: 'white',
    borderRadius: 50,
    borderWidth: 3,
    backgroundColor: '#5595fc',
    width: 230,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    fontSize: 50,
    color: "white",
  },

  stdText: {
    fontSize: 18,
  } 

});
