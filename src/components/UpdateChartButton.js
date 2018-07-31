import React, { PropTypes } from 'react';

let UpdateChartButton = (value) => {
  return (
    <div>
      <button onClick={() => {console.log(value.value)}}>Update Chart Symbol</button>
    </div>
  )
}

export default UpdateChartButton;
