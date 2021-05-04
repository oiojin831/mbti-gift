function reducer(state, action) {
  switch (action.type) {
    case "nextPage":
      if (state.page >= 13) {
        return state;
      }
      return {
        page: state.page + 1,
        answerList: [...state.answerList, action.answer],
      };
    case "previousPage":
      if (state.page <= 1) {
        return state;
      }
      return {
        page: state.page - 1,
        answerList: [...state.answerList.slice(0, state.page - 2)],
      };

    default:
      throw new Error();
  }
}

export default reducer;
