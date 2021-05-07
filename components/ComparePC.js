import { decToBinArr } from "../helpers/crypto";
import data from "../data";

const ComparePC = ({ a, b }) => {
  return (
    <>
      <div>{JSON.stringify(decToBinArr(a))}</div>
      <div>{JSON.stringify(decToBinArr(b))}</div>
      <div>
        {getIndexIfFalse(compareTwo(decToBinArr(a), decToBinArr(b)), data).map(
          (e, index) => {
            return <div key={`abd-${e}-${index}`}>{e.questions[0]}</div>;
          }
        )}
      </div>
    </>
  );
};

export default ComparePC;

const compareTwo = (firstArr, secondArr) => {
  const diffArr = firstArr.map((ele, index) => ele === secondArr[index]);
  return diffArr;
};

const getIndexIfFalse = (arr, data) => {
  return arr.reduce((result, ele, index) => {
    if (ele === false) {
      result.push(data[index]);
    }
    return result;
  }, []);
};
