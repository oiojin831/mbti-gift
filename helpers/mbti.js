export const getMbti = (list) => {
  let mbti = "";

  const countE = list.filter((char) => char === "E").length;
  const countI = list.filter((char) => char === "I").length;
  const countS = list.filter((char) => char === "S").length;
  const countN = list.filter((char) => char === "N").length;
  const countT = list.filter((char) => char === "T").length;
  const countF = list.filter((char) => char === "F").length;
  const countJ = list.filter((char) => char === "J").length;
  const countP = list.filter((char) => char === "P").length;

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
