import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class ChoiceScreen extends React.Component {
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

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
  stdText: {
    fontSize: 18,
  },
  btnText: {
    fontSize: 50,
    color: "white",
  },
});