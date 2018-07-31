import { combineReducers } from 'redux';
import incomes from './incomes';
import costs from './costs';
import savings from './savings';
import instrumentUpdates from './updateChart';

const dashboardApp = combineReducers({
  incomes,
  costs,
  savings,
  instrumentUpdates
});

export default dashboardApp;
