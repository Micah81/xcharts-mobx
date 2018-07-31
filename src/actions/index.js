const addIncome = (value) => ({
  type: 'ADD_INCOME',
  value
});

const addCost = (value) => ({
  type: 'ADD_COST',
  value
});

const addSaving = (value) => ({
  type: 'ADD_SAVING',
  value
});

const updateInstrAction = (value) => ({
  type: 'UPDATE_INSTR',
  value
})

export default {
    addIncome,
    addCost,
    addSaving,
    updateInstrAction
};
