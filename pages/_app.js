import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  sizes: {
    container: "md",
  },
  colors: {
    brand: {
      0: "fff8fa",
      50: "#ffe8ef",
      100: "#ffd6e2",
      200: "#ffc3d5",
      300: "#ffadc5",
      400: "#ff92b2",
      500: "#ff6f9a",
      600: "#FF5487",
      700: "#ed4e7e",
      800: "#bc3e63",
      900: "#6f253b",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
