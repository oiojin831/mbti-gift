import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const QuestionSlider = ({ value }) => {
  const [currentIndex, setCurrentIndex] = useState(value);

  useEffect(() => {
    setCurrentIndex(value);
  }, [value]);

  return (
    <Slider
      aria-label="slider-ex-1"
      value={currentIndex}
      max={12}
      isReadOnly={true}
      focusThumbOnChange={false}
      colorScheme="brand"
    >
      <SliderTrack>
        <Box position="relative" right={10} />
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={5}>
        <Box as={FaAngleRight} />
      </SliderThumb>
    </Slider>
  );
};

export default QuestionSlider;
