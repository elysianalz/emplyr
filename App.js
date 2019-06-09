import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/loginScreen';
import EmployCreateJob from './screens/employ/employCreateJob';
import EmployCurrentAds from './screens/employ/employCurrentAds';
import EmployCandidates from './screens/employ/employCandidates';
import EmployPendingJobs from './screens/employ/employPendingJobs';
import EmployCompletedJobs from './screens/employ/employCompletedJobs';
import EmploySettings from './screens/employ/employSettings';
import WorkEditProfile from './screens/work/workEditProfile';
import WorkJobSearch from './screens/work/workJobSearch';
import WorkAppliedJobs from './screens/work/workAppliedJobs';
import WorkCompletedJobs from './screens/work/workCompletedJobs';
import WorkSettings from './screens/work/workSettings';
import WorkProfile from './screens/work/workProfile';
import WorkPendingJobs from './screens/work/workPendingJobs';
import HomeScreen from './screens/HomeScreen';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  
  //employ screens
  CreateJob: {screen: EmployCreateJob},
  CurrentAds: {screen: EmployCurrentAds},
  Candidates: {screen: EmployCandidates},
  PendingJobs: {screen: EmployPendingJobs},
  eCompletedJobs: {screen: EmployCompletedJobs},
  eSettings: {screen: EmploySettings},
  
  //work screens
  EditProfile: {screen: WorkEditProfile},
  JobSearch: {screen: WorkJobSearch},
  AppliedJobs: {screen: WorkAppliedJobs},
  wCompletedJobs: {screen: WorkCompletedJobs},
  wSettings: {screen: WorkSettings},
  wProfile: {screen: WorkProfile},
  wPendingJobs: {screen: WorkPendingJobs}
},{
    initialRouteName: "Login",
  }
);

const App = createAppContainer(MainNavigator);

export default App;