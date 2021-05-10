import { useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Heading, Center, Spacer, Container, Box, Flex, VStack } from "@chakra-ui/react"; // prettier-ignore

import { QuestionSlider, DirectionButton, Header } from "../../components"; // prettier-ignore
import { mcqs } from "../../data";
import reducer from "../../reducer/pageReducer";

import { decToBinArr } from "../../helpers/crypto";

import { db } from "../../libs/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function getStaticPaths() {
  const paths = [{ params: { mbti: "INFP-4127" } }];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const prevAnswerList = params.mbti.split("-")[1];
  const isParent = decToBinArr(prevAnswerList)[0] === 0 ? true : false;

  return {
    props: { mcqs, prevMbti: params.mbti, prevAnswerList, isParent },
    revalidate: 3600,
  };
}

const initialState = {
  page: 0,
  answerList: [],
  isLast: false,
  mbti: "",
};

const SurveyMbti = ({ mcqs, prevMbti, prevAnswerList, isParent }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const pageData = mcqs[state.page];

  const saveData = async () => {
    const docRef = await addDoc(collection(db, "secondSurvey"), {
      mbti1: prevMbti.split("-")[0],
      ansers1: prevAnswerList,
      mbti2: state.mbti.split("-")[0],
      answers2: state.answerList,
      createdAt: Timestamp.fromDate(new Date()),
    });
  };

  useEffect(() => {
    if (state.mbti !== "") {
      saveData();
      router.push({
        pathname: `/results/${prevMbti}-${state.mbti}`,
      });
    }
  }, [state.mbti]);

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
            {pageData.questions[state.answerList[0] || 0]}
          </Heading>
          {state.page + 1 === mcqs.length ? (
            <>
              <DirectionButton
                dispatch={dispatch}
                type="finish"
                answer={0}
                qaSheetPageNumber={mcqs.length}
                text={pageData.answers[0].text}
                disabled={isParent && state.page === 0}
              />
              <DirectionButton
                dispatch={dispatch}
                type="finish"
                answer={1}
                qaSheetPageNumber={mcqs.length}
                text={pageData.answers[1].text}
                disabled={!isParent && state.page === 0}
              />
            </>
          ) : (
            <>
              <DirectionButton
                dispatch={dispatch}
                type="nextPage"
                answer={0}
                qaSheetPageNumber={mcqs.length}
                text={pageData.answers[0].text}
                disabled={isParent && state.page === 0}
              />
              <DirectionButton
                dispatch={dispatch}
                type="nextPage"
                answer={1}
                qaSheetPageNumber={mcqs.length}
                text={pageData.answers[1].text}
                disabled={!isParent && state.page === 0}
              />
            </>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default SurveyMbti;
