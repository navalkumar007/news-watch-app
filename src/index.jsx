import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import Fonts from './theme/font'
import CustomTheme from "./theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={CustomTheme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
