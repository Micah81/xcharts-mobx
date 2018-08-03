import React from 'react';
import * as creds from '../utils/robinhood/credentials';
import * as ts from '../utils/robinhood/topStocks';

module.exports = {
  anonSymbols: function () {
    console.log('here I am!')
    ts.TopStocks(creds.credentials)
  }
}

/*

Pass the symbol array to the state.
Add the chart component.
Put the symbol array into the chart.
When they push the button to vote, pass the symbol via the store.  

*/
