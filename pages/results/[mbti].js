import { SimpleGrid, Container, VStack, Box, Heading, Text, } from "@chakra-ui/react"; //prettier-ignore
import HeroImage from "../../components/HeroImage";
import Header from "../../components/Header";
import ComparePC from "../../components/ComparePC";
import { mfdQSheet1, mfdResults1, mfdTitles1 } from "../../data";
import { useRouter } from "next/router";
import { decToBinArr } from "../../helpers/crypto";
import Image from "next/image";

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
      titles: mfdTitles1,
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
  titles,
}) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <div>Loading...</div>;
  }
  const pc1 = decToBinArr(firstAnswers)[0];
  const pc2 = decToBinArr(firstAnswers)[1];
  return (
    <Container p={0}>
      <Header />
      <VStack spacing={7} align="stretch">
        <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
          <Box textAlign="center">
            <Heading textAlign="center" size="lg">
              {titles[pc1].title}
            </Heading>
            <Heading textAlign="center" size="xl">
              {firstMbtiType}
            </Heading>
            <Image
              alt={firstMbtiType}
              src={`/${firstMbtiType.toLowerCase()}.png`}
              objectFit="cover"
              width="400px"
              height="400px"
              quality={100}
            />
          </Box>
          <Box textAlign="center">
            <Heading textAlign="center" size="lg">
              {titles[pc2].title}
            </Heading>
            <Heading textAlign="center" size="xl">
              {secondMbtiType}
            </Heading>
            <Image
              alt={secondMbtiType}
              src={`/${secondMbtiType.toLowerCase()}.png`}
              objectFit="cover"
              width="400px"
              height="400px"
              quality={100}
            />
          </Box>
        </SimpleGrid>
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
