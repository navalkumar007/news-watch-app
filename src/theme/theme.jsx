import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const CustomTheme = extendTheme({
  fonts: {
    body: `'Mona Sans Black', sans-serif`,
  },
  initialColorMode: "system",
  useSystemColorMode: true,
  colors: {
    darkThemeColor: {
      900: "#15023a",
    },
  },
  textStyles: {
    logoLeft: {
      fontFamily: "Khand",
      fontSize: "30px",
      fontWeight: "700",
    },
    logoRight: {
      fontFamily: "Oooh Baby",
      fontSize: "30px",
      fontWeight: "800",
    },
  },
  styles: {
    global: (props) => ({
      "body::-webkit-scrollbar-thumb": {
        backgroundColor: mode("#bec3cc", "#31058a")(props),
      },
      body: {
        transitionProperty: "all",
        transitionDuration: "normal",
      },
    }),
  },
  config: {
    disableTransitionOnChange: false,
  },
});

export default CustomTheme;
