import { mcqs } from "../data";

// list -> answerIndexList
export const getMbti = (list) => {
  let mbti = "";

  const featureList = list.reduce((result, answerIndex, listIndex) => {
    return [...result, mcqs[listIndex].answers[answerIndex].type];
  }, []);

  const countE = featureList.filter((char) => char === "E").length;
  const countI = featureList.filter((char) => char === "I").length;
  const countS = featureList.filter((char) => char === "S").length;
  const countN = featureList.filter((char) => char === "N").length;
  const countT = featureList.filter((char) => char === "T").length;
  const countF = featureList.filter((char) => char === "F").length;
  const countJ = featureList.filter((char) => char === "J").length;
  const countP = featureList.filter((char) => char === "P").length;

  if (countE > countI) {
    mbti = mbti + "E";
  } else {
    mbti = mbti + "I";
  }
  if (countS > countN) {
    mbti = mbti + "S";
  } else {
    mbti = mbti + "N";
  }
  if (countT > countF) {
    mbti = mbti + "T";
  } else {
    mbti = mbti + "F";
  }
  if (countJ > countP) {
    mbti = mbti + "J";
  } else {
    mbti = mbti + "P";
  }
  return mbti;
};
