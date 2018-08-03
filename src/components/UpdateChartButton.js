import React from 'react';
import * as api from '../utils/api';

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
  // add chart data to state

  

  // Record vote here  ...

}


export default UpdateChartButton;
