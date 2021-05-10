import Link from "next/link";
import { Container, VStack, Stack, Box, Button, Heading, Text, Link as ChakraLink } from "@chakra-ui/react"; // prettier-ignore
import { MetaData, Header, HeroImage, MainShare } from "../components";
import { homePage } from "../data";

export default function HomePage() {
  return (
    <Container p={0}>
      <MetaData />
      <Header />
      <VStack spacing={7} align="stretch">
        <Box>
          <HeroImage />
        </Box>
        <VStack spacing={7} align="center">
          <Stack spacing={3}>
            <Heading>{homePage.heading1}</Heading>
            <Text textAlign="center" fontSize="lg" fontWeight="bold">
              {homePage.description1}
            </Text>
            <Text textAlign="center" fontSize="lg" fontWeight="bold">
              {homePage.description2}
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
