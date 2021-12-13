import { Box, Center, Heading, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

const Header = ({ title }) => {
  return (
    <Box pos="sticky" top={0} bg="brand.600" zIndex={2}>
      <Center h={14}>
        <Heading size="lg">
          <Link href="/" passHref>
            <ChakraLink color="white">{title}</ChakraLink>
          </Link>
        </Heading>
      </Center>
    </Box>
  );
};

export default Header;
