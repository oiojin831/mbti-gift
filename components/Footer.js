import {
  Button,
  Box,
  Center,
  Heading,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Box pos="fixed" w="100%" mt={8} bottom={0} bg="brand.600" zIndex={2}>
      <Center h={14}>
        <Heading size="sm">
          <Link href="/" passHref>
            <ChakraLink color="white">Created by ㅇ ㅈ</ChakraLink>
          </Link>
        </Heading>
      </Center>
    </Box>
  );
};

export default Footer;
