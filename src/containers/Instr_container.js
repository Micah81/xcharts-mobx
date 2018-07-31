import { connect } from 'react-redux';

import ACTIONS from '../actions/index';
import UpdateChartButton from '../components/UpdateChartButton';

const mapStateToProps = (state, ownProps) => ({
  value: ownProps.value
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (value) => {
    dispatch(ACTIONS[ownProps.action](value));
  }
});

const UpdateChartValue = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateChartButton);


export default UpdateChartValue;
