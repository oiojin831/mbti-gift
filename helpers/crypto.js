const binArrToDec = (arr) => {
  // binary가 역순으로 저장된다.
  const binary = arr.reduce((bin, bool) => bin + bool, "1");
  const decimal = parseInt(binary, 2);
  return decimal;
};

const decToBinArr = (dec) => {
  //  제일 큰자리가  1이여야한다.
  const binary = parseInt(dec);
  const arr = binary
    .toString(2)
    .split("")
    .map((a) => parseInt(a))
    .slice(1);
  return arr;
};

export { binArrToDec, decToBinArr };
