import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class WorkJobSearch extends React.Component{
  static navigationOptions = {
    title: 'Job Search.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.jobCard}>
          <Text>Title: Do something for me </Text>
          <Text>Description: lorum ipsum stinky linky dinky </Text>
          <Text>Type: miscilanious</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5595fc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  jobCard: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '90%',
    borderRadius: 5,
    padding: 35,
    backgroundColor: 'white',
  },
});