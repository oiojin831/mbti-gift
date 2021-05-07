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
import Link from "next/link";
import { MainShare } from "../components/Share";
import Head from "next/head";

export default function Home() {
  return (
    <Container p={0}>
      <Head>
        <title>My page title</title>
        <meta property="og:url" content="https://mfd-mbti.vercel.app" />
        <meta property="og:title" content="어버이날 MBTI by ㅇㅈ" key="title" />
        <meta
          property="og:description"
          content="어버이날 기념 부모님 mbti 테스트로 자녀들과 더 가까워지세요"
        />
        <meta
          property="og:image"
          content="https://mfd-mbti.vercel.app/_next/image?url=%2Fmain.jpeg&w=3840&q=75"
        />
      </Head>
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
