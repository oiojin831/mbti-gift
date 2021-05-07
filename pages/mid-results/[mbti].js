import Link from "next/link";
import { Container, VStack, Box, Button, Heading, UnorderedList, ListItem } from "@chakra-ui/react"; // prettier-ignore
import Image from "next/image";

import HeroImage from "../../components/HeroImage";
import Header from "../../components/Header";
import { decToBinArr } from "../../helpers/crypto";
import { mfdQSheet1, mfdResults1, mfdTitles1 } from "../../data";
import { useRouter } from "next/router";

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
        results: mfdResults1[mbtiType],
        titles: mfdTitles1,
      },
      revalidate: 3600,
    };
  }
}

const MidResult = ({ mbtiType, firstAnswers, qaSheet, results, titles }) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <div>Loading...</div>;
  }
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
          <VStack border="3px solid black" p={8} spacing={6} borderRadius={4}>
            <Box>
              <Heading p={3} textAlign="center" size="md">
                {titles.am}
              </Heading>
              <UnorderedList>
                {results.am.map((r, index) => {
                  return (
                    <ListItem key={`${results.type}-${index}`}>{r}</ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
            <Box>
              <Heading p={3} size="md">
                엄마/아빠는 이런 내가 이런 사람이 되길 바라지 않을까?
              </Heading>
              <UnorderedList>
                {results.will.map((r, index) => {
                  return (
                    <ListItem key={`${results.type}-${index}`}>{r}</ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
            <Box>
              <Heading p={3} size="md">
                우리 엄마/아빠는 이러면 버거워할껄?
              </Heading>
              <UnorderedList>
                {results.will.map((r, index) => {
                  return (
                    <ListItem key={`${results.type}-${index}`}>{r}</ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
          </VStack>
        </Box>
        <Link href={`/survey/${mbtiType}-${firstAnswers}`} passHref>
          <Button>부모 자식 다르사람하기</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default MidResult;
