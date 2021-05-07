import { Container, VStack, Box, Heading, Text, } from "@chakra-ui/react"; //prettier-ignore
import HeroImage from "../../components/HeroImage";
import Header from "../../components/Header";
import ComparePC from "../../components/ComparePC";
import { mfdQSheet1, mfdResults1 } from "../../data";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const paths = [{ params: { mbti: "INFP-4127-INFP-4127" } }];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const firstMbtiType = params.mbti.split("-")[0];
  const firstAnswers = params.mbti.split("-")[1];
  const secondMbtiType = params.mbti.split("-")[2];
  const secondAnswers = params.mbti.split("-")[3];

  return {
    props: {
      firstMbtiType,
      firstAnswers,
      secondMbtiType,
      secondAnswers,
      qaSheet: mfdQSheet1,
      results: mfdResults1,
    },
    revalidate: 3600,
  };
}

const ResultsMbti = ({
  firstMbtiType,
  firstAnswers,
  secondMbtiType,
  secondAnswers,
  qaSheet,
  results,
}) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Container p={0}>
      <Header />
      <VStack spacing={7} align="stretch">
        <Box>
          <HeroImage />
        </Box>
        <VStack spacing={7} align="center">
          <Heading>{`${firstMbtiType}-${firstAnswers}-${secondMbtiType}-${secondAnswers}`}</Heading>
          <Text>텍스트</Text>
          <ComparePC a={firstAnswers} b={secondAnswers} />
        </VStack>
        <Box w="100%" pt="50%" bg="pink.100">
          zzz
        </Box>
        <Box w="100%" pt="50%" bg="pink.100">
          kkkk
        </Box>
        <Box w="100%" pt="50%" bg="red.300">
          lll
        </Box>
      </VStack>
    </Container>
  );
};

export default ResultsMbti;
