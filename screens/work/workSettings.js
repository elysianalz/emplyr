import React from 'react';
import { View, Text, StyleSheet, Slider} from 'react-native';


export default class WorkSettings extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
         {/* <Slider
          minimumValue={1}
          maximumValue={50}
          minimumTrackTintColor="#1EB1FC"
          maximumTractTintColor="#1EB1FC"
          step={1}
          value={1}
          thumbTintColor="#1EB1FC"
        />*/}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});