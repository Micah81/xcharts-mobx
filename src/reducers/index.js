import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import incomes from './incomes';
import costs from './costs';
import savings from './savings';
import instrumentUpdates from './updateChart';

const dashboardApp = combineReducers({
  incomes,
  costs,
  savings,
  instrumentUpdates,
  firebase: firebaseReducer
});

export default dashboardApp;
