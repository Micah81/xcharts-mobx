import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import Root from './components/Root'; // this way to Home.js
import './index.css';
import reducer from './reducers'; // this way to all reducers
import * as fb from './utils/fbcreds'

// Firebase config
firebase.initializeApp(fb.fbconfig)

// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
}

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config)
)(createStore)

// Create store with reducers and initial state
const store = createStoreWithFirebase(reducer, {
  costs: [15000, 15000, 15000],
  incomes: [22000, 13000, 18000],
  savings: [20000, 11000, 15000],
  instrumentUpdates: 'NFLX'
});

ReactDOM.render(
  <Root store={ store } />,
  document.getElementById('root')
);
