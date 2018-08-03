import React from 'react';
import * as creds from '../utils/robinhood/credentials';
import * as ts from '../utils/robinhood/topStocks';

module.exports = {
  anonSymbols: function () {
    let anonSymbolsArray = []
    anonSymbolsArray = ts.TopStocks(creds.credentials)
  }
}
