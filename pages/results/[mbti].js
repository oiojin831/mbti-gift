import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as ChakraLink, SimpleGrid, Container, Flex, UnorderedList, ListItem, VStack, Box, Heading } from "@chakra-ui/react"; // prettier-ignore
import { Footer, ResultShare, MainShare, ComparePC, DiffPC, Header } from "../../components"; // prettier-ignore
import { mcqs, results, titles } from '../../data';
import { decToBinArr } from '../../helpers/crypto';

export async function getStaticPaths() {
  const paths = [{ params: { mbti: 'INFP-4127-INFP-4127' } }];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const firstMbtiType = params.mbti.split('-')[0];
  const firstAnswers = params.mbti.split('-')[1];
  const secondMbtiType = params.mbti.split('-')[2];
  const secondAnswers = params.mbti.split('-')[3];
  const firstParentChildBinary = decToBinArr(firstAnswers)[0];
  const secondParentChildBinary = decToBinArr(secondAnswers)[0];

  return {
    props: {
      firstMbtiType,
      firstAnswers,
      secondMbtiType,
      secondAnswers,
      firstParentChildBinary,
      secondParentChildBinary,
      results,
      titles,
    },
    revalidate: 3600,
  };
}

const ResultsMbti = ({
  firstMbtiType,
  firstAnswers,
  secondMbtiType,
  secondAnswers,
  firstParentChildBinary,
  secondParentChildBinary,
  results,
  titles,
}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Container p={0}>
      <Head>
        <title>My page title</title>
        <meta property="og:url" content="https://mfd-mbti.vercel.app" />
        <meta property="og:title" content="어버이날 MBTI by ㅇㅈ" key="title" />
        <meta
          property="og:description"
          content="우리 생각의 차이를 공유해봐요"
        />
        <meta
          property="og:image"
          content="https://mfd-mbti.vercel.app/_next/image?url=%2Fmain.jpeg&w=3840&q=75"
        />
      </Head>
      <Header title="어버이날 MBTI" />
      <VStack m={4} pb={12} spacing={7} align="stretch">
        <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
          <Box textAlign="center">
            <Heading wordBreak="keep-all" textAlign="center" size="sm">
              {titles[firstParentChildBinary].title}
            </Heading>
            <Heading my={2} textAlign="center" size="xl">
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
            <Heading wordBreak="keep-all" textAlign="center" size="sm">
              {titles[secondParentChildBinary].title}
            </Heading>
            <Heading my={2} textAlign="center" size="xl">
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
          <Heading mx={2} size="md">
            아들/딸은 엄마 아빠를 얼마나 알고 있을까?
          </Heading>
          <ComparePC a={firstAnswers} b={secondAnswers} />
        </VStack>

        <VStack m={3} spacing={4} align="stretch">
          <Box textAlign="center">
            <Heading textAlign="center" size="lg">
              {titles[firstParentChildBinary].title}
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
          <Box mx={8}>
            <Flex
              flexDir="column"
              border="3px solid black"
              p={8}
              borderRadius={6}
            >
              <Box my={6}>
                <Heading mb={3} size="md">
                  {titles[firstParentChildBinary].am}
                </Heading>
                <UnorderedList>
                  {results[firstMbtiType].am.map((r, index) => {
                    return (
                      <ListItem key={`${results[firstMbtiType].type}-${index}`}>
                        {r}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
              <Box my={6}>
                <Heading mb={3} size="md">
                  {titles[firstParentChildBinary].will}
                </Heading>
                <UnorderedList>
                  {results[firstMbtiType].will.map((r, index) => {
                    return (
                      <ListItem key={`${results[firstMbtiType].type}-${index}`}>
                        {r}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
              <Box my={6}>
                <Heading mb={3} size="md">
                  {titles[firstParentChildBinary].hard}
                </Heading>
                <UnorderedList>
                  {results[firstMbtiType].hard.map((r, index) => {
                    return (
                      <ListItem key={`${results[firstMbtiType].type}-${index}`}>
                        {r}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
            </Flex>
          </Box>
          <Box textAlign="center">
            <Heading textAlign="center" size="lg">
              {titles[secondParentChildBinary].title}
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
          <Box mx={8}>
            <Flex
              flexDir="column"
              border="3px solid black"
              p={8}
              borderRadius={6}
            >
              <Box my={6}>
                <Heading mb={3} size="md">
                  {titles[secondParentChildBinary].am}
                </Heading>
                <UnorderedList>
                  {results[secondMbtiType].am.map((r, index) => {
                    return (
                      <ListItem
                        key={`second-${results[secondMbtiType].type}-${index}`}
                      >
                        {r}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
              <Box my={6}>
                <Heading mb={3} size="md">
                  {titles[secondParentChildBinary].will}
                </Heading>
                <UnorderedList>
                  {results[secondMbtiType].will.map((r, index) => {
                    return (
                      <ListItem
                        key={`second-${results[secondMbtiType].type}-${index}`}
                      >
                        {r}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
              <Box my={6}>
                <Heading mb={3} size="md">
                  {titles[secondParentChildBinary].hard}
                </Heading>
                <UnorderedList>
                  {results[secondMbtiType].hard.map((r, index) => {
                    return (
                      <ListItem
                        key={`second-${results[secondMbtiType].type}-${index}`}
                      >
                        {r}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
            </Flex>
          </Box>
          <DiffPC a={firstAnswers} b={secondAnswers} />
        </VStack>
        <ResultShare
          parentChild={secondParentChildBinary ? '엄마/아빠' : '자녀'}
          url={`https://mfd-mbti.vercel.app/${router.asPath}`}
          heading="한테도 결과 알려주기!"
        />
        <MainShare
          heading="나만 알 순 없지 테스트 소문내기!"
          url="https://mfd-mbti.vercel.app"
        />
      </VStack>
      <Footer mt={10} />
    </Container>
  );
};

export default ResultsMbti;
