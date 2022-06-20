import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    body: "'Inter'",
    heading: "'Inter'",
  },
  // styles: {
  //   global: (props) => ({
  //     body: {
  //       // bg: mode("blackAlpha.700", "blackAlpha.700")(props),
  //       color: mode("white", "white")(props),
  //     },
  //   }),
  // },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
