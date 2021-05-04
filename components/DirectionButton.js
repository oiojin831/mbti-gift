import { Button } from "@chakra-ui/react";

const DirectionButton = ({ dispatch, type, answer = "", text, ...props }) => {
  return (
    <Button
      onClick={() => dispatch({ type, answer })}
      colorScheme="green"
      variant="outline"
      {...props}
    >
      {text}
    </Button>
  );
};

export default DirectionButton;
