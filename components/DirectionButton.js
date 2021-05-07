import { Text, Button } from "@chakra-ui/react";
import { IoIosArrowRoundBack } from "react-icons/io";

const DirectionButton = ({
  dispatch,
  type,
  answer = 0,
  text,
  qaSheetPageNumber,
  ...props
}) => {
  if (type === "previousPage") {
    return (
      <Button
        px={0}
        variant="link"
        textColor="black"
        colorScheme="brand"
        aria-label="back"
        fontSize="20px"
        onClick={() => dispatch({ type, answer, qaSheetPageNumber })}
        {...props}
        leftIcon={<IoIosArrowRoundBack />}
      >
        {text}
      </Button>
    );
  }

  return (
    <Button
      fontSize={15}
      onClick={() => dispatch({ type, answer, qaSheetPageNumber })}
      colorScheme="brand"
      {...props}
    >
      <Text display="inline-block" wordBreak="keep-all">
        {text}
      </Text>
    </Button>
  );
};

export default DirectionButton;
