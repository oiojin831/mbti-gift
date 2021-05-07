function reducer(state, action) {
  switch (action.type) {
    case "nextPage":
      if (state.isLast) {
        console.log("done");
        return {
          ...state,
          answerList: [...state.answerList, action.answer],
          done: true,
        };
      }
      return {
        ...state,
        page: state.page + 1,
        answerList: [...state.answerList, action.answer],
        isLast: state.answerList.length + 2 === action.qaSheetPageNumber,
      };
    case "previousPage":
      if (state.page <= 1) {
        return state;
      }
      return {
        ...state,
        page: state.page - 1,
        answerList: [...state.answerList.slice(0, state.page - 2)],
      };

    default:
      throw new Error();
  }
}

export default reducer;
