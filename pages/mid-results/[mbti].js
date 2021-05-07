import Link from "next/link";
import { Container, VStack, Box, Button, Flex, Heading, UnorderedList, ListItem } from "@chakra-ui/react"; // prettier-ignore
import Image from "next/image";

import HeroImage from "../../components/HeroImage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { decToBinArr } from "../../helpers/crypto";

import { mfdQSheet1, mfdResults1, mfdTitles1 } from "../../data";
import { useRouter } from "next/router";
import { MainShare, ResultShare } from "../../components/Share";

export async function getStaticPaths() {
  const paths = [{ params: { mbti: "INFP-4127" } }];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const splitted = params.mbti.split("-");
  if (splitted) {
    const mbtiType = splitted[0];
    const firstAnswers = splitted[1];

    return {
      props: {
        mbtiType,
        firstAnswers,
        qaSheet: mfdQSheet1,
        results: mfdResults1,
        titles: mfdTitles1,
      },
      revalidate: 3600,
    };
  }
}

const MidResult = ({ mbtiType, firstAnswers, qaSheet, results, titles }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  console.log(router);
  const pc = decToBinArr(firstAnswers)[0];
  //pc => 0 -> 부모 , 1 -> 자식
  return (
    <Container p={0}>
      <Header />
      <VStack m={3} spacing={4} align="stretch">
        <Box textAlign="center">
          <Heading textAlign="center" size="lg">
            {titles[pc].title}
          </Heading>
          <Heading textAlign="center" size="xl">
            {mbtiType}
          </Heading>
          <Image
            alt={mbtiType}
            src={`/${mbtiType.toLowerCase()}.png`}
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
            borderRadius={4}
          >
            <Box my={6}>
              <Heading mb={3} size="md">
                {titles[pc].am}
              </Heading>
              <UnorderedList>
                {results[mbtiType].am.map((r, index) => {
                  return (
                    <ListItem key={`${results[mbtiType].type}-${index}`}>
                      {r}
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
            <Box my={6}>
              <Heading mb={3} size="md">
                {titles[pc].will}
              </Heading>
              <UnorderedList>
                {results[mbtiType].will.map((r, index) => {
                  return (
                    <ListItem key={`${results[mbtiType].type}-${index}`}>
                      {r}
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
            <Box my={6}>
              <Heading mb={3} size="md">
                {titles[pc].hard}
              </Heading>
              <UnorderedList>
                {results[mbtiType].will.map((r, index) => {
                  return (
                    <ListItem key={`${results[mbtiType].type}-${index}`}>
                      {r}
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
          </Flex>
        </Box>
        <ResultShare
          pc={decToBinArr(firstAnswers)[0] === 0 ? "자녀" : "엄마/아빠"}
          url={`https://mfd-mbti.vercel.app/survey/${router.query.mbti}`}
          heading=" 테스트 시켜서 확인하기!"
        />
        <MainShare
          heading="나만 알 순 없지 테스트 소문내기!"
          url="https://mfd-mbti.vercel.app"
        />
      </VStack>
    </Container>
  );
};

export default MidResult;
