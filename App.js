import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/loginScreen';
import EmployHomeScreen from './screens/employ/employHomeScreen';
import EmployCreateJob from './screens/employ/employCreateJob';
import EmployCurrentAds from './screens/employ/employCurrentAds';
import EmployCandidates from './screens/employ/employCandidates';
import EmployPendingJobs from './screens/employ/employPendingJobs';
import EmployCompletedJobs from './screens/employ/employCompletedJobs';
import EmploySettings from './screens/employ/employSettings';
import WorkHomeScreen from './screens/work/workHomeScreen';
import WorkEditProfile from './screens/work/workEditProfile';
import WorkJobSearch from './screens/work/workJobSearch';
import WorkAppliedJobs from './screens/work/workAppliedJobs';
import WorkCompletedJobs from './screens/work/workCompletedJobs';
import WorkSettings from './screens/work/workSettings';
import WorkProfile from './screens/work/workProfile';
import WorkPendingJobs from './screens/work/workPendingJobs';
import ChoiceScreen from './screens/choice';

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