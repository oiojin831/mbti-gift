import { useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import { Heading, Center, Spacer, Container, Box, Flex, VStack } from "@chakra-ui/react"; // prettier-ignore
import QuestionSlider from "../../components/QuestionSlider";
import DirectionButton from "../../components/DirectionButton";
import Header from "../../components/Header";

import { mfdQSheet1 } from "../../data";
import reducer from "../../reducer/pageReducer";

import { getMbti, binArrToDec } from "../../helpers";
import Head from "next/head";
import { db } from "../../libs/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function getStaticProps() {
  return {
    props: { qaSheet: mfdQSheet1 },
  };
}

const initialState = { page: 0, answerList: [], isLast: false, done: false };

const SurveyPage = ({ qaSheet }) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const pageData = qaSheet[state.page];
  console.log("state in survey index", state);

  const saveData = async () => {
    const docRef = await addDoc(collection(db, "firstSurvey"), {
      mbti: getMbti(state.answerList),
      answers: state.answerList,
    });
  };

  useEffect(() => {
    if (state.done) {
      saveData();
      const mbti = `${getMbti(state.answerList)}-${binArrToDec(
        state.answerList
      )}`;
      router.push({
        pathname: `/mid-results/${mbti}`,
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
          content="어버이날 기념 부모님 mbti 테스트로 자녀들과 더 가까워지세요"
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
          <DirectionButton
            dispatch={dispatch}
            type="nextPage"
            answer={0}
            qaSheetPageNumber={qaSheet.length}
            text={pageData.answers[0].text}
          />
          <DirectionButton
            dispatch={dispatch}
            type="nextPage"
            answer={1}
            qaSheetPageNumber={qaSheet.length}
            text={pageData.answers[1].text}
          />
        </VStack>
      </Box>
    </Container>
  );
};

export default SurveyPage;
