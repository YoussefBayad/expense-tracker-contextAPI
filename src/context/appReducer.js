export default (state, action) => {
  switch (action.type) {
    case 'DELETE':
      return {
        transaction: [
          ...state.transaction.filter((item) => item.id !== action.id),
        ],
      };
    case 'ADD':
      return {
        transaction: [
          ...state.transaction,
          { name: action.name, amount: action.amount, id: action.id },
        ],
      };
    default:
      return state;
  }
};
