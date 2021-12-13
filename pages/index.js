import Link from 'next/link';
import { Container, VStack, Text } from '@chakra-ui/react';
import { MetaData, Header, HeroImage } from '../components';

export default function HomePage() {
  return (
    <Container p={0}>
      <MetaData />
      <Header title="기념일 MBTI" />
      <VStack spacing={7} align="stretch">
        <Link href="/mfd-mbti" passHref>
          <a>
            <HeroImage src="/mfd-main.jpeg" />
            <Text textAlign="center" fontSize="4xl">
              어버이날 mbti
            </Text>
          </a>
        </Link>
        <Link href="/christmas-mbti" passHref>
          <a>
            <HeroImage src="/entp.png" />
            <Text textAlign="center" fontSize="4xl">
              크리스마스 mbti
            </Text>
          </a>
        </Link>
      </VStack>
    </Container>
  );
}
