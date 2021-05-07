import { useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import { Heading, Center, Spacer, Container, Box, Flex, VStack } from "@chakra-ui/react"; // prettier-ignore
import QuestionSlider from "../../components/QuestionSlider";
import DirectionButton from "../../components/DirectionButton";
import Header from "../../components/Header";

import data from "../../data";
import reducer from "../../reducer/pageReducer";

import { getMbti, binArrToDec } from "../../helpers";

export async function getStaticPaths() {
  const paths = [{ params: { mbti: "INFP-4127" } }];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const mbtiType = params.mbti.split("-")[0];
  const firstAnswers = params.mbti.split("-")[1];

  return { props: { mbtiType, firstAnswers, qaSheet: data }, revalidate: 3600 };
}

const initialState = { page: 0, answerList: [], isLast: false, done: false };

const SurveyMbti = ({ mbtiType, firstAnswers, qaSheet }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const pageData = qaSheet[state.page];

  useEffect(() => {
    if (state.done) {
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
      <Box w="100%" pt="60%" bg="brand.50">
        화면이 큰경우 보이는 영역임, 뭐 넣어야할까?
      </Box>
    </Container>
  );
};

export default SurveyMbti;
