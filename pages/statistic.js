import { XYPlot, VerticalBarSeries, LineSeries, MarkSeries } from "react-vis";
import { db } from "../libs/firebase";
import {
  collection,
  query,
  getDocs,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { useEffect } from "react";

const StatisticPage = () => {
  const getData = async () => {
    const firstRef = collection(db, "firstSurvey");
    const secondRef = collection(db, "secondSurvey");
    const fq = query(firstRef);
    const sq = query(secondRef);

    const firstQuerySnapshot = await getDocs(fq);
    const secondQuerySnapshot = await getDocs(sq);
    const result = [];
    firstQuerySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const id = doc.id;
      result.push({ id: doc.id, ...doc.data() });
    });
    const result2 = [];
    secondQuerySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const id = doc.id;
      result2.push({ id: doc.id, ...doc.data() });
    });
    console.log(result);
    console.log(result2);
  };

  useEffect(() => {
    getData();
  });
  return (
    <>
      <XYPlot height={200} width={200}>
        <VerticalBarSeries data={data} />
      </XYPlot>
    </>
  );
};

export default StatisticPage;

const mbti = {
  ENFJ: 3,
};

const data = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 0 },
];

const firstSurvey = [
  {
    answers: [1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1],
    createdAt: { seconds: 1620444630, nanoseconds: 373000000 },
    id: "02ElzN5qjeEXn0nXQIuM",
    mbti: "ISFJ",
  },
  {
    answers: [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0],
    createdAt: { seconds: 1620468640, nanoseconds: 760000000 },
    id: "08NB4tTh9zrdHJ6Fm0CZ",
    mbti: "ISTP",
  },
];
