import {
  Container,
  VStack,
  Box,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import HeroImage from "../components/HeroImage";
import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <Container p={0}>
      <Header />
      <VStack spacing={7} align="stretch">
        <Box>
          <HeroImage />
        </Box>
        <VStack spacing={7} align="center">
          <Heading>부모님이 바라는 선물 유형</Heading>
          <Text>아마도 무조건 돈이 최고지?</Text>
          <Link href="/survey" passHref>
            <Button>테스트 시작하기</Button>
          </Link>
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
}
