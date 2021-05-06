import { useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import { Spinner, Heading, Center, Spacer, Container, Box, Flex, VStack } from "@chakra-ui/react"; // prettier-ignore
import QuestionSlider from "../components/QuestionSlider";
import DirectionButton from "../components/DirectionButton";
import Header from "../components/Header";

import data from "../data";
import reducer from "../reducer/pageReducer";

import { getMbti, binArrToDec } from "../helpers";

export async function getStaticProps(context) {
  return {
    props: { data },
  };
}

const SurveyPage = ({ data }) => {
  const initialState = { page: 0, answerList: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  const isLast = answerList.length === 13;

  useEffect(() => {
    if (state.page === 13) {
      router.push({
        pathname: "/results",
        query: {
          mbti: getMbti(state.answerList),
          a: binArrToDec(state.answerList),
        },
      });
    }
  }, [state.page, state.answerList]);

  return (
    <Container p={0} h="100vh" overflowY="hidden">
      <Header />
      {state.page === 13 ? (
        <Center h="80vh">
          <Spinner size="xl" />
        </Center>
      ) : (
        <>
          <Flex p={4}>
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
            <VStack justify="space-around" w="100%" h="35vh">
              <Heading size="md">{data[state.page].question}</Heading>
            </VStack>
            <VStack justify="space-around" w="100%" h="35vh">
              <DirectionButton
                dispatch={dispatch}
                type="nextPage"
                answer={0}
                isLast={isLast}
                text={data[state.page].answers[0].text}
              />
              <DirectionButton
                dispatch={dispatch}
                type="nextPage"
                answer={1}
                isLast={isLast}
                text={data[state.page].answers[1].text}
              />
            </VStack>
          </Box>
          <Box w="100%" pt="60%" bg="green.300">
            움직이는 그림으로 이쁜거 넣어놓자
          </Box>
        </>
      )}
    </Container>
  );
};

export default SurveyPage;

/*
  const fetchData = async () => {
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  };

  fetchData();
*/
