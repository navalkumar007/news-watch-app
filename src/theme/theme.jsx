import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const CustomTheme = extendTheme({
  initialColorMode: 'system',
  useSystemColorMode: true,
  colors: {
    darkThemeColor: {
      900: "#15023a",
    },
  },
  textStyles: {
    logoLeft: {
      fontFamily: 'Khand',
      fontSize: '30px',
      fontWeight: '700',
    },
    logoRight: {
      fontFamily: 'Oooh Baby',
      fontSize: '30px',
      fontWeight: '800',
    },
  },
  styles: {
    global: (props) => ({
      'body::-webkit-scrollbar-thumb': {
        'background-color': mode('#bec3cc', '#31058a')(props),
      },
    })
  },
});

export default CustomTheme;
