export default (state, action) => {
  switch (action.type) {
    case 'DELETE':
      return {
        transaction: [
          ...state.transaction.filter((item) => item.id !== action.id),
        ],
      };
    default:
      return state;
  }
};
