import { Container, VStack, Box } from "@chakra-ui/react";
import HeroImage from "../../components/HeroImage";
import Header from "../../components/Header";

const MidResultsPage = () => {
  return (
    <Container p={0}>
      <Header />
      <VStack spacing={7} align="stretch">
        <Box>
          <HeroImage />
        </Box>
      </VStack>
    </Container>
  );
};

export default MidResultsPage;
