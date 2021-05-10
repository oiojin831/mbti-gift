import { Divider, Flex, VStack, Box, Heading, Stack, Text, UnorderedList, Center, ListItem } from "@chakra-ui/react"; // prettier-ignore
import { decToBinArr } from "../helpers/crypto";
import { mcqs } from "../data";

const DiffPC = ({ a, b }) => {
  const pcA = decToBinArr(a);
  const pcB = decToBinArr(b);

  const diffQ = getIndexIfFalse(
    compareTwo(decToBinArr(a), decToBinArr(b)),
    mcqs
  ).slice(1);
  if (diffQ.length === 0) {
    return (
      <>
        <Center>
          <Heading mt={6} size="lg">
            다른 답변 모음!
          </Heading>
        </Center>
        <Box border="3px solid black" borderRadius={6} p={4} my={6}>
          <Center>
            <Text fontWeight="bold" fontSize="2xl">
              없당!
            </Text>
          </Center>
        </Box>
      </>
    );
  }
  return (
    <Flex flexDir="column">
      <Center>
        <Heading mt={6} size="lg">
          다른 답변 모음!
        </Heading>
      </Center>
      {diffQ.map((e, index) => {
        return (
          <Box key={`${pcA[0]}-abxxd-${e.id}-${index}`}>
            <Box border="3px solid black" borderRadius={6} p={4} my={6}>
              <Heading mb={3} size="md">
                {e.questions[0]}
              </Heading>
              <UnorderedList>
                <ListItem>
                  {`${e.answers[pcA[e.id]].text} ${
                    pcA[0] === 0 ? "(엄마/아빠)" : "(아들/딸)"
                  } `}
                </ListItem>
                <ListItem>
                  {`${e.answers[pcB[e.id]].text}${
                    pcB[0] === 0 ? "(엄마/아빠)" : "(아들/딸)"
                  } `}
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
};

const ComparePC = ({ a, b }) => {
  const diffArrLast = getIndexIfFalse(
    compareTwo(decToBinArr(a), decToBinArr(b)),
    mcqs
  ).slice(1);

  return (
    <>
      <VStack spacing={0}>
        <Stack direction="row">
          <Text color="brand.600" fontSize="7xl" fontWeight="bold">
            {100 - Math.round((diffArrLast.length / 12) * 100)}
          </Text>

          <Text fontSize="4xl" paddingTop={10} fontWeight="900">
            %
          </Text>
        </Stack>
        <Text fontSize={12}>아들/딸이 답변과 엄마/아빠 답변의 일치율</Text>
      </VStack>
      <Divider />
    </>
  );
};

export { ComparePC, DiffPC };

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
