const instrumentUpdate = (state, action) => {
  switch (action.type) {
    case 'UPDATE_INSTR':
      return action.value;
    default:
      return state
  }
}

const instrumentUpdates = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_INSTR':
      return [
        ...state,
        instrumentUpdate(undefined, action)
    ]
    default:
      return state
  }
}

export default instrumentUpdates
