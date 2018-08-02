import React from 'react';
import AddValue from '../containers/AddValue';
import Calculation from '../containers/Calculation';
import InstrContainer from '../containers/Instr_container';

// new container, symbolsContainer
    import * as creds from '../utils/robinhood/credentials';
    import * as ts from '../utils/robinhood/topStocks';
    ts.TopStocks(creds.credentials);
// new action ...  (determines active symbol)
// which calls a new reducer, symbolsReducer (adds active symbol to state)
// update 'WMT' in HTML to be the [active symbol].




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
