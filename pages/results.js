import {
  Container,
  VStack,
  Box,
  Button,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";
import HeroImage from "../components/HeroImage";
import Header from "../components/Header";
import { useRouter } from "next/router";

const ResultsPage = () => {
  const router = useRouter();
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
          <Button>테스트 시작</Button>
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
