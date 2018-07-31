import React from 'react';
import AddValue from '../containers/AddValue';
import Calculation from '../containers/Calculation';
import InstrContainer from '../containers/Instr_container';

const Home = () => (
    <div>
        <div style={{
            width: "40%",
            float: "left"
        }}>
            <Calculation></Calculation>
        </div>
        <div>
            <AddValue label="add" action="addCost" heading="Add a new cost"></AddValue>
            <AddValue label="add" action="addIncome" heading="Add a new income"></AddValue>
            <AddValue label="add" action="addSaving" heading="Add a new saving"></AddValue>
            <InstrContainer action="updateInstrAction" value="WMT" ></InstrContainer>
        </div>
        <div style={{
            clear: "both"
        }}></div>
    </div>
);

export default Home;
