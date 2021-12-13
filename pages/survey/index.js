import { useReducer, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Heading, Center, Spacer, Container, Box, Flex, VStack } from "@chakra-ui/react"; // prettier-ignore

import { QuestionSlider, DirectionButton, Header, MetaData } from "../../components"; // prettier-ignore
import { mcqs } from '../../data';
import reducer from '../../reducer/pageReducer';

import { db } from '../../libs/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export async function getStaticProps() {
  return {
    props: { mcqs },
  };
}

const initialState = {
  page: 0,
  answerList: [],
  isLast: false,
  mbti: '',
};

const SurveyPage = ({ mcqs }) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const pageData = mcqs[state.page];

  const saveData = async () => {
    const docRef = await addDoc(collection(db, 'firstSurvey'), {
      mbti: state.mbti.split('-')[0],
      answers: state.answerList,
      createdAt: Timestamp.fromDate(new Date()),
    });
  };

  useEffect(() => {
    if (state.mbti !== '') {
      saveData();
      router.push({
        pathname: `/mid-results/${state.mbti}`,
      });
    }
  }, [state.mbti]);

  return (
    <Container p={0} h="100vh" overflowY="hidden">
      <MetaData />
      <Header title="어버이날 MBTI" />
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
              />
              <DirectionButton
                dispatch={dispatch}
                type="finish"
                answer={1}
                qaSheetPageNumber={mcqs.length}
                text={pageData.answers[1].text}
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
              />
              <DirectionButton
                dispatch={dispatch}
                type="nextPage"
                answer={1}
                qaSheetPageNumber={mcqs.length}
                text={pageData.answers[1].text}
              />
            </>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default SurveyPage;
