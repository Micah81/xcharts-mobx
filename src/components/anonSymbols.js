import React from 'react';
import * as creds from '../utils/robinhood/credentials';
import * as ts from '../utils/robinhood/topStocks';

module.exports = {
  anonSymbols: function () {
    console.log('here I am!')
    ts.TopStocks(creds.credentials)
  }
}
