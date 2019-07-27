import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class WorkPendingJobs extends React.Component{
  static navigationOptions = {
    title: 'Emplyr.',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>
        <TouchableOpacity style={styles.job} className="job">
          <Text className={styles.text}>Job Title</Text>
          <Text>15 minutes ago</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.job} className="job">
          <Text className={styles.text}>Job Title</Text>
          <Text>15 minutes ago</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 5,
    paddingTop: 10,
  },

  job: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 10,
  },

  text: {
    fontSize: 24,
  },
});