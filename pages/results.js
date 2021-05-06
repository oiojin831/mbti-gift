import {
  Container,
  VStack,
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import HeroImage from "../components/HeroImage";
import Header from "../components/Header";
import { useRouter } from "next/router";
import Link from "next/link";
import ComparePC from "../components/ComparePC";

const ResultsPage = () => {
  const router = useRouter();
  const link = router.query.b ? null : router.query.a;
  return (
    <Container p={0}>
      <Header />
      <VStack spacing={7} align="stretch">
        <Box>
          <HeroImage />
        </Box>
        <VStack spacing={7} align="center">
          <Heading>{`${router.query.mbti}인 부모님이 바라는 선물 유형`}</Heading>
          <Text>아마도 무조건 돈이 최고지?</Text>
          <Text>A의 결과를 가지고 새로운 링크 만들기</Text>
          {link ? (
            <Link
              href={`survey?mbti=${router.query.mbti}&a=${router.query.a}`}
              passHref
            >
              <Button>자녀/부모에게 보내기</Button>
            </Link>
          ) : (
            <ComparePC a={router.query.a} b={router.query.b} />
          )}
        </VStack>
        <Box w="100%" pt="50%" bg="pink.100">
          참여자수가 1000명 이상일때 참여자수 보여주기.
        </Box>
        <Box w="100%" pt="50%" bg="pink.100">
          공유 아이콘
        </Box>
        <Box w="100%" pt="50%" bg="red.300">
          인기 순위 1위 2위
        </Box>
      </VStack>
    </Container>
  );
};

export default ResultsPage;
