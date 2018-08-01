import React from 'react';
import * as api from '../utils/api';
import * as creds from '../utils/robinhood/credentials'
import * as ts from '../utils/robinhood/topStocks';

let UpdateChartButton = (value) => {
  return (
    <div>
      <button onClick={() => updChart(value)}>
        Update Chart Symbol
      </button>
    </div>
  )
}

function updChart(value){

  let instr = value.value
  console.log(instr)

  //api.fetchChartData(instr)
  console.log('fetchChartData is disabled')

  ts.TopStocks(creds.credentials)

}


export default UpdateChartButton;
