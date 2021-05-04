import { Box, Center, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box pos="sticky" top={0} bg="white" zIndex={2}>
      <Center h={14}>
        <Heading size="lg">어버이 MBTI</Heading>
      </Center>
    </Box>
  );
};

export default Header;
