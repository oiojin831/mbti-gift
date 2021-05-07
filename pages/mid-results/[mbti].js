import Link from "next/link";
import { Container, VStack, Box, Button, Heading, Text } from "@chakra-ui/react"; // prettier-ignore

import HeroImage from "../../components/HeroImage";
import Header from "../../components/Header";
import { decToBinArr } from "../../helpers/crypto";
import data from "../../data";

export async function getStaticPaths() {
  const paths = [{ params: { mbti: "INFP-4127" } }];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const mbtiType = params.mbti.split("-")[0];
  const firstAnswers = params.mbti.split("-")[1];
  console.log("split", mbtiType, firstAnswers);
  console.log("data", data);

  return { props: { mbtiType, firstAnswers, qaSheet: data }, revalidate: 3600 };
}

const MidResult = ({ mbtiType, firstAnswers, qaSheet }) => {
  const firstAnswersArr = decToBinArr(firstAnswers);
  console.log(qaSheet);
  const pcType = qaSheet[0].answers[firstAnswersArr[0]].text;
  //pc[0] => 0 -> 부모 , 1 -> 자식
  console.log(pcType);
  return (
    <Container p={0}>
      <Header />
      <VStack spacing={7} align="stretch">
        <Heading>{`${mbtiType}인 부모님 `}</Heading>
        <Box>
          <HeroImage />
        </Box>
        <Text>텍스트</Text>
        <Link href={`/survey/${mbtiType}-${firstAnswers}`} passHref>
          <Button>부모 자식 다르사람하기</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default MidResult;
