import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ColorModeScript } from '@chakra-ui/react'

//styles
import "./App.scss";
import theme from './theme/theme';

//layouts
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

//Router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
