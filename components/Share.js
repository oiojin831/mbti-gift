import {
  Box,
  Heading,
  HStack,
  Link as ChakraLink,
  Icon,
  Button,
} from "@chakra-ui/react";
import {
  RiKakaoTalkFill,
  RiInstagramLine,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinksLine,
} from "react-icons/ri";
import { clickToCopy } from "../helpers/copy";
import Link from "next/link";

const MainShare = ({ heading, url }) => {
  return (
    <Box pt={8}>
      <Heading fontSize="lg" textAlign="center" mb={4}>
        {heading}
      </Heading>
      <HStack justifyContent="space-around">
        <Icon
          as={RiLinksLine}
          w={8}
          h={8}
          color="black.500"
          onClick={() => clickToCopy(url)}
        />
      </HStack>
    </Box>
  );
};

const ResultShare = ({ pc, url, heading }) => {
  console.log("inurl", url);
  return (
    <>
      <Link href="/">
        <Button colorScheme="brand">테스트 다시하기</Button>
      </Link>
      <Box pt={10}>
        <Heading fontSize="lg" textAlign="center" mb={4}>
          {`${pc}${heading}`}
        </Heading>
        <HStack justifyContent="space-around">
          <Icon
            as={RiLinksLine}
            w={8}
            h={8}
            color="black.500"
            onClick={() => clickToCopy(url)}
          />
        </HStack>
      </Box>
    </>
  );
};

export { MainShare, ResultShare };
/*

        <ChakraLink href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.mfd-mbti.vercel.app%2Fdocs%2Fplugins%2F&amp%3B">
          <Icon as={RiFacebookBoxFill} w={8} h={8} color="black.500" />
        </ChakraLink>
        <ChakraLink href="http://www.twitter.com/share?url=www.mfd-mbti.verce.app&text=당신은+엄마+아빠에대해+얼마나+알고있나요">
          <Icon as={RiTwitterFill} w={8} h={8} color="black.500" />
        </ChakraLink>
*/

/*
          <ChakraLink
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}%2Fdocs%2Fplugins%2F&amp%3B`}
          >
            <Icon as={RiFacebookBoxFill} w={8} h={8} color="black.500" />
          </ChakraLink>
          <ChakraLink
            href={`http://www.twitter.com/share?url=${url}&text=당신은+엄마+아빠에대해+얼마나+알고있나요`}
          >
            <Icon as={RiTwitterFill} w={8} h={8} color="black.500" />
          </ChakraLink>
 */
