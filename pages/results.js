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
          <Heading>{`${router.query.mbti}인 부모님 `}</Heading>
          <Text>텍스트</Text>
          {link ? (
            <Link
              href={`survey?mbti=${router.query.mbti}&a=${router.query.a}`}
              passHref
            >
              <Button>부모 자식 다르사람하기</Button>
            </Link>
          ) : (
            <ComparePC a={router.query.a} b={router.query.b} />
          )}
        </VStack>
        <Box w="100%" pt="50%" bg="pink.100">
          zzz
        </Box>
        <Box w="100%" pt="50%" bg="pink.100">
          kkkk
        </Box>
        <Box w="100%" pt="50%" bg="red.300">
          lll
        </Box>
      </VStack>
    </Container>
  );
};

export default ResultsPage;
