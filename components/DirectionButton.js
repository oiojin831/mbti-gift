import { Button } from "@chakra-ui/react";

const DirectionButton = ({ dispatch, type, answer = 0, text, ...props }) => {
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
