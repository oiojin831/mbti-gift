import {
  Button,
  Box,
  Center,
  Heading,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Box pos="sticky" top={0} bg="white" zIndex={2}>
      <Center h={14}>
        <Heading size="lg">
          <Link href="/" passHref>
            <ChakraLink>어버이 MBTI</ChakraLink>
          </Link>
        </Heading>
      </Center>
    </Box>
  );
};

export default Header;
