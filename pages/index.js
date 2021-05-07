import { Container, VStack, Stack, Box, Button, Heading, Text, Link as ChakraLink } from "@chakra-ui/react"; // prettier-ignore
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
        <Box w="100%" pt="50%" bg="pink.100">
          공유 아이콘
        </Box>
      </VStack>
    </Container>
  );
}
