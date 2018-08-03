import React from 'react';
import AddValue from '../containers/AddValue';
import Calculation from '../containers/Calculation';
import InstrContainer from '../containers/Instr_container';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import LoginPage from './Login'

const Home = () => (
    <div>
    <LoginPage />
        <div style={{
            width: "40%",
            float: "left"
        }}>
        </div>
        <div>
            <InstrContainer action="updateInstrAction" value="WMT" ></InstrContainer>
        </div>
        <div style={{
            clear: "both"
        }}></div>
    </div>
);

export default Home;
