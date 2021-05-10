import { getMbti, binArrToDec } from "../helpers";

function reducer(state, action) {
  switch (action.type) {
    case "finish":
      const newAnswerList = [...state.answerList, action.answer];

      return {
        ...state,
        answerList: newAnswerList,
        mbti: `${getMbti(newAnswerList)}-${binArrToDec(newAnswerList)}`,
      };
    case "nextPage":
      if (state.isLast) {
        return {
          ...state,
          answerList: [...state.answerList, action.answer],
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
        return { ...state };
      }
      return {
        ...state,
        page: state.page - 1,
        answerList: [...state.answerList.slice(0, state.page - 1)],
      };

    default:
      throw new Error();
  }
}

export default reducer;
