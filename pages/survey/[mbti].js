import { useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import { Heading, Center, Spacer, Container, Box, Flex, VStack } from "@chakra-ui/react"; // prettier-ignore
import QuestionSlider from "../../components/QuestionSlider";
import DirectionButton from "../../components/DirectionButton";
import Header from "../../components/Header";

import { mfdQSheet1 } from "../../data";
import reducer from "../../reducer/pageReducer";

import { getMbti, binArrToDec } from "../../helpers";
import { decToBinArr } from "../../helpers/crypto";
import Head from "next/head";

import { db } from "../../libs/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function getStaticPaths() {
  const paths = [{ params: { mbti: "INFP-4127" } }];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const mbtiType = params.mbti.split("-")[0];
  const firstAnswers = params.mbti.split("-")[1];

  return {
    props: { mbtiType, firstAnswers, qaSheet: mfdQSheet1 },
    revalidate: 3600,
  };
}

const initialState = { page: 0, answerList: [], isLast: false, done: false };

const SurveyMbti = ({ mbtiType, firstAnswers, qaSheet }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const pageData = qaSheet[state.page];
  const isParent = decToBinArr(firstAnswers)[0] === 0 ? true : false;

  const saveData = async () => {
    const docRef = await addDoc(collection(db, "secondSurvey"), {
      mbti1: mbtiType,
      ansers1: firstAnswers,
      mbti2: getMbti(state.answerList),
      answers2: state.answerList,
    });
  };

  useEffect(() => {
    if (state.done) {
      saveData();
      const mbti = `${getMbti(state.answerList)}-${binArrToDec(
        state.answerList
      )}`;
      router.push({
        pathname: `/results/${mbtiType}-${firstAnswers}-${mbti}`,
      });
    }
  }, [state.done, state.answerList]);

  return (
    <Container p={0} h="100vh" overflowY="hidden">
      <Head>
        <title>My page title</title>
        <meta property="og:url" content="https://mfd-mbti.vercel.app" />
        <meta property="og:title" content="어버이날 MBTI by ㅇㅈ" key="title" />
        <meta
          property="og:description"
          content={
            isParent
              ? `아들/딸 이 테스트 한번만 해줘.`
              : `엄마/아빠 이 테스트 한번만 해주세요`
          }
        />
        <meta
          property="og:image"
          content="https://mfd-mbti.vercel.app/_next/image?url=%2Fmain.jpeg&w=3840&q=75"
        />
      </Head>
      <Header />
      <Flex py={4}>
        <DirectionButton
          dispatch={dispatch}
          type="previousPage"
          text="이전 문제"
        />
        <Spacer />
        <Center>
          <Heading size="md">{`${state.page} / 12`}</Heading>
        </Center>
      </Flex>
      <Box>
        <QuestionSlider value={state.page} />
      </Box>
      <Box>
        <VStack justify="space-around" w="100%" h="45vh">
          <Heading size="md" textAlign="center" wordBreak="keep-all" p={4}>
            {pageData.questions[0]}
          </Heading>
          <DirectionButton
            dispatch={dispatch}
            type="nextPage"
            answer={0}
            qaSheetPageNumber={qaSheet.length}
            text={pageData.answers[0].text}
            disabled={isParent && state.page === 0}
          />
          <DirectionButton
            dispatch={dispatch}
            type="nextPage"
            answer={1}
            qaSheetPageNumber={qaSheet.length}
            text={pageData.answers[1].text}
            disabled={!isParent && state.page === 0}
          />
        </VStack>
      </Box>
    </Container>
  );
};

export default SurveyMbti;
