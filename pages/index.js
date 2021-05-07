import {
  Container,
  VStack,
  Stack,
  Box,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

import HeroImage from "../components/HeroImage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { MainShare } from "../components/Share";

export default function Home() {
  return (
    <Container p={0}>
      <Header />
      <VStack spacing={7} align="stretch">
        <Box>
          <HeroImage />
        </Box>
        <VStack spacing={7} align="center">
          <Stack spacing={3}>
            <Heading>어버이날 맞이 MBTI 테스트</Heading>
            <Text textAlign="center" fontSize="lg" fontWeight="bold">
              나는 과연 엄마아빠에 대해 얼마나 알고 있을까?
            </Text>
            <Text textAlign="center" fontSize="lg" fontWeight="bold">
              엄마 아빠의 MBTI는?
            </Text>
          </Stack>
          <Link href="/survey" passHref>
            <Button colorScheme="brand">테스트 시작하기</Button>
          </Link>
        </VStack>
        <MainShare heading="테스트 공유하기!" />
      </VStack>
    </Container>
  );
}
