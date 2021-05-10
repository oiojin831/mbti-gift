import { Container, VStack, Box, Button, Flex, Heading, UnorderedList, ListItem } from "@chakra-ui/react"; // prettier-ignore
import { useRouter } from "next/router";
import Image from "next/image";

import { Header, MainShare, ResultShare } from "../../components";

import { decToBinArr } from "../../helpers/crypto";
import { results, titles } from "../../data";

export async function getStaticPaths() {
  const paths = [{ params: { mbti: "INFP-4127" } }];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const splitted = params.mbti.split("-");
  if (splitted) {
    const mbtiType = splitted[0];
    const answerList = splitted[1];
    const parentChildBinary = decToBinArr(answerList)[0];

    return {
      props: {
        mbtiType,
        parentChildBinary,
        results,
        titles,
      },
      revalidate: 3600,
    };
  }
}

const MidResult = ({ mbtiType, parentChildBinary, results, titles }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Generating Loading...</div>;
  }

  return (
    <Container p={0}>
      <Header />
      <VStack m={3} spacing={4} align="stretch">
        <Box textAlign="center">
          <Heading textAlign="center" size="lg">
            {titles[parentChildBinary].title}
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
                {titles[parentChildBinary].am}
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
                {titles[parentChildBinary].will}
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
                {titles[parentChildBinary].hard}
              </Heading>
              <UnorderedList>
                {results[mbtiType].hard.map((r, index) => {
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
          parentChild={parentChildBinary === 0 ? "자녀" : "엄마/아빠"}
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
