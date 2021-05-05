import { useState, useReducer, useEffect } from "react";
import QuestionSlider from "../components/QuestionSlider";
import {
  Heading,
  Center,
  Spacer,
  Container,
  Box,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/layout";
import DirectionButton from "../components/DirectionButton";
import Header from "../components/Header";
import reducer from "../reducer/pageReducer";
import { getMbti } from "../helpers/mbti";
import { useRouter } from "next/router";

const ParentsTestPage = () => {
  const [state, dispatch] = useReducer(reducer, {
    page: 1,
    answerList: [],
  });
  const router = useRouter();

  useEffect(() => {
    if (state.page === 13) {
      console.log("push");
      router.push({
        pathname: "/results",
        query: {
          mbti: getMbti(state.answerList),
        },
      });
    }
  }, [state.page, state.answerList]);

  return (
    <Container p={0} h="100vh" overflowY="hidden">
      <Header />
      {state.page === 13 ? (
        <div>{getMbti(state.answerList)}</div>
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
              {console.log(`지금 까지 저장되 답들: ${state.answerList}`)}
              <Heading size="md">
                {questionSheets[state.page - 1].question}
              </Heading>
            </VStack>
            <VStack justify="space-around" w="100%" h="35vh">
              {console.log(state.page)}
              <DirectionButton
                dispatch={dispatch}
                type="nextPage"
                answer={questionSheets[state.page - 1].type1}
                text={questionSheets[state.page - 1].answerText1}
              />
              <DirectionButton
                dispatch={dispatch}
                type="nextPage"
                answer={questionSheets[state.page - 1].type2}
                text={questionSheets[state.page - 1].answerText2}
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

export default ParentsTestPage;

const questionSheets = [
  {
    question: "일이나 집안일이 없는 휴일에 나는",
    answerText1: "집에서 가족과 또는 혼자만의 시간을 즐긴다",
    type1: "I",
    answerText2: "주변 동네 친구들과 약속을 잡는다",
    type2: "E",
  },
  {
    question: "여러 가지 일이 밀려 있을 때 나는",
    answerText1: "여러가지 일을 동시에 빠르게 처리한다.",
    type1: "E",
    answerText2: "한가지 일에만 집중해서 차근차근 해결한다.",
    type2: "I",
  },
  {
    question: "아들(딸)이 고민을 이야기 하면 나는",
    answerText1: "잘 들어주려고 하는 편이다",
    type1: "I",
    answerText2: " 이것 저것 조언을 많이 해주는 편이다",
    type2: "E",
  },
  {
    question: "길가다가 발견한 꽃을 보고 내가 할 말은?",
    answerText1: "저 꽃은 되게 작고 연한 핑크색으로 예쁘네",
    type1: "S",
    answerText2: "저 꽃을 보니까 예전에 우리 딸(아들) 사준 꽃다발이 생각나네",
    type2: "N",
  },
  {
    question: "자식들이 나에게 주었으면 하는 선물은?",
    answerText1: "실용성 없지만 예쁘고 기억에 남을 선물",
    answerText2: "요즘 가장 필요한 물건",
    type1: "N",
    type2: "S",
  },
  {
    question: "아들(딸)이랑 같이 보고 싶은 책은?",
    answerText1: "공상과학이나 재밌는 스토리의 소설책",
    answerText2: "자기 계발을 할 수 있는 실용서적",
    type1: "N",
    type2: "S",
  },
  {
    question: "우리 딸(아들)과 사소한 일로 다투었을 때",
    answerText1: "감정적으로 화를 내며 폭풍 잔소리를 한다.",
    answerText2: "어떤 점을 고쳤으면 하는지 조목조목 따진다.",
    type1: "F",
    type2: "T",
  },
  {
    question: "집에 온 우리 아들(딸)이 풀이 축 죽어 있다 이때 나는",
    answerText1: "딸(아들) 왜 이렇게 힘이 없어 뭐 때문에 그래?",
    answerText2: "축 처진 모습을 보고 눈물부터 난다.",
    type1: "T",
    type2: "F",
  },
  {
    question: "우리 딸(아들)이 사온 선물이 마음에 들지 않는다 나는",
    answerText1: "뭘 이런걸 사오냐 다음부터 물어보고 사라",
    answerText2: "(마음에 들지 않아도 티내지 않는다) '잘쓸게 고마워'",
    type1: "T",
    type2: "F",
  },
  {
    question: "우리 자식(들)이랑 가족여행을 가게 되었다. ",
    answerText1: "계획 없이 즉흥적으로 돌아다녀 보자!.",
    type1: "P",
    answerText2: "주요 관광지랑 맛집은 다 섭렵해야지!",
    type2: "J",
  },
  {
    question: "간만에 우리 딸(아들)과의 데이트! 옷은?",
    answerText1: "전날에 이미 다 골라놨다.",
    type1: "J",
    answerText2: "나가기전에 끌리는 옷으로 입는다.",
    type2: "P",
  },
  {
    question: "딸(아들)이 '엄마(아빠) 00 어딨어?'라고 하면",
    answerText1: "그걸 어디에 뒀더라..' 한참 고민한다.",
    type1: "P",
    answerText2: "어디있는지 위치를 딱딱 알려준다.",
    type2: "J",
  },
];
